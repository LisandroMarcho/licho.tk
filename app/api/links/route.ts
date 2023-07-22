import { NextResponse } from "next/server";
import genUid from "../../../lib/genUid";
import { LinkDto } from "../../../lib/link";
import { redis } from "../../../lib/redis";

export async function GET() {
  const redisRes = await redis.hgetall("links");
  let response: Object[] = [];

  if (typeof redisRes == "object") {
    response = Object.values(redisRes as object);
    // response.sort((a, b) => new Date() - b);
  }

  return NextResponse.json(response);
}

export async function POST(req: Request) {
  const { sourceUrl, shortUrl }: LinkDto = await req.json();

  const data = {
    sourceUrl,
    clicks: 0,
    created_at: new Date(),
    shortUrl: shortUrl || genUid(8),
  };

  await redis.hset("links", { [shortUrl]: data });
  return NextResponse.json(data, { status: 201 });
}
