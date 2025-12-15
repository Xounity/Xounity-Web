import { connectDB } from "@/app/connectDB.js";
import { User } from "@/app/models/user.js";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB(process.env.MONGO_URL);
    const formData = await request.formData();
  
    const body = {name: undefined, email: undefined, password: undefined, role: undefined};
    formData.forEach((value, key) => {
      body[key] = value;
    });
  
    const { name, email, password, role } = body;
  
    if (
      !body ||
      !name ||
      !email ||
      !password
    ) {
      return NextResponse.json({ message: "All Fields are required!" }, {status: 400});
    }
  
    try {
      await User.create({
        name: name,
        email: email,
        password: password,
        role: role || "user"
      });
  
      return NextResponse.json({redirectTo: `${process.env.NEXT_PUBLIC_ROOT_URL}/signin`}, {status: 200});
    } catch (error) {
      return NextResponse.json({message: "Email already exists" || error.message}, {status: 400})
    }
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({error: error.message}, {status: 500});
}

}