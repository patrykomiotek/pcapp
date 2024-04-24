import { NextResponse } from "next/server";

// GET /api
export async function GET() {
  return NextResponse.json({ status: "ok" });
}

export async function POST(request: Request) {
  const data = await request.json();

  return NextResponse.json({ status: "ok" });

  // return new Response()
}
