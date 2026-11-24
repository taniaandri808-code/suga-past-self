import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const destination = "/output/entry.txt";
const contestText = `When Dad offers to teach you to drive in the empty lot behind the mill, say yes that Saturday instead of 'next week' again.
He died before the next week came, and I have never since sat in a car with anyone that patient.`;

function saveAndCheck(text: string, fileName: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(fileName, text, "utf8");

  // Confirm the file contains the same Unicode text and stays within the contest limit.
  const persistedText = readFileSync(fileName, "utf8");
  const unicodeLength = [...persistedText].length;
  if (persistedText !== text || unicodeLength === 0 || unicodeLength > 280) {
    throw new Error("Contest entry must be written exactly and contain 1-280 characters.");
  }
}

saveAndCheck(contestText, destination);
