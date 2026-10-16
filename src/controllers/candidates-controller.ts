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
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, email, phone, bio, openToWork } = req.body

    try {
      const candidate = await Candidate.findByPk(Number(id))

      if (candidate === null) {
        return res.status(404).json({ message: 'candidadto não encontrado' })
      }

      candidate.name = name
      candidate.email = email
      candidate.phone = phone
      candidate.bio = bio
      candidate.openToWork = openToWork
      
      await candidate.save()

      return res.status(200).json(candidate)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
  }

}