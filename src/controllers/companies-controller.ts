import { Request, Response } from 'express'
import { Company } from '../models/company'

export const companiesController = {

  index: async (req: Request, res: Response) => {
    try {
      const companies = await Company.findAll()
      return res.json(companies)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },

  create: async (req: Request, res: Response) => {
    const { name, email, bio, website } = req.body

    try {
      const company = await Company.create({
        name,
        email,
        bio,
        website
      })
      return res.status(201).json(company)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },

  update: async (req: Request, res: Response) => {
    const { name, email, bio, website } = req.body
    const { id } = req.params

    try {
      const [affectedRows, companies] = await Company.update({
        name,
        email,
        bio,
        website
      }, {
        where: { id },
        returning: true
      })

      return res.status(200).json(companies[0])
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },

  show: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
      const company = await Company.findByPk(Number(id))

      if (company == null) {
        return res.status(404).json({ message: 'empresa não encontrada' })
      }

      return res.status(200).json({ company })

    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },
  
  destroy: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
      await Company.destroy({where: { id } })

      return res.status(204).send()

    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  }

}