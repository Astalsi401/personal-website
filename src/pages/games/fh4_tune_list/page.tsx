import type { SectionsProps } from "@/types";
import { TuneList } from "./tune-list";

export const Sections: SectionsProps = () => [
  {
    title: "",
    content: <TuneList />,
  },
];
