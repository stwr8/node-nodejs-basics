import fs from "node:fs";

const FILE_PATH = new URL("files/fileToRead.txt", import.meta.url);

const read = async () => {
  if (fs.existsSync(FILE_PATH)) {
    fs.readFile(FILE_PATH, "utf-8", (_, data) => console.log(data));
  } else {
    throw new Error("FS operation failed");
  }
};

await read();
