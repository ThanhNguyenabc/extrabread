import Attribute from "./attribute";

export enum Locale {
  "en" = "en",
  "es" = "es",
}

export interface MetaTag {
  url?: Attribute;
  image?: string;
  title: Attribute;
  description: Attribute;
}

export interface BusinessTypeMeta {
  popular?: MetaTag;
  "full-service-restaurants"?: MetaTag;
  pizza?: MetaTag;
  "quick-service-restaurants"?: MetaTag;
  "retail-store": MetaTag;
  clubs?: MetaTag;
  "small-business"?: MetaTag;
}

export interface PageMeta {
  home?: MetaTag;
  freePOS?: MetaTag;
  posSystem?: MetaTag;
  questionnaire?: MetaTag;
  breadme?: MetaTag;
  contact?: MetaTag;
  products?: {
    [key: string]: MetaTag;
  };
  blog?: MetaTag;
  partner?: MetaTag;
  suggestPOS?: MetaTag;
  about?: MetaTag;
  requestDemoPOS?: MetaTag;
  businessTypes: BusinessTypeMeta;
}

export interface RemoteAppConfig {
  metaTags?: {
    keywords: Attribute;
    pageTags?: PageMeta;
  };
  mail_receivers?: Array<string>;
}
