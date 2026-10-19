import express from 'express'
import { candidatesController } from './controllers/candidates-controller'
import { companiesController } from './controllers/companies-controller'

const router = express.Router()

router.get('/', (req, res) => res.json({ hello: 'Hello, world!' }))

router.get('/candidates', candidatesController.index)
router.post('/candidates', candidatesController.create)
router.put('/candidates/:id', candidatesController.update)
router.get('/candidates/:id', candidatesController.show)
router.delete('/candidates/:id', candidatesController.destroy)

router.get('/companies', companiesController.index)
router.post('/companies', companiesController.create)
router.put('/companies/:id', companiesController.update)

export { router }