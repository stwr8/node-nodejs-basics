import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";

const FILE_PATH = new URL("files/fileToRead.txt", import.meta.url);

const read = async () => {
  await pipeline(createReadStream(FILE_PATH), process.stdout);
};

await read();
