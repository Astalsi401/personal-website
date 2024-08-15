const demoContent = async ({ html, cssHref, js }) => {
  try {
    html &&
      (document.body.innerHTML = await fetch(html)
        .then((res) => (res.ok ? res.text() : ""))
        .catch((err) => err.message.includes("404") && ""));
    cssHref && document.head.querySelector(`link[data-demo="style"]`)?.remove();
    cssHref && (document.head.innerHTML += `<link data-demo="style" rel="stylesheet" href="${cssHref}">`);
    js && (await Promise.all(js.map((lib) => import(lib))));
  } catch (error) {
    console.error(error);
  }
};
window.addEventListener("load", () => parent.postMessage({ load: true }));
window.addEventListener("message", ({ data, origin }) => location.origin === origin && demoContent(data));
