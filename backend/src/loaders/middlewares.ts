import { Application } from 'express'
import { NotFound, errorHandler } from '../middlewares/error.middleware'

export default function (app: Application) {
  app.use(NotFound)
  app.use(errorHandler) 
}
