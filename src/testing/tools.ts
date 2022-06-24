// Create a functiona that will remove all the beginning spaces from a multiline string
export const trimSpacesAndRemoveMultiline = (multiline: string): string => {
  const lines = multiline.split("\n");
  const trimmedLines = lines.map((line) => line.trim());
  return trimmedLines.join("");
};
