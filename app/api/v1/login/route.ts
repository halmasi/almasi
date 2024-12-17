import { db } from "@/lib/db";
import { secret, verifyPassword } from "@/lib/hash";
import { NextResponse } from "next/server";
import * as jose from "jose";
import { cookies } from "next/headers";

export async function GET() {
	const cookieStore = cookies();
	const token = cookieStore.get("token");
	if (!token || !token.value)
		return NextResponse.json({ message: "Not Autherized" }, { status: 401 });

	try {
		const { payload, protectedHeader } = await jose.jwtVerify(
			token.value,
			secret,
		);
		const refreshToken = await new jose.SignJWT({
			email: payload.email,
			name: payload.name,
		})
			.setProtectedHeader({ alg: "HS256" })
			.setIssuedAt()
			.setExpirationTime("1h")
			.sign(secret);

		const response = NextResponse.json(
			{ message: "new cookie has been set, you are now logged in" },
			{ status: 200 },
		);
		response.cookies.set("token", refreshToken);
		return response;
	} catch (e) {
		return NextResponse.json(
			{ message: "Not Autherized\n" + e },
			{ status: 401 },
		);
	}
}

export async function POST(request: Request) {
	const data = await request.json();

	const email = data.email;
	const password = data.password;

	const admin = await db.admin.findFirst({ where: { email } });
	if (!admin || !verifyPassword(admin?.password, password))
		return NextResponse.json({ error: "user not found!" }, { status: 404 });
	const response = NextResponse.json({
		message: "new cookie has been set, you are now logged in",
	});

	const token = await new jose.SignJWT({
		email: admin.email,
		name: admin.name,
	})
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("1h")
		.sign(secret);

	response.cookies.set("token", token);

	return response;
}

export async function DELETE() {
	const response = NextResponse.json({
		messageid: `cookies has been deleted, you are now logged out`,
	});
	response.cookies.delete("token");
	return response;
}
