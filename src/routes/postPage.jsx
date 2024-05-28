import { useEffect } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Block } from "../components/block";
import { updateStore } from "../assets/store";
import { isActive, titleToHash } from "../components/functions";

export const PostPage = () => {
  const dispatch = useDispatch();
  const { title, Sections } = useLoaderData();
  const { href, page } = useParams();
  const { hash } = useLocation();
  const currentPostTitles = useSelector((state) => state.currentPostTitles);
  const observer = new ResizeObserver(() => {
    const elem = hash.length > 0 && document.querySelector(decodeURI(hash));
    elem && window.scrollTo({ behavior: "smooth", top: elem.offsetTop - 56 }); // 56 = header height + section title margin top
  });
  const hasTitles = currentPostTitles.length !== 0;
  const sections = Sections(`${import.meta.env.BASE_URL}/assets/demo-files/${href}/${page}`);
  const unobserve = () => observer.unobserve(document.body);
  useEffect(() => {
    document.title = title;
    dispatch(updateStore({ currentPostTitles: sections.map((section) => ({ title: section.title, active: false })).filter((section) => section.title.length > 0) }));
  }, [title]);
  useEffect(() => {
    window.addEventListener("resize", unobserve);
    observer.observe(document.body);
    return () => {
      window.removeEventListener("resize", unobserve);
      unobserve();
    };
  }, []);
  return (
    <main id="main-content" className="container-xl shadow-lg pb-5" style={hasTitles ? {} : { "--aside-w": 0 }}>
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
  );
};

const AsideContent = ({ currentPostTitles }) => {
  const dispatch = useDispatch();
  const handleCurrentSection = (title) => dispatch(updateStore({ currentPostTitles: currentPostTitles.map((s) => ({ ...s, active: s.title === title })) }));
  return (
    <div className="aside-content d-none d-md-block px-2 text-small">
      <a href="#main-content" className="d-block text-primary text-bold">
        On this page
      </a>
      {currentPostTitles.map(({ title, active }) => (
        <a key={`aside-${title}`} href={`#${titleToHash(title)}`} className={`ps-1 d-block ${isActive(active)}`} onClick={() => handleCurrentSection(title)}>
          {title}
        </a>
      ))}
    </div>
  );
};
