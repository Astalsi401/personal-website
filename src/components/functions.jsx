export const toggleActive = (stateActive) => (stateActive ? "active" : "");
export const getCategories = async () => {
  const data = await getIndex();
  return data.find((d) => d.href === "/");
};
export const getPages = async ({ params: { href } }) => {
  const data = await getIndex();
  return data.find((d) => d.href === `/${href}`);
};
export const getSections = async ({ params: { href, page } }) => {
  const data = await getIndex();
  const sections = await import(`../pages/${href}/${page}/page.jsx`);
  const title = data.find((d) => d.href === `/${href}`).pages.find((d) => d.href === `/${href}/${page}`).page;
  return [title, sections.default];
};

const getIndex = async () => {
  const data = await fetch(`${import.meta.env.BASE_URL}/assets/json/index.json`).then((res) => res.json());
  return data.index;
};
