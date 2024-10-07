import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const childProcces = spawn("node", ["script.js", ...args], {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });

  process.stdin.pipe(childProcces.stdin);
  childProcces.stdout.pipe(process.stdout);

  childProcces.on("exit", (code) => {
    console.log(code);
  });
};

spawnChildProcess(["123", "456"]);
