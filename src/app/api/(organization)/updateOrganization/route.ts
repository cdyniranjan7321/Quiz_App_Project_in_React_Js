import { NextResponse } from 'next/server'
import prisma from '../../../../../prisma/client'

export async function PATCH(request: Request, context: { params: any }) {
    try {
        const Id = context.params.id
        const id = Id !== null ? parseInt(Id) : 0
        const res = await request.json()
        
    const updatedData = await prisma.aboutUs.update({
        where: { id },
        data: res,
      })
      return NextResponse.json('Updated Successfully !')
    } catch (error) {
      return NextResponse.json({ error })
    }
  }
  