import { NextResponse } from 'next/server'
import prisma from '../../../../../../../prisma/client'

export async function PATCH(request: Request, context: { params: any }) {
  const round_id = context.params.roundId
  const tidd = context.params.tid

  const roundId = round_id !== null ? parseInt(round_id) : 0
  const tid = tidd !== null ? parseInt(tidd) : 0

  try {
    console.log(request.body)
    const score = await prisma.score.update({
      where: { tid_roundId: { tid, roundId } },
      data: await request.json(),
    })
    return NextResponse.json({ score })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
