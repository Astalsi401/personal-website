const draw = () => {
  const data = Array.from({ length: 201 }, (_, i) => ({
    currentPain: i,
    tirednessModifier: tirednessChangeByPain(i),
  }));
  new DolGraph("#graph", data, "currentPain", "tirednessModifier");
};
draw();
