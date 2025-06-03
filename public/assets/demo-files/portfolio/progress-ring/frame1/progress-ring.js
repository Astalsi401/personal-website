function getScrollPercent() {
  const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
  return scrollTop / (scrollHeight - clientHeight);
}

function updateScroll() {
  const scrollPercent = getScrollPercent();
  document.getElementById("scroll-line").style.setProperty("--scrollPercent", scrollPercent);
  document.getElementById("progress").textContent = scrollPercent ? Math.round(scrollPercent * 100) : 0;
}

window.addEventListener("scroll", updateScroll);
updateScroll();
