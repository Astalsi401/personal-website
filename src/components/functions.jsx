export const toggleActive = (stateActive) => (stateActive ? "active" : "");
export const getCategories = async () => {
  const { index, root, href } = await getIndex();
  return { category: root, href: href, pages: index.map((d) => ({ page: d.category, href: d.href, icon: d.icon })) };
};
export const getPages = async ({ params: { href } }) => {
  const { index } = await getIndex();
  return index.find((d) => d.href === `/${href}`);
};
export const getSections = async ({ params: { href, page } }) => {
  const { index } = await getIndex();
  const sections = await import(`../pages/${href}/${page}/page.jsx`);
  const title = index.find((d) => d.href === `/${href}`).pages.find((d) => d.href === `/${page}`).page;
  return [title, sections.default];
};

const getIndex = async () => await fetch(`${import.meta.env.BASE_URL}/assets/json/index.json`).then((res) => res.json());
