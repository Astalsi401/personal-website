import { CodeChunk } from "@/components";
import type { SectionsProps } from "@/types";
import { InlineCode } from "@ui/inline-code";
import { Li, Ul } from "@ui/list";

export const Sections: SectionsProps = () => [
  {
    title: "useLocalStroage",
    content: (
      <>
        <CodeChunk path="https://github.com/Astalsi401/personal-website/blob/main/src/hooks/use-local-storage.ts" lang="ts" />
      </>
    ),
  },
  {
    title: "Usage",
    content: (
      <>
        <CodeChunk code={`const [example, setExample] = useLocalStorage<string | null>("example", null, { expired: 12 * 60 * 60 });`} lang="ts" />
        <Ul>
          <Li>
            key: <InlineCode>example</InlineCode>
          </Li>
          <Li>
            預設 <InlineCode>null</InlineCode>
          </Li>
          <Li>
            <InlineCode>{`{ expired: 12 * 60 * 60 }`}</InlineCode>: 12 小時後過期
          </Li>
        </Ul>
      </>
    ),
  },
];
