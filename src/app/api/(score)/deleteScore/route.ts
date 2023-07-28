import { NextResponse } from 'next/server'
import prisma from '../../../../../prisma/client'

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)

  const round_id = searchParams.get('roundId')
  const scoreid = searchParams.get('tid')

  const roundId = round_id !== null ? parseInt(round_id) : 0
  const tid = scoreid !== null ? parseInt(scoreid) : 0

  try {
    const result = await prisma.score.delete({
      where: { tid_roundId: { tid, roundId } },
    })
    return NextResponse.json('Deleted Successfully !!!')
  } catch (error) {
    return NextResponse.json({ error })
  }
}
