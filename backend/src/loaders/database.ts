import mongoose from 'mongoose'
import log from '../logger'
import env from '../config/env'

function dbconnect() {
  return mongoose
    .connect(env.DB_CONNECTION)
    .then(() => {
      log.info('Database connected')
    })
    .catch((error) => {
      console.log(error)
      log.error('db error', error)
      process.exit(1)
    })
}

export default dbconnect
