import { CodeChunk } from "@/components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = () => [
  {
    title: "packages management",
    content: (
      <>
        <ul>
          <li>
            檢查可更新的packages
            <CodeChunk code={`npm outdated`} lang="bash" />
          </li>
          <li>
            有限制的更新(不跨主版號)
            <CodeChunk code={`npm update`} lang="bash" />
          </li>
          <li>
            列出當前packages的版本
            <CodeChunk code={`npm list`} lang="bash" />
          </li>
        </ul>
      </>
    ),
  },
];

export default Sections;
