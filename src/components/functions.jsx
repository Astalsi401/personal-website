export const toggleActive = (stateActive) => (stateActive ? "active" : "");
export const getPages = async ({ params: { href } }) => {
  const data = await fetch(`${import.meta.env.BASE_URL}/assets/json/index.json`).then((res) => res.json());
  return data.index.find((d) => d.href === `/${href}`);
};
