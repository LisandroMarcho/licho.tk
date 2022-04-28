interface RedirectType {
  from: string
  to: string
  status?: number
}

class Redirect {
  from: string;
  to: string;
  status?: number;

  constructor({ from, to, status }: RedirectType) {
    if (!from) throw new Error("'from' can't be undefined");
    if (typeof from !== "string") throw new Error("'from' can only be a string");
    this.from = from;

    if (!to) throw new Error("'to' can't be undefined");
    if (typeof to !== "string") throw new Error("'to' can only be a string");
    this.to = to;

    if (status && typeof status !== "number") throw new Error("'status' can only be a number");
    this.status = status || 301;
  }
}

export default Redirect;