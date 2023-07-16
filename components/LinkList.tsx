"use client";

import { useEffect, useState } from "react";
import LinkBox from "./LinkBox";

export default function LinkList() {
  const baseUrl = window.location.origin;
  const [linksData, setLinksData] = useState([]);

  useEffect(() => {
    fetch("/api/links")
      .then((res) => res.json())
      .then((res) => setLinksData(res));
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {linksData.map(({ short_url, source_url }, key) => (
        <LinkBox
          key={Math.random()}
          baseUrl={baseUrl}
          shortUrl={short_url}
          sourceUrl={source_url}
        ></LinkBox>
      ))}
    </div>
  );
}
