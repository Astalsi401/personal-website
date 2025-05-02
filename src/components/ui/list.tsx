export const List: React.FC<{ children: React.ReactNode; order?: boolean }> = ({ children, order = false }) => {
  const Component = order ? Ol : Ul;
  return <Component className="ms-3">{children}</Component>;
};
const Ul: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => <ul className={className}>{children}</ul>;
const Ol: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => <ol className={className}>{children}</ol>;
export const Li: React.FC<{ children: React.ReactNode }> = ({ children }) => <li className="my-1">{children}</li>;
