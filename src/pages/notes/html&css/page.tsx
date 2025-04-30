import { InlineCode } from "@ui/InlineCode";
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
          <div key={d.prop} className="my-2">
            <InlineCode>{d.prop}</InlineCode>
            <ul>
              {d.values.map((v) => (
                <li key={v.val}>
                  <InlineCode>{v.val}</InlineCode>
                  {v.des === "" ? "" : `：${v.des}`}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </>
    ),
  },
];
