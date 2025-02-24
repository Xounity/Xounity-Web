import { connectDB } from "@/app/connectDB.js";
import { Event } from "@/app/models/event.js";
import { NextResponse } from "next/server";

connectDB(process.env.MONGO_URL);

export async function GET() {
  const data = await Event.find();
  return NextResponse.json(data);
}

export async function POST(request) {
  const formData = await request.formData();

  const body = {};
  formData.forEach((value, key) => {
    body[key] = value;
  });

  console.log("body", body);

  if (
    !body ||
    !body.href ||
    !body.imgSrc ||
    !body.title ||
    !body.description ||
    !body.watchLink
  ) {
    return NextResponse.json({ message: "All Fields are required!" }, {status: 400});
  }

  const result = await Event.create({
    href: body.href,
    imgSrc: body.imgSrc,
    title: body.title,
    description: body.description,
    watchLink: body.watchLink,
  });

  console.log("result", result);

  return NextResponse.json({ message: "success" }, { status: 201 });
}

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  const event = await Event.findByIdAndDelete({_id: id})
  return NextResponse.json({message: "Event Deleted"}, {status: 200});
}