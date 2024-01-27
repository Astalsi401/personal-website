import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Block from "../components/block";

export default function PostPage() {
  const [title, sections] = useLoaderData();
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <main id="main-content" className="container-xl shadow-lg p-3">
      <h1 className="my-5 text-center">{title}</h1>
      {sections.map((section) => (
        <Block key={section.title} id={section.title} title={section.title} content={section.content} />
      ))}
    </main>
  );
}
