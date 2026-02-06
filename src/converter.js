const solfa_index = {
  do: 0,
  re: 1,
  mi: 2,
  fa: 3,
  so: 4,
  la: 5,
  ti: 6,
};

const SOLFEGE_ALIASES = {
  do: ["do", "doh"],
  re: ["re", "ray"],
  mi: ["mi", "mee"],
  fa: ["fa"],
  so: ["so", "sol"],
  la: ["la"],
  ti: ["ti", "si"],
};


const CHROMATIC = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
const MAJOR_STEPS = [2, 2, 1, 2, 2, 2, 1];

const buildMajorScale = (tonic) => {
  const startIndex = CHROMATIC.indexOf(tonic);
  let currentIndex = startIndex;
  if (currentIndex === -1) throw new Error("Invalid Key");

  const scale = [tonic];

  for (const step of MAJOR_STEPS) {
    currentIndex = (currentIndex + step) % CHROMATIC.length;
    scale.push(CHROMATIC[currentIndex]);
  }

  return (scale.slice(0, 7));
};

const SOLFA_LOOKUP = Object.entries(SOLFEGE_ALIASES).flatMap(([canonical, aliases]) => (aliases.map(alias => [alias, canonical]))).reduce((acc, [alias, canonical]) => {
  acc[alias] = canonical;
  return acc;
}, {});

export const convertToNotes = (solfa, key) => {
  const scale = buildMajorScale(key);

  const canonicalSolfa = SOLFA_LOOKUP[solfa.toLowerCase()];
  if (!canonicalSolfa) return scale[solfa_index[solfa]];

  const index = solfa_index[canonicalSolfa];
  return scale[index];
}