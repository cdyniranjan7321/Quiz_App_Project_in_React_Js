import { NextResponse } from "next/server"
import prisma from "../../../../../prisma/client"

export async function GET(){
    try{
        const rounds = await prisma.round.findMany()
        return NextResponse.json(rounds)
    } catch(err) {
        return NextResponse.json(err)
    }
}