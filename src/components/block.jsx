export function Block({ className, title, titleClass, id, content }) {
  return (
    <section className={`my-4 ${className ? className : ""}`}>
      {title ? (
        <h3 id={id} className={`mt-3 ${titleClass ? titleClass : ""}`}>
          {title}
        </h3>
      ) : (
        ""
      )}
      {content}
    </section>
  );
}
