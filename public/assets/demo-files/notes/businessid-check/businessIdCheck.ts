const logicMultipliers = [1, 2, 1, 2, 1, 2, 4, 1];

const businessIdCheck = (businessId: string): boolean => {
  const res = businessId.split("").reduce((acc, digit, index) => {
    const value = Number(digit) * logicMultipliers[index];
    if (value > 9) {
      return acc + (value % 10) + Math.floor(value / 10);
    } else {
      return acc + value;
    }
  }, 0);
  return res % 5 === 0;
};
