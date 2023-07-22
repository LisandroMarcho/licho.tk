import { redirect, notFound } from "next/navigation";
import type { LinkDto } from "../../../lib/link";
import { redis } from "../../../lib/redis";

async function getUrl(shortUrl: string) {
  return await redis.hget<LinkDto>("links", shortUrl);
}

export default async function Page({ params }: { params: { id: string } }) {
  const shortLink = await getUrl(params.id);
  if (shortLink?.sourceUrl) redirect(shortLink.sourceUrl);
  else notFound();
}
