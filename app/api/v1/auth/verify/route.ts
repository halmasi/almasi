import { NextResponse } from "next/server";
import crypto from "node:crypto";

export async function POST(request: Request) {
	const body = await request.json();
	const { storedPassword, suppliedPassword } = body;

	const [hashPassword, salt] = storedPassword.split(":");
	const hashedPasswordBuffer = Buffer.from(hashPassword, "hex");
	const suppliedPasswordBuffer = crypto.scryptSync(suppliedPassword, salt, 64);
	const result = crypto.timingSafeEqual(
		hashedPasswordBuffer,
		suppliedPasswordBuffer,
	);
	return NextResponse.json({ data: result }, { status: 200 });
}
