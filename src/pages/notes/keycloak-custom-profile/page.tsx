import { CodeChunk, ZoomImage } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { Li, Ol } from "@ui/list";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath, imagePath }) => [
  {
    title: "Next.js config",
    content: (
      <>
        <Ol>
          <Li>
            Install <InlineCode>@auth/core</InlineCode> as dev dependency:
            <CodeChunk code={`npm install @auth/core --save-dev`} lang="bash" />
          </Li>
          <Li>
            Create a <InlineCode>type.d.ts</InlineCode> file to modified session
            type:
            <CodeChunk path={`${demoPath}/type.d.ts.example`} lang="ts" />
          </Li>
          <Li>
            Modified callbacks <InlineCode>jwt</InlineCode> &{" "}
            <InlineCode>session</InlineCode> to save user profile in session:
            <CodeChunk path={`${demoPath}/auth.ts.example`} lang="ts" />
          </Li>
          <Li>
            Modified provider <InlineCode>profile</InlineCode> function:
            <CodeChunk path={`${demoPath}/keycloak.ts.example`} lang="ts" />
          </Li>
        </Ol>
      </>
    ),
  },
  {
    title: "Keycloak config",
    content: (
      <>
        <Ol>
          <Li>
            Modified profile attributes in realm settings:
            <ZoomImage src={`${imagePath}/keycloak-profile.png`} />
          </Li>
          <Li>
            Modified client scopes, replace{" "}
            <InlineCode>{`{client}`}</InlineCode> with your client name:
            <br />
            <InlineCode>
              {
                "clients > {client} > Client scopes > {client}-dedicated > Add mapper by configuration > User Attribute"
              }
            </InlineCode>
            <ZoomImage src={`${imagePath}/keycloak-mapper.png`} />
          </Li>
        </Ol>
      </>
    ),
  },
];
