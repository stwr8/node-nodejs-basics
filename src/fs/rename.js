import fs from "node:fs";

const WRONG_FILE_PATH = new URL("files/wrongFilename.txt", import.meta.url);
const PROPER_FILE_PATH = new URL("files/properFilename.md", import.meta.url);

const rename = async () => {
  if (fs.existsSync(WRONG_FILE_PATH) && !fs.existsSync(PROPER_FILE_PATH)) {
    fs.rename(WRONG_FILE_PATH, PROPER_FILE_PATH, () => {});
  } else {
    throw new Error("FS operation failed");
  }
};

await rename();
