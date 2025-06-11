const painChangeByTime = (currentPain) =>
  -Math.max(0.39 * Math.exp(-0.0195 * currentPain), 0.02);
