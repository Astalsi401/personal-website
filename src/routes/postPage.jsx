import { useEffect, Suspense } from "react";
import { useLoaderData, useParams, useAsyncValue, Await } from "react-router-dom";
import { Block } from "../components/block";

export default function PostPage() {
  const data = useLoaderData();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={data}>
        <PostContnet />
      </Await>
    </Suspense>
  );
}

function PostContnet() {
  const [title, sections] = useAsyncValue();
  const { href, page } = useParams();
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <main id="main-content" className="container-xl shadow-lg p-3">
      <h1 className="my-5 text-center">{title}</h1>
      {sections.map((section) => (
        <Block key={`${href}-${page}-${section.title}`} id={section.title} title={section.title} content={section.content} />
      ))}
    </main>
  );
}
