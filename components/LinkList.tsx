"use client";
import useSWR from "swr";
import { useEffect, useState } from "react";
import LinkBox from "./LinkBox";
import { LinkDto } from "../lib/link";

export default function LinkList() {
  const [baseUrl, setBaseUrl] = useState("");
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR<LinkDto[]>("/api/links", fetcher);

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {data &&
        data.map((link) => (
          <LinkBox
            key={link.shortUrl}
            baseUrl={baseUrl}
            shortLink={link}
          ></LinkBox>
        ))}
    </div>
  );
}
