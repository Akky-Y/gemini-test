import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { text } = await request.json();

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      body: JSON.stringify({ contents: [{ parts: [{ text }] }] }),
    },
  );

  const data = await res.json();

  return NextResponse.json(data);
}
