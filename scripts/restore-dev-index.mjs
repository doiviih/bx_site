import { copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const devIndex = path.join(root, "index.dev.html");
const rootIndex = path.join(root, "index.html");

if (existsSync(devIndex)) {
  await copyFile(devIndex, rootIndex);
}
