import type { Params } from "react-router-dom";
import type { IndexJson, Post, Categories } from "@types";

export const isActive = (stateActive: boolean) => stateActive && "active";
export const isMyPage: (url: string) => boolean = (url: string) => !/^http/.test(url);
export const titleToHash = (title: string) => title.replace(" ", "_");
export const getIndex: () => Promise<IndexJson> = async () => await fetch(`${import.meta.env.BASE_URL}/assets/json/index.json`).then((res) => res.json());
export const getCategories: () => Promise<Categories> = async () => {
  const { index, root, href } = await getIndex();
  return { category: root, href: href, pages: index.map((d) => ({ page: d.category, href: d.href, icon: d.icon })) };
};
export const getPages = async ({ params: { href } }: { params: Params }) => {
  const { index } = await getIndex();
  return index.find((d) => d.href === `/${href}`);
};
export const getSections = async ({ params: { href, page } }: { params: Params }) => await Promise.all([getIndex(), import(`../pages/${href}/${page}/page.tsx`) as Promise<Post>]).then(([{ index }, { default: Sections }]) => ({ title: index.find((d) => d.href === `/${href}`)?.pages?.find((d) => d.href === `/${page}`)?.page, Sections }));

type clsxProps = string | boolean | null | undefined;
export const clsx = (...classes: clsxProps[]) => classes.filter(Boolean).join(" ");
