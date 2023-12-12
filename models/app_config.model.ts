export type Meta = {
  title: string;
  description: string;
  url: string;
  image: string;
  keywords?: string;
  translations?: {
    es: { [key: string]: string };
  };
};

export type AppConfig = {
  seo_tags: { [key: string]: Meta };
};
