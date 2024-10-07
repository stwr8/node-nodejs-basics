import fs from "fs";
import crypto from "crypto";

const FILE_PATH = new URL("files/fileToCalculateHashFor.txt", import.meta.url);

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");
  const fileStream = fs.createReadStream(FILE_PATH);

  fileStream.on("data", (chunk) => {
    hash.update(chunk); // Update hash with the chunk of data
  });

  fileStream.on("end", () => {
    const result = hash.digest("hex"); // Finalize the hash and get it in hex
    console.log(result);
  });
};

await calculateHash();
