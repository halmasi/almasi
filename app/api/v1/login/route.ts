import { db } from "@/lib/db";
import { verifyPassword } from "@/lib/hash";
import { NextResponse } from "next/server";
import * as jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET() {
	const cookieStore = cookies();
	const token = cookieStore.get("token");
	let result = {
		message: { message: "Unauthorized" },
		status: { status: 401 },
		cookies: "",
	};
	if (token && token.value) {
		jwt.verify(token.value, process.env.SECRET_KEY!, (e, decode) => {
			if (decode && typeof decode == "object" && decode.email && decode.name) {
				const refreshToken = jwt.sign(
					{ email: decode.email, name: decode },
					process.env.SECRET_KEY!,
					{ expiresIn: "1h" },
				);
				result.message = {
					message: "new cookie has been set, you are now logged in",
				};
				result.status = { status: 200 };
				result.cookies = refreshToken;
			} else if (e) {
				console.error(e);
			}
		});
	}
	const response = NextResponse.json(result.message, result.status);
	response.cookies.set("token", result.cookies);
	return response;
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
	const token = jwt.sign(
		{ email: admin.email, name: admin.name },
		process.env.SECRET_KEY!,
		{ expiresIn: "1h" },
	);
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
