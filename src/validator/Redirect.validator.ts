import Redirect from "./Redirect";
import Ajv, { JSONSchemaType } from "ajv";
const ajv = new Ajv();

const RedirectSchema: JSONSchemaType<Redirect> = {
  properties: {
    from: {
      type: "string",
    },
    status: {
      type: "number",
      enum: [200, 301, 302],
    },
    to: {
      type: "string",
    },
  },
  type: "object",
  required: ["from", "to"],
  additionalProperties: false
};

export {Redirect};
export const validate = ajv.compile(RedirectSchema);

