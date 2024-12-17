import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
	const { params } = context;
	const data = params.messageId;
	const message = await db.message.findFirst({
		where: { id: data },
	});
	return NextResponse.json({
		id: message?.id,
		name: message?.name,
		email: message?.email,
		createdAt: message?.createdAt,
		content: message?.content,
	});
}

export async function DELETE(request: Request, context: any) {
	const { params } = context;
	const data = params.messageId;
	await db.message.delete({ where: { id: data } });
	return NextResponse.json({ messageid: `deleted message id: ${data}` });
}
