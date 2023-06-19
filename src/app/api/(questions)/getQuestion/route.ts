import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function GET(request : Request){
    const { searchParams } = new URL(request.url)
    const questionNumber = searchParams.get('questionNumber')
    try{
        if(questionNumber !== null){
            let id = parseInt(questionNumber)
            const question = await prisma.questionAnswer.findUnique({where: { id }})
            return NextResponse.json({ question })
        }

    } catch(err) {
        return NextResponse.json({ err })

    }

}
