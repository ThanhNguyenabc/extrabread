import { RemoteAppConfig } from "@/models/bestpos/app_configs";
import { model, Model, models, Schema } from "mongoose";

const AppConfigSchema = new Schema<RemoteAppConfig>({
  metaTags: Object,
  mail_receivers: [String],
});

export const AppConfigModel: Model<RemoteAppConfig> =
  models?.RemoteAppConfig ||
  model<RemoteAppConfig>("RemoteAppConfig", AppConfigSchema, "app_configs");
