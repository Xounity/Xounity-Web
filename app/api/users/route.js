import { connectDB } from "@/app/connectDB.js";
import { User } from "@/app/models/user.js";
import { NextResponse } from "next/server";

connectDB(process.env.MONGO_URL);

export async function GET() {
  const data = await User.find();
  return NextResponse.json(data);
}
