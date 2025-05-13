import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { HttpError } from '../helpers/httpError';
import log from '../logger';

export function NotFound(req: Request, res: Response, next: NextFunction) {
  if (res.status(404)) {
    log.info('Rota não encontrada');
    next();
  }
}

export function errorHandler(exception: unknown, req: Request, res: Response, next: NextFunction) {
  if (exception instanceof HttpError) {
    const { statusCode, code, message, details } = exception;
    res.status(statusCode).json({
      error: { code, message, ...(details && { details }) }
    });

    return;
  }

  // Handler genérico para erros não esperados
  log.error(exception);
  res.status(500).json({
    error: { code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error' }
  });

  return;
}
