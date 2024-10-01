import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const res = request.cookies.get("token")?.value;
  console.log(res);
  return new Response(`${res} hello!`);
}
