window.addEventListener("click", () => parent.postMessage({ window: "iframe" }));
const resizeObserver = new ResizeObserver((entries) => {
  const computedStyle = window.getComputedStyle ? getComputedStyle(document.body, null) : document.body.currentStyle;
  let paddingMargin = 0;
  for (let space of ["margin", "padding"]) {
    for (let side of ["top", "bottom"]) {
      paddingMargin += parseInt(computedStyle[`${space}-${side}`]);
    }
  }
  for (let entry of entries) parent.postMessage({ height: entry.contentRect.height + paddingMargin });
});
resizeObserver.observe(document.body);
