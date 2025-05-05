import { CodeChunk } from "@/components";
import { Li, Ul } from "@ui/list";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = () => [
  {
    title: "packages management",
    content: (
      <>
        <Ul>
          <Li>
            檢查可更新的packages
            <CodeChunk code={`npm outdated`} lang="bash" />
          </Li>
          <Li>
            有限制的更新(不跨主版號)
            <CodeChunk code={`npm update`} lang="bash" />
          </Li>
          <Li>
            列出當前packages的版本
            <CodeChunk code={`npm list`} lang="bash" />
          </Li>
        </Ul>
      </>
    ),
  },
];
