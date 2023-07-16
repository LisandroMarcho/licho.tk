import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://splendid-frog-44057.upstash.io",
  token: String(process.env.UPSTASH_TOKEN),
});
