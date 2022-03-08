import { parse } from "yaml";
import { readFileSync } from "fs";
import { join, extname } from "path";
import Redirect from "./Redirect";

function parseLink(fileName: string): false | Redirect {
  if(extname(fileName) !== ".yml") return false;
  const fileURI = join(__dirname, 'links', fileName)
  const shContent = readFileSync(fileURI, { encoding: 'utf8' });
  const parsedContent = new Redirect(parse(shContent));
  return parsedContent;
}

export default parseLink;