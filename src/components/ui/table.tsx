export const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => <table className="mx-auto my-2">{children}</table>;
export const Th: React.FC<{ children: React.ReactNode }> = ({ children }) => <th className="p-2 border-solid border-1 bd-black-80 text-bold">{children}</th>;
export const Td: React.FC<{ children: React.ReactNode }> = ({ children }) => <td className="p-2 border-solid border-1 bd-black-80">{children}</td>;
