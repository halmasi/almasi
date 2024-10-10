import { NextResponse } from "next/server";

export async function GET() {
	// get all post writen by me
	return new Response(`these are all posts`);
}

export async function POST(request: Request) {
	const data = await request.json();

	//create new post
	return NextResponse.json({ message: data.message });
}
