export type CreateLinkDto = {
  sourceUrl: string;
  shortUrl: string;
};

export type LinkDto = CreateLinkDto & {
  id: number;
  clicks: number;
  createdAt: string;
};
