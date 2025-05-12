import { Request, Response, NextFunction } from 'express';
import { NotFound, errorHandler } from './error.middleware';
import { HttpError } from '../helpers/httpError';
import log from '../logger';

jest.mock('../logger');

describe('Middleware Tests', () => {
  describe('NotFound Middleware', () => {
    it('should log "Rota não encontrada" and call next when status is 404', () => {
      const req = {} as Request;
      const res = { status: jest.fn().mockReturnValue(404) } as unknown as Response;
      const next = jest.fn();

      NotFound(req, res, next);

      expect(log.info).toHaveBeenCalledWith('Rota não encontrada');
      expect(next).toHaveBeenCalled();
    });
  });

  describe('errorHandler Middleware', () => {
    it('should handle HttpError and return proper response', () => {
      const req = {} as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      } as unknown as Response;
      const next = jest.fn();
      const error = new HttpError(400, 'BAD_REQUEST', 'Invalid request', { field: 'name' });

      errorHandler(error, req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: {
          code: 'BAD_REQUEST',
          message: 'Invalid request',
          details: { field: 'name' }
        }
      });
    });

    it('should handle unexpected errors and return 500 response', () => {
      const req = {} as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      } as unknown as Response;
      const next = jest.fn();
      const error = new Error('Unexpected error');

      errorHandler(error, req, res, next);

      expect(log.error).toHaveBeenCalledWith(error);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: {
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Internal server error'
        }
      });
    });
  });
});
