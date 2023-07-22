export type CreateLinkDto = {
  sourceUrl: string;
  shortUrl: string;
};

export type LinkDto = CreateLinkDto & {
  clicks: number;
  createdAt: string;
};
