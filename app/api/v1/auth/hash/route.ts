import { NextResponse } from "next/server";
import crypto from "node:crypto";

export async function POST(request: Request) {
	const body = await request.json();
	const salt = crypto.randomBytes(16).toString("hex");
	const hashed =
		crypto.scryptSync(body.password, salt, 64).toString("hex") + ":" + salt;
	return NextResponse.json({ data: hashed }, { status: 200 });
}
