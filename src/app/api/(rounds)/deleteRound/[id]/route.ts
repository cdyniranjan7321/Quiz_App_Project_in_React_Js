import { NextResponse } from 'next/server'
import prisma from '../../../../../../prisma/client'

export async function DELETE(request: Request, context: { params: any }) {
  try {
    const team_id = context.params.id
    const id = team_id !== null ? parseInt(team_id) : 0
    const data = await prisma.round.delete({ where: { id } })
    return NextResponse.json('Deleted Successfully !!!')
  } catch (error) {
    return NextResponse.json(error)
  }
}
