import { NextResponse } from 'next/server'
import prisma from '../../../../../prisma/client'

export async function GET() {
  try {
    const score = await prisma.score.findMany()
    return NextResponse.json({ score })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
