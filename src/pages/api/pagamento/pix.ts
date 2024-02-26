import { v4 as uuidv4 } from 'uuid'
import { NextApiRequest, NextApiResponse } from 'next'
import { PixPaymentDTO } from '../../../types/protocols'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: {
    error: boolean
    message: string
    payload: any
    results: PixPaymentDTO
  } = {
    error: false,
    message: 'Sem erros',
    payload: req.body,
    results: {
      codigo_pix:
        '',
      valor: 50.0,
      protocolo: uuidv4(),
    },
  }

  res.status(200).json(data)
}
