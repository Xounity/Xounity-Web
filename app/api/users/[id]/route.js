import { connectDB } from "@/app/connectDB.js";
import { User } from "@/app/models/user.js";
import { isObjectIdOrHexString } from "mongoose";
import { NextResponse } from "next/server";

connectDB(process.env.MONGO_URL);

export async function GET(request, {params}) {
    const {id} = await params;

    if(!isObjectIdOrHexString(id)){
        return NextResponse.json({message: "User not found"}, {status: 400});
    }

    const data = await User.find({_id: id});

    return NextResponse.json(data);
  }