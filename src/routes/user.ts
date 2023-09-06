import Router from 'express'
import { getSomeUser } from '../controllers/user'
import { logTime } from '../middlewares/logging'

const user = Router()

user.get('/random-user', logTime, getSomeUser)

export default user
