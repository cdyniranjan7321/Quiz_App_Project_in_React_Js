import { NextResponse } from 'next/server'
import prisma from '../../../../../prisma/client'

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)

  const round_id = searchParams.get('roundId')
  const questionNumber = searchParams.get('questionNumber')

  const roundId = round_id !== null ? parseInt(round_id) : 0
  const id = questionNumber !== null ? parseInt(questionNumber) : 0

  try {
    const result = await prisma.questionAnswer.delete({
      where: { id_roundId: { id, roundId } },
    })
    return NextResponse.json('Deleted Successfully !!!')
  } catch (error) {
    return NextResponse.json({ error })
  }
}
