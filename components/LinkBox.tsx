type Props = {
  shortUrl: string;
  sourceUrl: string;
  baseUrl: string;
};

export default function LinkBox({ shortUrl, sourceUrl, baseUrl }: Props) {
  return (
    <div className="bg-slate-700 p-4">
      <p className="font-bold">
        {baseUrl}/go/{shortUrl}
      </p>
      <img
        src={`https://img.shields.io/website?url=${sourceUrl}&style=flat-square`}
        alt="uptime"
        loading="lazy"
      />
      <a href={sourceUrl} className="text-sm warp" target="_blank">
        {sourceUrl}
      </a>
    </div>
  );
}
