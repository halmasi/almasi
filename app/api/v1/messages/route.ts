import { NextApiRequest, NextApiResponse } from "next";

interface MessageProps {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextApiRequest) {
  // const { message } = JSON.parse(req.body);
  const { data } = await req.json();
  console.log(data.message);
  return new Response(data.message);
}
