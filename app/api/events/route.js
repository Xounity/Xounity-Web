import { connectDB } from "@/app/connectDB.js";
import { Event } from "@/app/models/event.js";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB(process.env.MONGO_URL);
  const data = await Event.find({}, {__v: 0});
  return NextResponse.json(data);
}

export async function POST(request) {
  await connectDB(process.env.MONGO_URL);
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
  await connectDB(process.env.MONGO_URL);
  const id = await request.nextUrl.searchParams.get("id");
  await Event.findByIdAndDelete({_id: id})
  return NextResponse.json({message: "Event Deleted"}, {status: 200});
}

export async function PUT(request) {
  await connectDB(process.env.MONGO_URL);
  const formData = await request.formData();

  const body = {};
  formData.forEach((value, key) => {
    body[key] = value;
  });

  console.log("body", body);

  if (
    !body ||
    !body.id ||
    !body.href ||
    !body.imgSrc ||
    !body.title ||
    !body.description ||
    !body.watchLink
  ) {
    return NextResponse.json({ message: "All Fields are required!" }, {status: 400});
  }

  const result = await Event.updateOne({ _id: body.id },{
    href: body.href,
    imgSrc: body.imgSrc,
    title: body.title,
    description: body.description,
    watchLink: body.watchLink,
  });

  console.log("result", result);

  return NextResponse.json({ message: "Event Updated" }, { status: 200 });
}