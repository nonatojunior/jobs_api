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
  }

}