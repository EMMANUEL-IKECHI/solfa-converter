export function sanitizeInput(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z#\s]/g, "") // remove punctuation, keep #
    .trim()
    .split(/\s+/); // handles multiple spaces & newlines
}
