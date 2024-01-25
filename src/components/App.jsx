import { useEffect, useState } from "react";

const App = ({ category, className, title, path }) => {
  const [Content, setContent] = useState(null);
  const importContent = async () => {
    const content = await import(path);
    setContent(content.default);
  };
  useEffect(() => {
    document.title = title;
    importContent();
  }, []);
  return (
    <>
      <Header category={category} />
      <main id="main-content" className={className}>
        <h1 className="my-5 text-center">{title}</h1>
        <Content />
      </main>
    </>
  );
};

export default App;
