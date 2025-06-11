import { P } from "@ui/paragraph";
import { Li, Ol } from "@ui/list";
import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";
import { InlineCode } from "@ui/inline-code";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "",
    content: (
      <>
        <P>
          A mod for the game "Degree of lewdity" that enhances the realism of
          pain effects, making the gameplay more and challenging.
        </P>
      </>
    ),
  },
  {
    title: "Features",
    content: (
      <>
        <Ol>
          <Li>
            Decrease the amount of pain change over time.
            <CodeChunk path={`${demoPath}/painChangeByTime.js`} lang="js" />
            In dol source code <InlineCode>time.js</InlineCode>:
            <CodeChunk
              code={`statChange.pain(minutes, painChangeByTime ? painChangeByTime(V.pain) : -1);`}
              lang="js"
            />
            <DemoFrame
              html={`${demoPath}/graph.html`}
              scssHref={`${demoPath}/graph.scss`}
              js={[
                `${demoPath}/graph.js`,
                `${demoPath}/painChangeByTime.js`,
                `${demoPath}/painChangeByTime/draw.js`,
              ]}
              lib="d3js"
              bgColor="#213547"
            />
          </Li>
          <Li>
            Tiredness will increase more depend on pain.
            <CodeChunk
              path={`${demoPath}/tirednessChangeByPain.js`}
              lang="js"
            />
            In dol source code <InlineCode>stat-changes.js</InlineCode>:
            <CodeChunk
              code={`V.tiredness += Math.round(amount * Weather.BodyTemperature.fatigueModifier * (amount > 0 ? 15 : 20) * (tirednessChangeByPain ? tirednessChangeByPain(V.pain) : 1));`}
              lang="js"
            />
            <DemoFrame
              html={`${demoPath}/graph.html`}
              scssHref={`${demoPath}/graph.scss`}
              js={[
                `${demoPath}/graph.js`,
                `${demoPath}/tirednessChangeByPain.js`,
                `${demoPath}/tirednessChangeByPain/draw.js`,
              ]}
              lib="d3js"
              bgColor="#213547"
            />
          </Li>
          <Li>
            In Mines, Livestock and Underground Brothel, the efficiency of
            digging a hole to escape can be affected by pain and tiredness.
            <CodeChunk path={`${demoPath}/escapeAmount.js`} lang="js" />
            <DemoFrame
              html={`${demoPath}/escapeAmount/graph.html`}
              scssHref={`${demoPath}/graph.scss`}
              js={[
                `${demoPath}/graph.js`,
                `${demoPath}/escapeAmount.js`,
                `${demoPath}/escapeAmount/draw.js`,
              ]}
              lib="d3js"
              bgColor="#213547"
            />
          </Li>
          <Li>
            Penetrate will increase pain no matter how "experienced" pc is.
            <CodeChunk path={`${demoPath}/penetratedPain.js`} lang="js" />
            I don't know where to put this code to make sure it only run once
            every turn.
            <br />
            So I put it in <InlineCode>21-player-options.js</InlineCode>, and it
            will run twice every turn.
            <CodeChunk
              code={`penetratedPain();\noptions.isDebugging = !!V.debug;`}
              lang="js"
            />
          </Li>
        </Ol>
      </>
    ),
  },
  {
    title: "Installation",
    content: (
      <>
        <P>
          To install the mod, download it from the provided link and follow the
          instructions in the README file.
        </P>
      </>
    ),
  },
];
