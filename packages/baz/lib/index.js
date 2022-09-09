import { promisify } from "@foo/bar";

function printCallback(thing, cb) {
  console.log(thing, "from printCallback");
  cb(undefined, thing);
}

const printPromise = promisify(printCallback);
printPromise("Print")
  .then((thing) => {
    console.log(thing, "from then");
  })
  .catch((err) => {
    console.error(err.message);
  });
