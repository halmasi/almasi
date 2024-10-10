import { NextResponse } from "next/server";

export async function GET() {
	return new Response(`this is login route`);
}

export async function POST(request: Request) {
	const data = await request.json();

	const username = data.username;
	const password = data.password;
	//new login request
	return NextResponse.json({
		message: "new cookie has been set, you are now logged in",
	});
}

export async function DELETE() {
	//delete login cookies
	return NextResponse.json({
		messageid: `cookies has been deleted, you are now logged out`,
	});
}
