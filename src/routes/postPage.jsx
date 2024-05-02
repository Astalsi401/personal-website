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
  useEffect(() => {
    document.title = title;
    dispatch(updateStore({ currentPostTitles: sections.map((s) => ({ title: s.title, active: false })).filter((s) => s.title.length > 0) }));
  }, [title]);
  return (
    <main id="main-content" className="container-xl shadow-lg" style={currentPostTitles.length === 0 ? { "--aside-w": 0 } : {}}>
      <h1 className="my-5 text-center">{title}</h1>
      <div className="d-sm-grid">
        <div className="post-content p-3">
          {sections.map((section, i) => (
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
