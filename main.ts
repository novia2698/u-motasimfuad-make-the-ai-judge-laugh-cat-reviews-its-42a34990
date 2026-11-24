// main.ts — "Make the AI Judge Laugh: Cat Reviews Its Human"
// A tiny Node 22 program (no dependencies, stdlib only) that writes one
// funny single-line one-star review, written by a house cat about its human,
// to <MAKEFUN_OUTPUT_DIR>/entry.txt (or /output when unset).
//
// The line was picked for the judge's brief, in order:
//  1. It IS a one-star cat review of its human, deadpan review shape.
//  2. The complaint is specific and recognisable: the human eats dinner in
//     the cat's chair, off a plate he will not share.
//  3. The voice is unmistakably feline: the human is measured by cat
//     standards, and the review gives away more about the cat than the owner.
//  4. Tight wording with a sting in the last few words: "I pay rent in mice."
//  5. It keeps the deadpan shape of a real one-star review while the content
//     goes somewhere only a cat would go.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. He eats dinner in my chair, off a plate he will not share, then calls me entitled. I pay rent in mice.";

// The review line is 113 characters: well under the 200-character gate,
// one line, no trailing newline, so the judge reads exactly this text.
const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const line = REVIEW.trim();
if (line.length < 1 || line.length > 200) {
  console.error(`entry must be 1-200 characters, got ${line.length}`);
  process.exit(1);
}
if (/\r|\n/.test(line)) {
  console.error("entry must be a single line");
  process.exit(1);
}

const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line, "utf8");
console.log(`Wrote ${line.length} characters to ${outFile}`);
