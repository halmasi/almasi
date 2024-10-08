import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
	const { params } = context;
	const data = params.messageId;

	return NextResponse.json({ messageid: data });
}
