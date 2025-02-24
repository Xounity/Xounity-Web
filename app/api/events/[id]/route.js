import { connectDB } from "@/app/connectDB.js";
import { Event } from "@/app/models/event.js";
import { isObjectIdOrHexString } from "mongoose";
import { NextResponse } from "next/server";

connectDB(process.env.MONGO_URL);

export async function GET(request, {params}) {
    const {id} = await params;

    if(!isObjectIdOrHexString(id)){
        return NextResponse.json({message: "Event not found"}, {status: 400});
    }

    const data = await Event.find({_id: id}, {password: 0, salt: 0, createdAt: 0, updatedAt: 0, __v: 0});

    return NextResponse.json(data);
  }