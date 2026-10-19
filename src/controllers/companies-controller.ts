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

  ,

  update: async (req: Request, res: Response) => {
    const { name, email, bio, website } = req.body
    const { id } = req.params

    try {
      const company = await Company.findByPk(Number(id))

      if (company === null) {
        return res.status(404).json({ message: 'empresa não encontrada' })
      }

      company.name = name
      company.email = email
      company.bio = bio
      company.website = website

      await company.save()

      return res.status(200).json(company)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  }

}