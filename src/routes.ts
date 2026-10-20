import express from 'express'
import { candidatesController } from './controllers/candidates-controller'
import { companiesController } from './controllers/companies-controller'
import { jobsController } from './controllers/jobs-controller'

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
router.get('/companies/:id', companiesController.show)
router.delete('/companies/:id', companiesController.destroy)

router.get('/jobs', jobsController.index)
router.post('/jobs', jobsController.create)
router.put('/jobs/:id', jobsController.update)
router.get('/jobs/:id', jobsController.show)
router.delete('/jobs/:id', jobsController.destroy)

router.post('/jobs/:id/addCandidate', jobsController.addCandidate)
router.post('/jobs/:id/removeCandidate', jobsController.removeCandidate)

export { router }