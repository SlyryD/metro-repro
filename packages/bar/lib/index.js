import { promisify } from "util";

export function printCallback(thing, cb) {
  console.log(thing, "from printCallback");
  cb(undefined, thing);
}

export const printPromise = promisify(printCallback);
