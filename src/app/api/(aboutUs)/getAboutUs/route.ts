import { NextResponse } from 'next/server'
import prisma from '../../../../../prisma/client'

export async function GET() {
  try {
    const aboutUs = await prisma.aboutUs.findMany()
    return NextResponse.json({ aboutUs })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
