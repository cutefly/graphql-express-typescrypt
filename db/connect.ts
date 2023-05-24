import mongoose from 'mongoose'
import envs from '../envs'

// DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7
mongoose.set('strictQuery', true)
mongoose.connect(envs.dbUrl)

export default mongoose.connection