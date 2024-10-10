import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
	const { params } = context;
	const data = params.messageId;

	//get message by id
	return NextResponse.json({ messageid: data });
}

export async function DELETE(request: Request, context: any) {
	const { params } = context;
	const data = params.messageId;

	//delete message by id
	return NextResponse.json({ messageid: `deleted message id: ${data}` });
}
