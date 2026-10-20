import { Request, Response } from 'express'
import { Job } from '../models'

export const jobsController = {

  index: async (req: Request, res: Response) => {
    try {
      const jobs = await Job.findAll({ include: 'company' })
      return res.json(jobs)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },

  create: async (req: Request, res: Response) => {
    const { title, description, limitDate, companyId } = req.body

    try {
      const job = await Job.create({
        title,
        description,
        limitDate,
        companyId
      })

      return res.status(201).json(job)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },

  update: async (req: Request, res: Response) => {
    const { title, description, limitDate, companyId } = req.body
    const { id } = req.params

    try {
      const [affectedRows, jobs] = await Job.update({
        title,
        description,
        limitDate,
        companyId
      }, {
        where: { id },
        returning: true
      })

      return res.status(200).json(jobs[0])
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },

  show: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
      const job = await Job.findByPk(Number(id))

      if (job == null) {
        return res.status(404).json({ message: 'trabalho não encontrado' })
      }

      return res.status(200).json(job)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  }

}