export interface ErrorDetails {
  field?: string;
  issue?: string;
  [key: string]: any;
}

export class HttpError extends Error {
  public readonly statusCode: number;
  public readonly code: string;
  public readonly details?: ErrorDetails;

  constructor(statusCode: number, code: string, message: string, details?: ErrorDetails) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    // Corrige o prototype para que instanceof funcione corretamente
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

// Factory functions / subclasses for common HTTP errors
export class BadRequestError extends HttpError {
  constructor(message = 'Bad Request', details?: ErrorDetails) {
    super(400, 'BAD_REQUEST', message, details);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message = 'Unauthorized', details?: ErrorDetails) {
    super(401, 'UNAUTHORIZED', message, details);
  }
}

export class ForbiddenError extends HttpError {
  constructor(message = 'Forbidden', details?: ErrorDetails) {
    super(403, 'FORBIDDEN', message, details);
  }
}

export class NotFoundError extends HttpError {
  constructor(message = 'Not Found', details?: ErrorDetails) {
    super(404, 'NOT_FOUND', message, details);
  }
}

export class ConflictError extends HttpError {
  constructor(message = 'Conflict', details?: ErrorDetails) {
    super(409, 'CONFLICT', message, details);
  }
}

export class PayloadTooLargeError extends HttpError {
  constructor(message = 'Payload Too Large', details?: ErrorDetails) {
    super(413, 'PAYLOAD_TOO_LARGE', message, details);
  }
}

export class UnsupportedMediaTypeError extends HttpError {
  constructor(message = 'Unsupported Media Type', details?: ErrorDetails) {
    super(415, 'UNSUPPORTED_MEDIA_TYPE', message, details);
  }
}

export class UnprocessableEntityError extends HttpError {
  constructor(message = 'Unprocessable Entity', details?: ErrorDetails) {
    super(422, 'UNPROCESSABLE_ENTITY', message, details);
  }
}

export class TooManyRequestsError extends HttpError {
  constructor(message = 'Too Many Requests', details?: ErrorDetails) {
    super(429, 'TOO_MANY_REQUESTS', message, details);
  }
}
