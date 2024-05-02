import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Block } from "../components/block";
import { updateStore } from "../assets/store";
import { isActive } from "../components/functions";

export default function PostPage() {
  const dispatch = useDispatch();
  const { title, sections } = useLoaderData();
  const { href, page } = useParams();
  const currentPostTitles = useSelector((state) => state.currentPostTitles);
  const handleScrollEnd = () => {
    const { scrollY, innerHeight } = window;
    if (scrollY + innerHeight >= document.body.scrollHeight && currentPostTitles.length !== 0) dispatch(updateStore({ currentPostTitles: currentPostTitles.map((s, i) => ({ title: s.title, active: i === currentPostTitles.length - 1 })) }));
  };
  useEffect(() => {
    dispatch(updateStore({ currentPostTitles: sections.map((s) => ({ title: s.title, active: false })) }));
    document.title = title;
    document.addEventListener("scroll", handleScrollEnd);
    return () => document.removeEventListener("scroll", handleScrollEnd);
  }, [title]);
  return (
    <main id="main-content" className="container-xl shadow-lg" style={currentPostTitles.length === 0 ? { "--aside-w": 0 } : {}}>
      <h1 className="my-5 text-center">{title}</h1>
      <div className="d-sm-grid">
        <div className="post-content p-3">
          {sections.map((section) => (
            <Block key={`${href}-${page}-${section.title}`} id={section.title} title={section.title}>
              {section.content}
            </Block>
          ))}
        </div>
        {currentPostTitles.length > 0 && <AsideContent currentPostTitles={currentPostTitles} />}
      </div>
    </main>
  );
}

function AsideContent({ currentPostTitles }) {
  return (
    <div className="aside-content d-sm-block d-none px-3 text-small">
      <a href="#" className="d-block text-primary text-bold">
        On this page
      </a>
      {currentPostTitles.map(({ title, active }) => (
        <a key={`aside-${title}`} href={`#${title}`} className={`d-block ${isActive(active)}`}>
          {title}
        </a>
      ))}
    </div>
  );
}
