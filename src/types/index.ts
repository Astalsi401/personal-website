import { JSX } from "react";

export type PostSection = {
  title: string;
  content: JSX.Element;
};
export type SectionsProps = (props: { imagePath: string; demoPath: string }) => PostSection[];
export type Post = { Sections: SectionsProps };
export type Page = { page: string; href: string; thumbnail?: string; tags?: string[]; icon?: string; pages?: Page[] };
export type Categories = {
  category: string;
  href: string;
  icon?: string;
  pages: Page[];
};
export type IndexJson = {
  root: string;
  href: string;
  index: Categories[];
};
