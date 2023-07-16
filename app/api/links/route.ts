import { NextResponse } from "next/server";
import * as DATA from "./MOCK_DATA.json";

export async function GET() {
  return NextResponse.json(DATA.map((el) => el));
}

export async function POST() {
  DATA.push({ clicks, created_at, short_url, source_url, user_id });
  return NextResponse.json("created");
}
