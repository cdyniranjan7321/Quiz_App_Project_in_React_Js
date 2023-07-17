import { NextResponse } from 'next/server'
import prisma from '../../../../../prisma/client'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const round_id = searchParams.get('roundId')
  const questionNumber = searchParams.get('questionNumber')
  try {
    if (questionNumber !== null && round_id !== null) {
      let id = parseInt(questionNumber)
      let roundId = parseInt(round_id)
      const question = await prisma.questionAnswer.findUnique({
        where: { id_roundId: { id, roundId } },
      })
      console.log('question : ', question)
      return NextResponse.json({ question })
    }
  } catch (err) {
    return NextResponse.json({ err })
  }
}
