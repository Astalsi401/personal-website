import { clsx } from "@functions";

export const Tags: React.FC<{ className?: string; tags: string[] }> = ({ className, tags }) => (
  <div className={clsx("page-tags p-1 d-flex flex-wrap align-items-end", className)}>
    {tags.map((tag, i) => (
      <Tag key={tag} className="bg-primary text-white text-small" style={{ "--i": i } as React.CSSProperties}>
        {tag}
      </Tag>
    ))}
  </div>
);

export const Tag: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className, style }) => (
  <div className={clsx("page-tag px-1 m-1 rounded-1 shadow-sm", className)} style={style}>
    {children}
  </div>
);
