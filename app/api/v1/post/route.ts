import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
	// get all post writen by me
	const data = await db.post.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});
	return NextResponse.json({ data });
}

export async function POST(request: Request) {
	const data = await request.json();

	//create new post
	return NextResponse.json({ message: data.message });
}
