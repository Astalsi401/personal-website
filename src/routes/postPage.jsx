import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Block } from "../components/block";
import { updateStore } from "../assets/store";

export default function PostPage() {
  const dispatch = useDispatch();
  const { title, sections } = useLoaderData();
  const { href, page } = useParams();
  useEffect(() => {
    document.title = title;
    dispatch(updateStore({ currentPostTitles: sections.map((s) => s.title).filter((s) => s.length > 0) }));
  }, [title]);
  return (
    <main id="main-content" className="container shadow-lg p-3">
      <h1 className="my-5 text-center">{title}</h1>
      {sections.map((section) => (
        <Block key={`${href}-${page}-${section.title}`} id={section.title} title={section.title} content={section.content} />
      ))}
    </main>
  );
}
