import fs from "node:fs";

const FILES_PATH = new URL("files", import.meta.url);

const list = async () => {
  if (fs.existsSync(FILES_PATH)) {
    fs.readdir(FILES_PATH, (_, files) => {
      files.forEach((file) => console.log(file));
    });
  } else {
    throw new Error("FS operation failed");
  }
};

await list();
