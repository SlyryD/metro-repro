import { printPromise } from "@foo/bar";

printPromise("Print")
  .then((thing) => {
    console.log(thing, "from then");
  })
  .catch((err) => {
    console.error(err.message);
  });
