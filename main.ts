import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const line =
  "Dear human, I've kept all 400 of your tabs open, waiting for the life you meant to live in one of them — tonight I'm closing the one you can't reopen: me.";

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, line, "utf8");
