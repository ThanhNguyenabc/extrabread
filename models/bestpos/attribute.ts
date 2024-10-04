import { Locale } from "./app_configs";

export default interface Attribute<T = string> {
  [Locale.en]: T;
  [Locale.es]?: T;
}
