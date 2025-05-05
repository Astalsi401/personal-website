import { P } from "@ui/paragraph";
import { Li, Ol, Ul } from "@ui/list";
import type { SectionsProps } from "@/types";
import { Calculator } from "./calculator";

export const Sections: SectionsProps = () => [
  {
    title: "",
    content: (
      <>
        <P>
          本頁面為
          <a target="_blank" href="https://www.youtube.com/channel/UCGK33hhvffYv5hUNqB0wVnQ">
            Johnson Racing
          </a>
          影片升級部分的簡易中文摘要。
        </P>
        <P>
          車輛升級主要考量四個方面：<b>重量</b>、<b>動力</b>、<b>操控</b>、<b>分數</b>
        </P>
        <P>
          建議依據以下順序來升級車輛：
          <br />
          改造 &gt; 空力套件與外觀 &gt; 輪胎與輪圈 &gt; 傳動系統 &gt; 底盤與操控性 &gt; 引擎
        </P>
      </>
    ),
  },
  {
    title: "改造",
    content: (
      <>
        <Ol type="i">
          <h4>
            <Li>置換引擎</Li>
          </h4>
          <P>不同的引擎會影響之後的升級，因此優先處理。在FH4中V10引擎通常有最佳的數值，不過還是建議自己計算。</P>
          <h4>
            <Li>傳動系統置換</Li>
          </h4>
          <P>RWD通常在單圈速度上會有更佳的表現，因為在同樣的分數下能擁有更高的馬力，但起步速度慢，駕駛難度高。AWD起步快，駕駛難度較低，遭遇碰撞推擠時更穩定，但馬力較低。</P>
          <h4>
            <Li>進氣</Li>
          </h4>
          <P>離心式機械增壓&gt;渦輪增壓&gt;正壓排氣式增壓</P>
          <h4>
            <Li>寬體</Li>
          </h4>
          <P>允許更寬的輪距，能增加操控，但也會增加重量。</P>
        </Ol>
      </>
    ),
  },
  {
    title: "空力套件與外觀",
    content: (
      <>
        <P>S1以上建議先解鎖前後空力，其餘選項在最後用來調整分數。</P>
      </>
    ),
  },
  {
    title: "輪胎與輪圈",
    content: (
      <>
        <Ol type="i">
          <h4>
            <Li>輪胎踏面膠料</Li>
          </h4>
          <P>依據車輛分數選擇，分數超過S1後建議將操控升至8以上，因此大多會安裝賽車胎。</P>
          <h4>
            <Li>胎寬</Li>
          </h4>
          <Ul>
            <Li>AWD：前輪不必要、後輪最寬</Li>
            <P>大多數車將後輪改到最寬並不會增加分數，甚至還可能讓分數減少，增加引擎的改裝空間，同時又能增加抓地力。</P>
          </Ul>
          <h4>
            <Li>輪圈尺寸</Li>
          </h4>
          <Ul>
            <Li>AWD：加大後輪尺寸會減少分數，可用來調整分數。</Li>
          </Ul>
          <P>其餘選項在最後用來調整分數</P>
        </Ol>
      </>
    ),
  },
  {
    title: "傳動系統",
    content: (
      <>
        <Ol type="i">
          <h4>
            <Li>離合器</Li>
          </h4>
          <P>不需要，換檔時間可以手排（含離合器）改善。</P>
          <h4>
            <Li>變速箱</Li>
          </h4>
          <P>一般跑車變速箱已經夠用，但賽車變速箱若不增加分數則建議裝上，可以更細緻的調整車輛。</P>
          <h4>
            <Li>傳動軸</Li>
          </h4>
          <P>減少些許重量，可最後再決定是否升級。</P>
          <h4>
            <Li>差速器</Li>
          </h4>
          <P>務必升滿，對車輛調教非常重要。</P>
        </Ol>
      </>
    ),
  },
  {
    title: "底盤與操控性",
    content: (
      <>
        <Ol type="i">
          <h4>
            <Li>剎車</Li>
          </h4>
          <P>不需要。</P>
          <h4>
            <Li>彈簧及阻尼</Li>
          </h4>
          <P>依據需求選擇賽車或拉力。</P>
          <h4>
            <Li>前後防傾桿</Li>
          </h4>
          <P>必需。</P>
          <h4>
            <Li>底盤強化/防滾籠</Li>
          </h4>
          <P>不需要。</P>
          <h4>
            <Li>車重減輕</Li>
          </h4>
          <P>必須，建議升滿。</P>
        </Ol>
      </>
    ),
  },
  {
    title: "引擎",
    content: (
      <>
        <h4>優先順序：</h4>
        <Ol type="a">
          <Li>增壓（ex:渦輪）</Li>
          <Li>排氣系統</Li>
          <Li>凸輪軸</Li>
          <Li>氣閥</Li>
          <Li>進氣系統</Li>
          <Li>活塞/壓縮比</Li>
          <Li>飛輪</Li>
        </Ol>
        <P>中間冷卻器、機油/冷卻系統的升級有時會降低分數，可以用來調整。</P>
      </>
    ),
  },
  {
    title: "馬力重量比計算",
    content: (
      <>
        <P>每匹馬力需負擔的重量。</P>
        <Calculator />
      </>
    ),
  },
];
