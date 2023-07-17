import { NextResponse } from 'next/server'
import prisma from '../../../../../../prisma/client'

interface Team {
  teamName?: string
  gameOrder?: number
}

export async function PATCH(request: Request, context: { params: any }) {
  try {
    const team_id = context.params.id
    const id = team_id !== null ? parseInt(team_id) : 0
    const res: Team = await request.json()

    const data = await prisma.teams.update({
      where: { id },
      data: res,
    })
    return NextResponse.json('Updated Successfully !')
  } catch (error:any) {
    if (error.name === 'PrismaClientKnownRequestError') {
      return NextResponse.json('Sorry, provided teamId does not exist !')
    } else return NextResponse.json(error)
  }
}
