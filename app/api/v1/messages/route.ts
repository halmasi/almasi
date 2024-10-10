import { NextResponse } from "next/server";

export async function GET() {
	//get a list of all messages
	return NextResponse.json({ message: "" });
}

export async function POST(request: Request) {
	const data = await request.json();

	//create new message by user
	return NextResponse.json({ message: data.message });
}
