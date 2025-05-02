import { clsx } from "@functions";

export const Tags: React.FC<{ className?: string; tags: string[] }> = ({ className, tags }) => (
  <div className={clsx("page-tags p-1 d-flex flex-wrap align-items-end", className)}>
    {tags.map((tag, i) => (
      <div key={tag} className="page-tag bg-primary text-white text-small px-1 m-1 rounded-1 shadow-sm" style={{ "--i": i } as React.CSSProperties}>
        {tag}
      </div>
    ))}
  </div>
);
