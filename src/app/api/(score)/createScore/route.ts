import { NextResponse } from 'next/server'
import prisma from '../../../../../prisma/client'

export async function POST(request: Request) {
  try {
    const {
      score,
      tid,
      roundId,
      qid,
      qroundId,
    } = await request.json()
    console.log('score:', score);
    console.log('tid:', tid);
    console.log('roundId:', roundId);
    console.log('qid:', qid);
    console.log('qroundId:', qroundId);
    
    const scoreInfo = {
      score,
      tid,
      roundId,
      qid,
      qroundId,
    }

    const scores = await prisma.score.create({
      data: scoreInfo,
    })
    return NextResponse.json({ scores })
  } catch (err) {
   return NextResponse.json(err)
  }
}
