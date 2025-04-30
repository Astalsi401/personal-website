import { DemoFrame } from "@/components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "",
    content: (
      <>
        原始頁面已刪除
        <DemoFrame html={`${demoPath}/frame1/expo-visit-page-2022.html`} cssHref={`${demoPath}/frame1/expo-visit-page-2022.min.css`} js={[`${demoPath}/frame1/expo-visit-page-2022.js`]} lib="jquery" />
      </>
    ),
  },
];
export default Sections;
