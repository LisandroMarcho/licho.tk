import { redirect, notFound } from "next/navigation";
import { conn } from "@lib/planetscale";

async function getUrl(shortUrl: string) {
  const result = await conn.execute(
    "SELECT sourceUrl FROM links WHERE shortUrl = ?",
    [shortUrl]
  );

  // @ts-ignore
  if (result.rows[0]?.sourceUrl) return result.rows[0].sourceUrl as string;

  return null;
}

export default async function Page({ params }: { params: { id: string } }) {
  const sourceUrl = await getUrl(params.id);
  if (sourceUrl) redirect(sourceUrl);
  else notFound();
}
