import { readFile } from "fs/promises";
import ejs from "ejs";
import path from "path";

export const getEmailTemplate = async (
  heading: string = "",
  subtitle: string = "",
  name: string = ""
) => {
  const temp = await readFile(
    path.resolve("public/request_demo_email_template.html"),
    "utf-8"
  );
  return ejs.render(temp, {
    heading,
    subtitle,
    name: name.toUpperCase(),
  });
};
