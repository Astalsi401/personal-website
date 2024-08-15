function getScrollPercent() {
  const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
  return scrollTop / (scrollHeight - clientHeight);
}

function update_scroll() {
  const scrollPercent = getScrollPercent();
  document.getElementById("scroll-line").style.setProperty("--scrollPercent", scrollPercent);
  document.getElementById("progress").textContent = scrollPercent ? Math.round(scrollPercent * 100) : 0 + "%";
}

window.addEventListener("scroll", update_scroll);
update_scroll();
