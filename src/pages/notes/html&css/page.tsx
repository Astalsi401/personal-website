import { InlineCode } from "@ui/inline-code";
import { Li, Ul } from "@ui/list";
import { Subsection } from "@ui/subsection";
import type { SectionsProps } from "@/types";

const data = {
  css: [
    {
      prop: "object-fit",
      values: [
        { val: "fill", des: "預設，圖片變形" },
        { val: "contain", des: "保持比例完整呈現於容器中" },
        { val: "cover", des: "裁減圖片填滿容器" },
        { val: "none", des: "不調整圖片比例" },
        { val: "scale-down", des: "等比縮小" },
      ],
    },
    {
      prop: "object-position",
      values: [
        { val: "left、right、top、bottom、center...", des: "" },
        { val: "50% 50%", des: "" },
      ],
    },
    {
      prop: "background-attachment",
      values: [{ val: "fixed", des: "" }],
    },
  ],
};

export const Sections: SectionsProps = () => [
  {
    title: "css",
    content: (
      <>
        {data.css.map((d) => (
          <Subsection key={d.prop}>
            <InlineCode>{d.prop}</InlineCode>
            <Ul>
              {d.values.map((v) => (
                <Li key={v.val}>
                  <InlineCode>{v.val}</InlineCode>
                  {v.des === "" ? "" : `：${v.des}`}
                </Li>
              ))}
            </Ul>
          </Subsection>
        ))}
      </>
    ),
  },
];
