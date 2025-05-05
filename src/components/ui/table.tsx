import { clsx } from "@functions";

type TableProps = React.HTMLAttributes<HTMLTableElement>;
export const Table: React.FC<TableProps> = ({ children, className, ...props }) => (
  <table className={clsx("mx-auto my-2", className)} {...props}>
    {children}
  </table>
);

type CellProps = React.HTMLAttributes<HTMLTableCellElement>;
export const Th: React.FC<CellProps> = ({ children, className, ...props }) => (
  <th className={clsx("p-2 border-solid border-1 bd-black-80 text-bold", className)} {...props}>
    {children}
  </th>
);
export const Td: React.FC<CellProps> = ({ children, className, ...props }) => (
  <td className={clsx("p-2 border-solid border-1 bd-black-80", className)} {...props}>
    {children}
  </td>
);
