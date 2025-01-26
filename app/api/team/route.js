import { connectDB } from "@/app/connectDB.js";
import { Team } from "@/app/models/team.js";
import { NextResponse } from "next/server";

connectDB(process.env.MONGO_URL);

export async function GET() {
  const data = await Team.find();
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
    !body.name ||
    !body.image ||
    !body.title ||
    !body.description ||
    !body.linkedinSrc ||
    !body.githubSrc ||
    !body.instaSrc
  ) {
    return NextResponse.json({ message: "All Fields are required!" }, {status: 400});
  }

  const result = await Team.create({
    name: body.name,
    image: body.image,
    title: body.title,
    description: body.description,
    linkedinSrc: body.linkedinSrc,
    githubSrc: body.githubSrc,
    instaSrc: body.instaSrc
  });

  console.log("result", result);

  return NextResponse.json({ message: "success" }, { status: 201 });
}