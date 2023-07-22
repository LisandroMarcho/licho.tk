import type { LinkDto } from "../lib/link";

type Props = {
  shortLink: LinkDto;
  baseUrl: string;
};

export default function LinkBox({ shortLink, baseUrl }: Props) {
  return (
    <div className="bg-secondary border-[8px] p-4">
      <img
        src={`https://img.shields.io/website?url=${shortLink.sourceUrl}&style=flat-square`}
        alt="uptime"
        loading="lazy"
      />
      <p className="font-bold mt-2">
        {baseUrl}/go/{shortLink.shortUrl}
      </p>
      <a
        href={shortLink.sourceUrl}
        className="text-sm text-accent hover:text-primary"
        target="_blank"
      >
        {shortLink.sourceUrl}
      </a>
    </div>
  );
}
