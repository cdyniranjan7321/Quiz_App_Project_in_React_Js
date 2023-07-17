import { NextResponse } from 'next/server'
import prisma from '../../../../../prisma/client'

export async function DELETE(request: Request, context: { params: any }) {
  try {
    const org_id = context.params.id
    const id = org_id !== null ? parseInt(org_id) : 0
    const data = await prisma.aboutUs.delete({ where: { id } })
    return NextResponse.json('Deleted Successfully !!!')
  } catch (error) {
    return NextResponse.json(error)
  }
}
