import { NextResponse } from "next/server";
import genUid from "@lib/genUid";
import { LinkDto } from "@lib/link";
import { conn } from "@lib/planetscale";
import { getServerSession } from "next-auth";

export async function GET() {
  const { rows } = await conn.execute("SELECT * FROM links LIMIT 15;");
  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session?.user) return NextResponse.json({}, { status: 403 });

  let { sourceUrl, shortUrl }: LinkDto = await req.json();
  shortUrl = shortUrl || genUid(8);

  await conn.execute("INSERT INTO links (shortUrl, sourceUrl) VALUES (?, ?)", [
    shortUrl,
    sourceUrl,
  ]);

  return NextResponse.json({ shortUrl, sourceUrl }, { status: 201 });
}
