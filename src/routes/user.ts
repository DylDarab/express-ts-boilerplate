import Router from 'express'
import { logTime } from 'middlewares/logging'
import { getSomeUser } from 'controllers/user'

const user = Router()

user.get('/random-user', logTime, getSomeUser)

export default user
