declare type ButtonIconDirection = 'ltr' | 'ttb' | 'rtl' | 'btt';

declare type Language = 'en' | 'es';

declare interface Blog {
  id?: string;
  slug?: string;
  img?: StaticImageData;
  title?: string;
  description?: string;
  author?: string;
  date?: number;
  thumbnail?: StaticImageData;
  content?: string;
  link?: string;
}
