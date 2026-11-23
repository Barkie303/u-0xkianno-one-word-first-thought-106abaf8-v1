import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word, First Thought: the program writes exactly one word to
// /output/entry.txt. The gate allows 1-24 characters of UTF-8 text.
// Petrichor: rain on dry earth, the first thought that smells like a memory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "petrichor");
