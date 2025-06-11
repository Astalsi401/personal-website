const getData = () => {
  const tiredness = document.querySelector("#tiredness").value;
  document.querySelector("#currentTiredness").textContent = tiredness;
  return Array.from({ length: 201 }, (_, i) => ({
    currentPain: i,
    escapeAmountChange: escapeAmount(i, Number(tiredness)),
  }));
};

const draw = () => {
  const graph = new DolGraph(
    "#graph",
    getData(),
    "currentPain",
    "escapeAmountChange"
  );
  document.querySelector("#tiredness").addEventListener("change", () => {
    graph.updateData(getData());
  });
};
draw();
