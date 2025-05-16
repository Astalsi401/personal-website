const demoContent = async ({ html, scssHref, js }) => {
  try {
    const sass = await import("https://jspm.dev/sass");
    if (html) {
      const htmlContent = await fetch(html)
        .then((res) => (res.ok ? res.text() : ""))
        .catch((err) => err.message.includes("404") && "");
      document.body.innerHTML = htmlContent;
    }
    if (scssHref) {
      const scss = await fetch(scssHref).then((res) => res.text());
      const { css } = await sass.compileString(scss);
      document.head.querySelector(`style[data-demo="style"]`)?.remove();
      document.head.innerHTML += `<style data-demo="style">${css}</style>`;
    }
    js && (await Promise.all(js.map((lib) => import(lib))));
  } catch (error) {
    console.error(error);
  }
};
window.addEventListener("load", () => parent.postMessage({ load: true }));
window.addEventListener("message", ({ data, origin }) => location.origin === origin && demoContent(data));
