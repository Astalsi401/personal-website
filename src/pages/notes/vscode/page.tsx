import { Fragment } from "react";
import { Kbd } from "@ui/kbd";
import { Li, Ul } from "@ui/list";
import { shortcuts } from "./shortcuts";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = () =>
  shortcuts.map(({ title, shortcut }) => ({
    title,
    content: (
      <Ul>
        {shortcut.map((li) => (
          <Li key={li.name}>
            {li.name}：
            {li.keys.map((keys) =>
              keys
                .map((kbd) => <Kbd key={kbd}>{kbd}</Kbd>)
                .reduce((prev, curr) => (
                  <Fragment key={`${title}-${li.name}-${prev.key}-${curr.key}`}>
                    {prev}+{curr}
                  </Fragment>
                ))
            )}
          </Li>
        ))}
      </Ul>
    ),
  }));
