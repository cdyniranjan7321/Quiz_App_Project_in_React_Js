import { NextResponse } from 'next/server'
import prisma from '../../../../../prisma/client'

export async function POST(request: Request) {
  try {
    const { id, teamName, gameOrder } = await request.json()

    const teamInfo = { id, teamName, gameOrder }
    const teams = await prisma.teams.createMany({ data: teamInfo })
    return NextResponse.json({ teams })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
