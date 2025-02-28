import { connectDB } from "@/app/connectDB.js";
import { User } from "@/app/models/user.js";
import { isObjectIdOrHexString } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    await connectDB(process.env.MONGO_URL);
    const {id} = await params;

    if(!isObjectIdOrHexString(id)){
        return NextResponse.json({message: "User not found"}, {status: 400});
    }

    const data = await User.find({_id: id}, {password: 0, salt: 0, createdAt: 0, updatedAt: 0, __v: 0});

    return NextResponse.json(data);
  }