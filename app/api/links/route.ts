import { NextResponse } from "next/server";
import { redis } from "../../../lib/redis";

export async function GET() {
  const redisRes = await redis.hgetall("links");
  let response: Object[] = [];

  if (typeof redisRes == "object") {
    response = Object.values(redisRes as object);
  }

  return NextResponse.json(response);
}

export async function POST(req: Request) {
  const { sourceUrl, shortUrl } = await req.json();

  const data = {
    source_url: sourceUrl,
    clicks: 0,
    created_at: new Date(),
    short_url: shortUrl,
  };

  // await redis.hset("links", { [shortUrl]: data });
  console.log([...Array(6)].map((_) => (Math.random() * 10) | 0).join(""));
  return NextResponse.json(data);
}
