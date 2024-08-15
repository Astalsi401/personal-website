const demoContent = async (html, css = null, js = null) => {
  const code = await fetch(html).then((res) => res.text());
  document.body.innerHTML = code;
  !document.querySelector("link") && css && (document.head.innerHTML += `<link rel="stylesheet" href="${css}">`);
  js && (await import(js));
};
export default demoContent;
