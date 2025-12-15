import { connectDB } from "@/app/connectDB.js";
import { Team } from "@/app/models/team.js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB(process.env.MONGO_URL);
    const data = await Team.find({}, {__v: 0});
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
    await Team.findByIdAndDelete({ _id: id });
    return NextResponse.json({ message: "User Deleted" }, { status: 200 });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({error: error.message}, {status: 500});
}
}

export async function POST(request) {
  try {
    await connectDB(process.env.MONGO_URL);
    const formData = await request.formData();
  
    const body = {};
    formData.forEach((value, key) => {
      body[key] = value;
    });
  
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
  
    await Team.create({
      name: body.name,
      image: body.image,
      title: body.title,
      description: body.description,
      linkedinSrc: body.linkedinSrc,
      githubSrc: body.githubSrc,
      instaSrc: body.instaSrc
    });
  
    return NextResponse.json({ message: "success" }, { status: 201 });
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
  
    if (
      !body ||
      !body.id ||
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
  
    await Team.updateOne({ _id: body.id },{
      name: body.name,
      image: body.image,
      title: body.title,
      description: body.description,
      linkedinSrc: body.linkedinSrc,
      githubSrc: body.githubSrc,
      instaSrc: body.instaSrc
    });
  
    return NextResponse.json({ message: "Team Updated" }, { status: 200 });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({error: error.message}, {status: 500});
}
}