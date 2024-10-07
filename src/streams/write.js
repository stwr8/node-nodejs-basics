import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

const FILE_PATH = new URL("files/fileToWrite.txt", import.meta.url);

const write = async () => {
  await pipeline(process.stdin, createWriteStream(FILE_PATH, { flags: "a" }));
};

await write();
