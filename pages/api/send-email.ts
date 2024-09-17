import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
// import nodemailer from 'nodemailer'

// Initialize the cors middleware
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (req: NextApiRequest, res: NextApiResponse, next: (result: any) => void) => void
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ message: string }>) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  // Rest of your handler code
  res.status(200).json({ message: 'Hello from the API!' })
}