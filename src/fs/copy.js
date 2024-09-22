import fs from "node:fs";

const FILES_PATH = new URL("files", import.meta.url);
const FILES_COPY_PATH = new URL("files_copy", import.meta.url);

const copy = async () => {
  if (fs.existsSync(FILES_PATH) && !fs.existsSync(FILES_COPY_PATH)) {
    fs.cp(FILES_PATH, FILES_COPY_PATH, { recursive: true }, () => {});
  } else {
    throw new Error("FS operation failed");
  }
};

await copy();
