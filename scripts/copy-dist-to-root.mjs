import { copyFile, cp, mkdir, readdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const distIndex = path.join(distDir, "index.html");
const rootIndex = path.join(root, "index.html");
const backupIndex = path.join(root, "index.dev.html");

if (!existsSync(distIndex)) {
  throw new Error("dist/index.html not found. Run the build first.");
}

if (existsSync(rootIndex) && !existsSync(backupIndex)) {
  await copyFile(rootIndex, backupIndex);
}

const entries = await readdir(distDir, { withFileTypes: true });

for (const entry of entries) {
  const srcPath = path.join(distDir, entry.name);
  const destPath = path.join(root, entry.name);

  if (entry.isDirectory()) {
    await rm(destPath, { recursive: true, force: true });
    await mkdir(destPath, { recursive: true });
    await cp(srcPath, destPath, { recursive: true });
    continue;
  }

  if (entry.isFile()) {
    await copyFile(srcPath, destPath);
  }
}
