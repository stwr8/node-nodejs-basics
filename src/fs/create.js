import fs from "node:fs";

const FILE_PATH = new URL("files/fresh.txt", import.meta.url);

const create = async () => {
  if (!fs.existsSync(FILE_PATH)) {
    fs.writeFile(FILE_PATH, "I am fresh and young", () => {});
  } else {
    throw new Error("FS operation failed");
  }
};

await create();
