import { connectDB } from "@/app/connectDB.js";
import { User } from "@/app/models/user.js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB(process.env.MONGO_URL);
    const data = await User.find({}, {password: 0, salt: 0, createdAt: 0, updatedAt: 0, __v: 0});
    return NextResponse.json(data);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({error: error.message}, {status: 500});
}
}

export async function DELETE(request) {
  try {
    await connectDB(process.env.MONGO_URL);
    const id = await request.nextUrl.searchParams.get("id");
    await User.findByIdAndDelete({ _id: id });
    return NextResponse.json({ message: "User Deleted" }, { status: 200 });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({error: error.message}, {status: 500});
}
}

export async function PUT(request) {
  try {
    await connectDB(process.env.MONGO_URL);
    const formData = await request.formData();
  
    const body = {};
    formData.forEach((value, key) => {
      body[key] = value;
    });
  
    if (!body || !body.name || !body.email || !body.role || !body.id) {
      return NextResponse.json(
        { message: "All Fields are required!" },
        { status: 400 }
      );
    }
  
    if(!body.password){
      await User.updateOne({_id: body.id}, {$set: {name: body.name, email: body.email, role: body.role}})
      return NextResponse.json({ message: "User Updated" }, { status: 200 });
    }
    else{
      await User.updateOneAndSave(body.id, body.name, body.email, body.role, body.password)
      return NextResponse.json({ message: "User Updated" }, { status: 200 });
    }
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({error: error.message}, {status: 500});
}

}
