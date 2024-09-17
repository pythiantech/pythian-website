import Cors from 'cors'
import type { NextApiRequest, NextApiResponse } from 'next'
// import nodemailer from 'nodemailer'

// Initialize the cors middleware
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
<<<<<<< HEAD
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
=======
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: () => Promise<any>) {
>>>>>>> new-main
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse<{ message: string }>) {
>>>>>>> new-main
  console.log("Request received:", req.method, req.body);
  
  // Run the middleware
  await runMiddleware(req, res, cors)

  if (req.method === 'POST') {
    const { to, subject, text } = req.body

    // Commented out email sending logic
    /*
    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    try {
      // Send mail with defined transport object
      let info = await transporter.sendMail({
        from: `"Pythtech" <${process.env.SMTP_USER}>`,
        to: to,
        subject: subject,
        text: text,
      })

      console.log("Message sent: %s", info.messageId)
      res.status(200).json({ message: "Email sent successfully" })
    } catch (error: unknown) {
      console.error("Detailed error:", error)
      if (error instanceof Error) {
        res.status(500).json({ error: "Failed to send email", details: error.message })
      } else {
        res.status(500).json({ error: "Failed to send email", details: "An unknown error occurred" })
      }
    }
    */

    // Simulated successful response
    console.log("Simulated email sending to:", to)
    console.log("Subject:", subject)
    console.log("Text:", text)
    res.status(200).json({ message: "Email sent successfully (simulated)" })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}