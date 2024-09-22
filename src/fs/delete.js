import fs from "node:fs";

const FILE_PATH = new URL("files/fileToRemove.txt", import.meta.url);

const remove = async () => {
  if (fs.existsSync(FILE_PATH)) {
    fs.unlink(FILE_PATH, () => {});
  } else {
    throw new Error("FS operation failed");
  }
};

await remove();
