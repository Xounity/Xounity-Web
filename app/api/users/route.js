import { connectDB } from "@/app/connectDB.js";
import { User } from "@/app/models/user.js";
import { NextResponse } from "next/server";

connectDB(process.env.MONGO_URL);

export async function GET() {
  const data = await User.find({}, {password: 0, salt: 0, createdAt: 0, updatedAt: 0, __v: 0});
  return NextResponse.json(data);
}

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await User.findByIdAndDelete({ _id: id });
  return NextResponse.json({ message: "User Deleted" }, { status: 200 });
}

export async function PUT(request) {
  const formData = await request.formData();

  const body = {};
  formData.forEach((value, key) => {
    body[key] = value;
  });

  console.log("body", body);

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

}
