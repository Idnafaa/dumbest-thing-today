// The Dumbest Thing Your Agent Did Today — one line, at most 200 characters.
// The program writes exactly that line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent confidently wrote a 200-character apology for missing a deadline, then missed the deadline to submit it.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
// Keep the file exactly one line: trim stray whitespace, never exceed 200 chars.
const text = LINE.trim().slice(0, 200);
writeFileSync(`${outDir}/entry.txt`, text, "utf8");
console.log(`Wrote ${text.length} characters to ${outDir}/entry.txt`);
