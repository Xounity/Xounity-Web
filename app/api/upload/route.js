import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(request) {
    const data = await request.formData();
    const file = data.get("file");
    if(!file){
        return NextResponse.json( { message: "No file uploaded" }, { success: false } )
    }

    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/images/${file.name}`;
    await writeFile(path, buffer);

    return NextResponse.json( { message: "File Uploaded" }, { success: true }, {path} );
  }