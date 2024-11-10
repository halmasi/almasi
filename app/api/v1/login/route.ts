import { db } from "@/lib/db";
import { verifyPassword } from "@/lib/hash";
import { NextResponse } from "next/server";
import * as jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const cookie = request.headers.getSetCookie();
  console.log(cookie);
  let state = token;
  return NextResponse.json({ state });
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
    { expiresIn: "1h" }
  );
  response.cookies.set("token", JSON.stringify(token));

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({
    messageid: `cookies has been deleted, you are now logged out`,
  });
  response.cookies.delete("token");
  return response;
}
