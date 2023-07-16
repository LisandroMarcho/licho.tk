import { NextResponse } from "next/server";
import * as DATA from "./MOCK_DATA.json";

export async function GET() {
  return NextResponse.json(DATA.map((el) => el));
}

export async function POST(req: Request) {
  const { sourceUrl } = await req.json();

  const data = {
    source_url: sourceUrl,
    clicks: 0,
    created_at: "04/20/2023",
    short_url: "lorem",
    user_id: Math.random(),
  };

  DATA.push(data);

  return NextResponse.json(data);
}
