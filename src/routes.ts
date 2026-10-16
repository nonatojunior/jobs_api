import express from 'express'
import { candidatesController } from './controllers/candidates-controller'

const router = express.Router()

router.get('/', (req, res) => res.json({ hello: 'Hello, world!' }))

router.get('/candidates', candidatesController.index)
router.post('/candidates', candidatesController.create)
router.put('/candidates/:id', candidatesController.update)

export { router }