export type PostSection = {
  title: string;
  content: JSX.Element;
};
export type SectionsProps = (imagePath: string, demoPath: string) => PostSection[];
export type Post = { default: (imagePath: string, demoPath: string) => PostSection[] };
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
export type CodeInfo = {
  code: string | undefined;
  fileName: string;
};
export type HamburgerProps = {
  sidebarActive: boolean;
  btnRef: React.RefObject<HTMLAnchorElement>;
};
export type LabelProps = {
  label?: string;
  name?: string;
  type?: string;
  step?: string;
  min?: string;
  max?: string;
  placeholder?: string;
  value?: string;
  fuc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export type SidebarProps = { wrapperRef: React.RefObject<HTMLElement> };
export type ZoomImageProps = {
  id?: string;
  className?: string;
  src: string;
  alt?: string;
};
