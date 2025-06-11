const escapeAmount = (currentPain, currentTiredness) => {
  // decrease badend escape amount depending on pain and tiredness
  const tirednessModifier = Math.min(
    -0.0000001 * currentTiredness * currentTiredness -
      0.0002 * currentTiredness +
      1,
    1
  );
  const painModifier = Math.min(
    -0.000000001 * currentPain ** 4 +
      0.0000007 * currentPain ** 3 -
      0.0001275 * currentPain ** 2 +
      0.00075 * currentPain +
      1,
    1
  );
  return painModifier * tirednessModifier;
};
