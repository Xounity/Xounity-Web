import { connectDB } from "@/app/connectDB.js";
import { User } from "@/app/models/user.js";
import { NextResponse } from "next/server";

connectDB(process.env.MONGO_URL);

export async function POST(request) {
  const formData = await request.formData();

  const body = {email: undefined, password: undefined};
  formData.forEach((value, key) => {
    body[key] = value;
  });

  const { email, password } = body;

  console.log("body", body);

  if (
    !body ||
    !email ||
    !password
  ) {
    return NextResponse.json({ message: "All Fields are required!"}, {status: 400});
  }

  try {
    const user = await User.matchPassword(email, password);
    return NextResponse.json({redirectTo: `${process.env.NEXT_PUBLIC_ROOT_URL}`}, {status: 200});
  } catch (error) {
    return NextResponse.json({message: error.message}, {status: 400})
  }

}