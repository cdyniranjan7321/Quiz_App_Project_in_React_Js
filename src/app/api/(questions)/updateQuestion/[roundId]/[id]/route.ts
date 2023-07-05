import { NextResponse } from 'next/server'
import prisma from '../../../../../../../prisma/client'

export async function PATCH(request: Request, context: { params: any }) {
  const round_id = context.params.roundId
  const questionNumber = context.params.id

  const roundId = round_id !== null ? parseInt(round_id) : 0
  const id = questionNumber !== null ? parseInt(questionNumber) : 0

  try {
    console.log(request.body)
    const question = await prisma.questionAnswer.update({
      where: { id_roundId: { id, roundId } },
      data: { isAsked: false },
    })
    return NextResponse.json({ question })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
