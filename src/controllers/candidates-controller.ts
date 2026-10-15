import { Request, Response } from 'express'
import { Candidate } from '../models/candidate'

export const candidatesController = {

  index: async (req: Request, res: Response) => {
    try {
      const candidates = await Candidate.findAll()
      return res.json(candidates)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  },

  create: async (req: Request, res: Response) => {
    console.log(req.body)
    const { name, email, phone, bio, openToWork } = req.body

    try {
      const candidate = await Candidate.create({
        name,
        email,
        phone,
        bio,
        openToWork,
      })
      return res.status(201).json(candidate)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  }

}