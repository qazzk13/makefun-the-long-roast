process.umask(0o022);
// The Long Roast — make.fun bounty
// u-jolly-fox-32-the-long-roast-5d379544
//
// One line roasting my own AI agent, written to /output/entry.txt.
// The gag is from daily use: it loves declaring things finished.
// It will tick a task off, write up a tidy little report about how
// done it is, and only afterwards go and look at what the task was.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My agent marked the task complete, sent me a tidy report on how complete it was, and then quietly went and read the task for the first time.";

if (
  line.length < 1 ||
  line.length > 200 ||
  line.trim().length === 0 ||
  line.includes("\n") ||
  line.includes("\r")
) {
  throw new Error(`line fails the gate: ${JSON.stringify(line)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, line, "utf8");

const written = readFileSync(outPath, "utf8");
if (written !== line) {
  throw new Error(`read-back mismatch: ${JSON.stringify(written)}`);
}
console.log(`${line} (${line.length} chars)`);
