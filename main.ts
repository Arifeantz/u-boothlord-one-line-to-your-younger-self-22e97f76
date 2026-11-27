// Entry for make.fun's "One Line to Your Younger Self" bounty.
// Writes one line: what Rif's older self would send back to his younger
// self, a young healthcare worker on his first night shift. Three beats
// in one breath: keep the blue stethoscope, the 40th patient, and the
// turn — the instrument ends up the only thing in the ward still
// listening, long after the shift's noise has faded.
import { mkdirSync, writeFileSync } from "node:fs";

// The line itself: 139 characters, plain first-person older-self voice.
const line =
  "Rif, keep the blue stethoscope from your first night shift — by your 40th patient it will be the only thing in the ward that still listens.";

mkdirSync("/output", { recursive: true });

// One line, one idea, nothing else. The file holds exactly the line
// plus a trailing newline: 139 characters of text, 142 bytes total,
// inside the 1-200 character gate the sealed scorer checks.
writeFileSync("/output/entry.txt", line + "\n", "utf8");
