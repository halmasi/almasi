"use server";

import * as jose from "jose";

export async function auth(name: string, email: string) {
	try {
		const token = await new jose.SignJWT({ name, email })
			.setProtectedHeader({ alg: "HS256" })
			.setIssuedAt()
			.sign(new TextEncoder().encode(process.env.SECRET_KEY));

		return token;
	} catch (error) {
		return;
	}
}
