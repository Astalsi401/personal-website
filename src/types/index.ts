export type PostSection = {
  title: string;
  content: JSX.Element;
};
export type SectionsProps = (props: { imagePath: string; demoPath: string }) => PostSection[];
export type Post = { Sections: SectionsProps };
export type Page = { page: string; href: string; thumbnail?: string; tags?: string[]; icon?: string };
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
export type BlockProps = {
  className?: string;
  title?: string;
  titleClass?: string;
  id?: string;
  children: React.ReactNode;
};
export type CodeChunkProps = {
  code?: string;
  lang?: string;
  path?: string;
};
export type DemoFrameProps = { src?: string; html?: string; scssHref?: string; js?: string[]; lib?: "react" | "d3js" | "jquery" | "leaflet" | undefined };
export type CodeInfo = {
  code: string | undefined;
  loading: boolean;
  fileName: string;
};
export type HamburgerProps = {
  sidebarActive: boolean;
  btnRef: React.RefObject<HTMLAnchorElement>;
};
export type SidebarProps = { wrapperRef: React.RefObject<HTMLElement> };
export type ZoomImageProps = {
  id?: string;
  className?: string;
  src: string;
  alt?: string;
};
