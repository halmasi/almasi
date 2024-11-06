import { db } from "@/lib/db";
import { NextResponse } from "next/server";

import { Inputs } from "@/components/ContactForm";

export async function GET() {
  //get a list of all messages

  return NextResponse.json({ message: "" });
}

export async function POST(request: Request) {
  const data: Inputs = await request.json();
  //create new message by user
  const { name, email, message } = data;
  const res = await db.message.create({
    data: { name, email, content: message },
  });
  return NextResponse.json({ message: res.content });
}
