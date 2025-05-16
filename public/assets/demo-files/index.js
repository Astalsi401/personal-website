const insertHtml = async (html) => {
  document.body.innerHTML = await fetch(html)
    .then((res) => (res.ok ? res.text() : ""))
    .catch((err) => err.message.includes("404") && "");
};
const insertCss = async (css, value) => {
  document.head.querySelector(`style[data-demo="${value}"]`)?.remove();
  document.head.innerHTML += `<style data-demo="${value}">${css}</style>`;
};
const demoContent = async ({ html, css, js }) => {
  try {
    html && (await insertHtml(html));
    css && (await insertCss(css, "main"));
    js && (await Promise.all(js.map((lib) => import(lib))));
    await insertCss("body{min-height:200px;}", "default");
  } catch (error) {
    console.error(error);
  }
};
window.addEventListener("load", () => parent.postMessage({ load: true }));
window.addEventListener("message", ({ data, origin }) => location.origin === origin && demoContent(data));
