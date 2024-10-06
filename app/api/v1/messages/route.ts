import { NextApiRequest, NextApiResponse } from "next";

interface MessageProps {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { message } = JSON.parse(req.body);
  console.log(message);
  return new Response(message);
}
