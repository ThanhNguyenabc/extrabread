import { SuggestionPOS } from "@/models/bestpos/suggestion_pos.model";
import { Model, model, models, Schema } from "mongoose";

const SuggestionSchema = new Schema<SuggestionPOS>({
  answer: String,
  results: [String],
});

export const SuggestionPOSModel: Model<SuggestionPOS> =
  models?.Suggestion ||
  model<SuggestionPOS>("Suggestion", SuggestionSchema, "questionnaire");
