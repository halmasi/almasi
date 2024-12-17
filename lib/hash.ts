import crypto from "node:crypto";

export async function hashPassword(password: string) {
	const result = await fetch("/api/v1/auth/hash", {
		method: "POST",
		body: JSON.stringify({ password }),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const hashed = await result.json();
	return hashed.data;
}

export async function verifyPassword(
	storedPassword: string,
	suppliedPassword: string,
) {
	const data = await fetch("/api/v1/auth/hash", {
		method: "POST",
		body: JSON.stringify({ storedPassword, suppliedPassword }),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const result = await data.json();
	return result.data;
}

export const secret: Uint8Array = new TextEncoder().encode(
	process.env.SECRET_KEY,
);
