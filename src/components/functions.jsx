export const isActive = (stateActive) => (stateActive ? "active" : "");
export const getCategories = async () => {
  const { index, root, href } = await getIndex();
  return { category: root, href: href, pages: index.map((d) => ({ page: d.category, href: d.href, icon: d.icon })) };
};
export const getPages = async ({ params: { href } }) => {
  const { index } = await getIndex();
  return index.find((d) => d.href === `/${href}`);
};
export const getSections = async ({ params: { href, page } }) => {
  const indexPromise = getIndex();
  const sectionsPromise = import(`../pages/${href}/${page}/page.jsx`);
  return Promise.all([indexPromise, sectionsPromise]).then(([{ index }, { default: sections }]) => [index.find((d) => d.href === `/${href}`).pages.find((d) => d.href === `/${page}`).page, sections]);
};
const getIndex = async () => await fetch(`${import.meta.env.BASE_URL}/assets/json/index.json`).then((res) => res.json());
