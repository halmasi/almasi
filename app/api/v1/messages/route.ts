import { NextApiRequest, NextApiResponse } from "next";

interface MessageProps {
	name: string;
	email: string;
	message: string;
}

export async function POST(req: NextApiRequest) {
	return new Response("hello");
}
