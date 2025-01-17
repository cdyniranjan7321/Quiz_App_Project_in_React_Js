import { NextResponse } from 'next/server'
import prisma from '../../../../../prisma/client'

export async function POST(request: Request) {
  try {
    const {
      id,
      roundId,
      question,
      answer,
      questionType,
      uri,
      font,
      isAsked,
      option1,
      option2,
      option3,
      option4,
      fiftyOption1,
      fiftyOption2,
    } = await request.json()

    const questionInfo = {
      id,
      roundId,
      question,
      answer,
      questionType,
      uri,
      font,
      isAsked,
      option1,
      option2,
      option3,
      option4,
      fiftyOption1,
      fiftyOption2,
    }

    const questionAnswer = await prisma.questionAnswer.create({
      data: questionInfo,
    })
    return NextResponse.json({ questionAnswer })
  } catch (err) {
    NextResponse.json(err)
  }
}
