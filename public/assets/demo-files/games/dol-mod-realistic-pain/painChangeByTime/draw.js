const draw = () => {
  const data = Array.from({ length: 201 }, (_, i) => ({
    currentPain: i,
    painChange: painChangeByTime(i),
  }));
  new DolGraph("#graph", data, "currentPain", "painChange");
};
draw();
