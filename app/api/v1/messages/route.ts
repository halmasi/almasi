import { db } from "@/lib/db";
import { NextResponse } from "next/server";

import { Inputs } from "@/components/ContactForm";

export async function GET() {
	//get a list of all messages
	const data = await db.message.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});
	return NextResponse.json({ data });
}

export async function POST(request: Request) {
	const { name, email, message }: Inputs = await request.json();
	const res = await db.message.create({
		data: { name, email, content: message },
	});
	return NextResponse.json({ message: res.content });
}
