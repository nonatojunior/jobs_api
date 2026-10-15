import { Request, Response } from 'express'
import { Candidate } from '../models/candidate'

export const candidatesController = {
  index: async (req: Request, res: Response) => {
    const candidates = await Candidate.findAll()
    return res.json(candidates)
  }
}