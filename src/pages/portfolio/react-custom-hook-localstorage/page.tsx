import { CodeChunk } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { Li, Ul } from "@ui/list";
import type { SectionsProps } from "@/types";

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
          <Li>
            將 function 直接傳入<InlineCode>useState</InlineCode>以確保只在初次渲染時執行
            <CodeChunk code={`useState<T>(getLocal)`} lang="ts" />
          </Li>
        </Ul>
      </>
    ),
  },
];
