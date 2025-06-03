import type { LoaderFunctionArgs, Params } from "react-router";
import type { IndexJson, Post, Categories } from "@/types";

const indexDataKey = "indexData";

export const isActive = (stateActive: boolean) => stateActive && "active";
export const isMyPage: (url: string) => boolean = (url) => !/^http/.test(url);
export const titleToHash = (title: string) => title.replace(" ", "_");
export const httpClient: <T>(url: string) => Promise<T> = (url) => fetch(url).then((res) => res.json());

export const getIndex = async (): Promise<Categories> => {
  const indexData = await httpClient<IndexJson>(`${import.meta.env.BASE_URL}/assets/json/index.json`);
  localStorage.setItem(indexDataKey, JSON.stringify(indexData));
  const { root: category, href, index } = indexData;
  return { category, href, pages: index.map((d) => ({ page: d.category, ...d })) };
};
const getLocalIndex = async (): Promise<IndexJson> => {
  const indexDataString = localStorage.getItem(indexDataKey);
  if (!indexDataString) return await httpClient<IndexJson>(`${import.meta.env.BASE_URL}/assets/json/index.json`);
  return JSON.parse(indexDataString);
};
export const getIndexPage = async (args: LoaderFunctionArgs | undefined): Promise<Categories | null> => {
  const { root: category, href, index }: IndexJson = await getLocalIndex();
  if (args?.params?.href) {
    const res = index.find((d) => d.href === `/${args?.params?.href}`);
    if (!res) throw new Error("category pages not found");
    return res;
  }
  return { category, href, pages: index.map((d) => ({ page: d.category, ...d })) };
};
export const getSections = async ({ params }: { params: Params }) => {
  const { index } = await getLocalIndex();
  const title = index.find((d) => d.href === `/${params.href}`)?.pages?.find((d) => d.href === `/${params.page}`);
  const Sections: Post = await import(`@/pages/${params.href}/${params.page}/page.tsx`).then((mod) => mod.Sections);
  return { title: title?.page, Sections };
};

type clsxProps = string | boolean | null | undefined;
export const clsx = (...classes: clsxProps[]) => classes.filter(Boolean).join(" ");
