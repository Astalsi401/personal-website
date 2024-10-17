import { useEffect } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { CurrentPostTitleType, updateStore, useAppDispatch, useAppSelector } from "@store";
import { Block, ImageGallary } from "@components";
import { isActive, titleToHash } from "@functions";
import type { SectionsProps } from "@types";

export const PostPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { title, Sections } = useLoaderData() as { title: string | undefined; Sections: SectionsProps };
  const { href, page } = useParams();
  const { hash } = useLocation();
  const currentPostTitles = useAppSelector((state) => state.currentPostTitles);
  const hasTitles = currentPostTitles.length !== 0;
  const sections = Sections({ imagePath: `${import.meta.env.BASE_URL}/assets/images`, demoPath: `${import.meta.env.BASE_URL}/assets/demo-files/${href}/${page}` });
  const scrollToHash = () => {
    const elem = hash.length > 0 && (document.querySelector(decodeURI(hash)) as HTMLElement | null | false);
    elem && window.scrollTo({ top: elem.offsetTop - 56 }); // 56 = header height + section title margin top
  };
  const pageLoadObserver = new ResizeObserver(scrollToHash);
  const pageLoadUnObserver = () => pageLoadObserver.unobserve(document.body);
  useEffect(() => {
    title && (document.title = title);
    dispatch(updateStore({ currentPostTitles: sections.map((section) => ({ title: section.title, active: false })).filter((section) => section.title.length > 0) }));
  }, [title]);
  useEffect(() => {
    const timer = setTimeout(pageLoadUnObserver, 500);
    pageLoadObserver.observe(document.body);
    window.addEventListener("resize", pageLoadUnObserver);
    return () => {
      clearTimeout(timer);
      pageLoadUnObserver();
      window.removeEventListener("resize", pageLoadUnObserver);
    };
  }, []);
  return (
    <>
      <main id="main-content" className="container-xl shadow-lg pb-5" style={hasTitles ? {} : ({ "--aside-w": 0 } as React.CSSProperties)}>
        <h1 className="my-5 text-center">{title}</h1>
        <div className={hasTitles ? `d-md-grid` : ""}>
          <div className="post-content p-3 pb-5">
            {sections.map(({ title, content }, i) => (
              <Block key={`${href}-${page}-${i}-${title}`} id={titleToHash(title)} title={title}>
                {content}
              </Block>
            ))}
          </div>
          {currentPostTitles.length > 0 && <AsideContent currentPostTitles={currentPostTitles} />}
        </div>
      </main>
      {<ImageGallary />}
    </>
  );
};

const AsideContent: React.FC<{ currentPostTitles: CurrentPostTitleType[] }> = ({ currentPostTitles }) => {
  const dispatch = useAppDispatch();
  const handleCurrentSection = (title: string) => dispatch(updateStore({ currentPostTitles: currentPostTitles.map((s) => ({ ...s, active: s.title === title })) }));
  return (
    <div className="aside-content d-none d-md-block px-2 text-small">
      <a href="#main-content" className="d-block text-primary text-bold">
        On this page
      </a>
      {currentPostTitles.map(({ title, active }) => (
        <a key={`aside-${title}`} href={`#${titleToHash(title)}`} className={`my-2 ps-1 d-block ${isActive(active)}`} onClick={() => handleCurrentSection(title)}>
          {title}
        </a>
      ))}
    </div>
  );
};
