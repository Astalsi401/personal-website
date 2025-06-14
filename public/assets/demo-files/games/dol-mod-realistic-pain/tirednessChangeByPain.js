const tirednessChangeByPain = (currentPain) => {
  return Math.max(0.00181 * Math.pow(currentPain, 1.45), 1);
};
