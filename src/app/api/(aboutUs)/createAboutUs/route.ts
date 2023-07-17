import { NextResponse } from 'next/server'
import prisma from '../../../../../prisma/client'

export async function POST(request: Request) {
  try {
    const {
      id,
      Title,
      organization,
      field1,
      field2,
    } = await request.json()

    const organizationInfo = {
      id,
      Title,
      organization,
      field1,
      field2,
    }

    const organizations = await prisma.aboutUs.create({
      data: organizationInfo,
    })
    return NextResponse.json({ organizations })
  } catch (err) {
    NextResponse.json(err)
  }
}
