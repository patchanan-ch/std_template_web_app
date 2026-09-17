import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tokenFiles = [
  path.join(root, "src/tokens/primitive_colors.tokens.json"),
  path.join(root, "src/tokens/semantic.tokens.json"),
];

const declarations = new Map();

const visit = (node, tokenPath = []) => {
  if (!node || typeof node !== "object") return;

  if (node.$type === "color" && node.$value?.hex) {
    declarations.set(`--${tokenPath.join("-")}`, node.$value.hex.toLowerCase());
    return;
  }

  Object.entries(node).forEach(([key, value]) => {
    if (!key.startsWith("$")) visit(value, [...tokenPath, key]);
  });
};

for (const tokenFile of tokenFiles) {
  visit(JSON.parse(await readFile(tokenFile, "utf8")));
}

const css = [
  "/* Generated from DCS design tokens. Do not edit by hand. */",
  ":root {",
  ...[...declarations.entries()].map(([name, value]) => `  ${name}: ${value};`),
  "}",
  "",
].join("\n");

await writeFile(path.join(root, "src/tokens/dcs-tokens.css"), css);
console.log(`Generated ${declarations.size} DCS color tokens.`);
