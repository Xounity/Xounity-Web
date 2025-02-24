import { connectDB } from "@/app/connectDB.js";
import { Team } from "@/app/models/team.js";
import { isObjectIdOrHexString } from "mongoose";
import { NextResponse } from "next/server";

connectDB(process.env.MONGO_URL);

export async function GET(request, {params}) {
    const {id} = await params;

    if(!isObjectIdOrHexString(id)){
        return NextResponse.json({message: "User not found"}, {status: 400});
    }

    const data = await Team.find({_id: id}, {__v: 0});

    return NextResponse.json(data);
  }