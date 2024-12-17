import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import { secret } from "./lib/hash";

export async function middleware(request: NextRequest) {
	const token = request.cookies.get("token");
	if (!token || !token.value) {
		return;
	}

	try {
		await jose.jwtVerify(token.value, secret);
		return NextResponse.next();
	} catch (e) {
		console.error("token is invalid", e);
		return;
	}
}

export const config = {
	matcher: ["/api/v1/messages/:path*", "/api/v1/post/:path*"],
};
