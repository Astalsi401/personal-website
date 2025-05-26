import { CodeChunk } from "@/components";
import type { SectionsProps } from "@/types";
import { InlineCode } from "@ui/inline-code";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "useSearchParams",
    content: (
      <>
        在 server component 中使用時，需包裹於<InlineCode>Suspense</InlineCode>
        <CodeChunk path={`${demoPath}/`} lang="ts" />
      </>
    ),
  },
];
