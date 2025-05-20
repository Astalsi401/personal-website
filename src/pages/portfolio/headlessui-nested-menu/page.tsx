import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({}) => [
  {
    title: "Demo",
    content: (
      <>
        <DemoFrame src="https://astalsi401.github.io/headlessui-nested-menu" />
      </>
    ),
  },
  {
    title: "Usage",
    content: (
      <>
        <a href="https://github.com/Astalsi401/headlessui-nested-menu/tree/main" target="_blank">
          source code
        </a>
        <CodeChunk path="https://github.com/Astalsi401/headlessui-nested-menu/blob/main/src/App.tsx" lang="tsx" />
      </>
    ),
  },
];
