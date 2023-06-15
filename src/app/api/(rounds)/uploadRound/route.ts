import { NextResponse } from "next/server"
import prisma from "../../../../../prisma/client"

export async function POST(request : Request) {
    try{
        const { roundname, totalquestions, scorefirst, scoresecond,	scorethird,	scoreother,	scorenegative,	tomass,	tonextteam,	timefirst,	timesecond,	timethird,	hassubcategory,	issubcategory,	parentroundid,	ischoosen,	issubcategoryonlyonce,	israpidfire,	isestimation,	isbuzzer,	isgambling,	istiebreaker,	isoption,	isfiftyfifty } = await request.json()

        const roundInfo = {
            roundname,
            totalquestions,
            scorefirst, scoresecond,	scorethird,	scoreother,	scorenegative,	tomass,	tonextteam,	timefirst,	timesecond,	timethird,	hassubcategory,	issubcategory,	parentroundid,	ischoosen,	issubcategoryonlyonce,	israpidfire,	isestimation,	isbuzzer,	isgambling,	istiebreaker,	isoption,	isfiftyfifty
        }

        const rounds = await prisma.round.create({data : roundInfo})
        return NextResponse.json({rounds })

    } catch(err){
        NextResponse.json(err)
    }
}