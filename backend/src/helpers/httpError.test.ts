import {
  HttpError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
  PayloadTooLargeError,
  UnsupportedMediaTypeError,
  UnprocessableEntityError,
  TooManyRequestsError
} from './httpError';

describe('HttpError and Subclasses', () => {
  describe('HttpError', () => {
    it('should create an instance of HttpError with the correct properties', () => {
      const error = new HttpError(500, 'INTERNAL_SERVER_ERROR', 'An error occurred', { field: 'test' });

      expect(error).toBeInstanceOf(HttpError);
      expect(error.statusCode).toBe(500);
      expect(error.code).toBe('INTERNAL_SERVER_ERROR');
      expect(error.message).toBe('An error occurred');
      expect(error.details).toEqual({ field: 'test' });
    });
  });

  describe('HttpError Subclasses', () => {
    it.each([
      [BadRequestError, 400, 'BAD_REQUEST', 'Bad Request'],
      [UnauthorizedError, 401, 'UNAUTHORIZED', 'Unauthorized'],
      [ForbiddenError, 403, 'FORBIDDEN', 'Forbidden'],
      [NotFoundError, 404, 'NOT_FOUND', 'Not Found'],
      [ConflictError, 409, 'CONFLICT', 'Conflict'],
      [PayloadTooLargeError, 413, 'PAYLOAD_TOO_LARGE', 'Payload Too Large'],
      [UnsupportedMediaTypeError, 415, 'UNSUPPORTED_MEDIA_TYPE', 'Unsupported Media Type'],
      [UnprocessableEntityError, 422, 'UNPROCESSABLE_ENTITY', 'Unprocessable Entity'],
      [TooManyRequestsError, 429, 'TOO_MANY_REQUESTS', 'Too Many Requests']
    ])(
      'should create an instance of %p with the correct properties',
      (ErrorClass, expectedStatusCode, expectedCode, defaultMessage) => {
        const error = new ErrorClass();
        expect(error).toBeInstanceOf(ErrorClass);
        expect(error.statusCode).toBe(expectedStatusCode);
        expect(error.code).toBe(expectedCode);
        expect(error.message).toBe(defaultMessage);
      }
    );

    it('should allow overriding the message and details in subclasses', () => {
      const details = { field: 'test' };
      const error = new BadRequestError('Custom message', details);

      expect(error.message).toBe('Custom message');
      expect(error.details).toEqual(details);
    });
  });
});
