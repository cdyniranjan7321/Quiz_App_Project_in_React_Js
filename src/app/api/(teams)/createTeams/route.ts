import { NextResponse } from 'next/server'
import { TeamsI } from '../../../../../types'
import prisma from '../../../../../prisma/client'

export async function POST(request: Request) {
  try {
    const teamInfo: TeamsI[] = await request.json()

    console.log(' teamInfo : ', teamInfo)
    const teams = await prisma.teams.createMany({
      data: teamInfo.map(({ id, teamName, gameOrder }) => ({
        id,
        teamName,
        gameOrder,
      })),
    })
    console.log('teams : ', teams)
    return NextResponse.json({ teams })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
