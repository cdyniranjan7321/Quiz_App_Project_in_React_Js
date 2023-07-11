import { NextResponse } from 'next/server'
import prisma from '../../../../../../prisma/client'

export async function PATCH(request: Request, context: { params: any }) {
  try {
    const round_id = context.params.id
    const id = round_id !== null ? parseInt(round_id) : 0

    const res = await request.json()

    const updatedData = await prisma.round.update({
      where: { id },
      data: res,
    })
    return NextResponse.json('Updated Successfully !')
  } catch (error) {
    return NextResponse.json({ error })
  }
}
