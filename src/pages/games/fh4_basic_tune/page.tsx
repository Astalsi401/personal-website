import { ZoomImage } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { Calculator } from "./calculator";
import type { SectionsProps } from "@/types";
import data from "./data.json";
import { Li, Ol, Ul } from "@ui/list";
import { P } from "@ui/paragraph";

export const Sections: SectionsProps = ({ imagePath }) => [
  {
    title: "",
    content: (
      <>
        本頁面為Youtube上FH4車輛調教影片的簡易中文摘要。
        <br />
        影片清單：
        <Ul>
          {data.videos.map(({ creator, channel, links }) => (
            <Li key={creator}>
              <a href={channel} target="_blank">
                {creator}
              </a>
              <Ul>
                {links.map(({ title, href }) => (
                  <Li key={title}>
                    <a href={href} target="_blank">
                      {title}
                    </a>
                  </Li>
                ))}
              </Ul>
            </Li>
          ))}
        </Ul>
      </>
    ),
  },
  {
    title: "差速器",
    content: (
      <>
        <P>
          影片位置：<a href="https://youtu.be/WM7_3NGGUoQ?t=152">2:32</a>
        </P>
        <P>
          感謝補充：<a href="https://forum.gamer.com.tw/Co.php?bsn=7697&sn=18681&subbsn=7&bPage=0">暗行者(halcyon1211)</a>
        </P>
        <P>差速器控制左右輪轉速的同步率，0%代表各自獨立，100%則完全同步。同步率越高，車輛就能傳送越多馬力到輪上，有越快的加速。差速器對轉向過度、轉向不足，出灣加速有相當大的影響，建議每次5%做增減。</P>
        <Ol type="i" className="my-3">
          <h4>
            <Li>AWD</Li>
          </h4>
          <Ul>
            <Li>
              前差速器加速（25%）：<P>不宜調到太高，雖然使出彎速度較慢，但也會減少過度轉向。</P>
            </Li>
            <Li>
              後差速器加速（40~50%）：<P>減少後差速，出彎速度低，但增加抓地；增加後差速，抓地力降低，出彎速度提高。</P>
            </Li>
            <Li>
              差速器減速（0%）：<P>屬於個人偏好，不過0%更有利出彎加速。</P>
            </Li>
            <Li>
              中央差速器（70%~90%）：<P>決定前後輪分配的馬力，讓車更偏向前驅或後驅。增加後輪馬力，增加轉向過度；但後輪出力過高時將導致加速降低。</P>
            </Li>
          </Ul>
          <h4>
            <Li>RWD</Li>
          </h4>
          <Ul>
            <Li>
              後驅車差速器加速（45%~80%）：<P>根據車輛馬力來調整，越大馬力需要越高的值，越高的值代表轉向過度。判斷的依據為看後側輪胎狀況，過低內側會打滑，過高則是外側打滑。宗旨是在輪胎不打滑的情況下找到自己最習慣的手感。</P>
            </Li>
            <Li>後驅車差速器減速（5%~50%）</Li>
          </Ul>
        </Ol>
      </>
    ),
  },
  {
    title: "剎車",
    content: (
      <>
        <P>
          影片位置：<a href="https://youtu.be/WM7_3NGGUoQ?t=298">4:58</a>
        </P>
        <P>當啟用abs時，將剎車力度調到100%以上將對剎車速度有負面影響。</P>
      </>
    ),
  },
  {
    title: "空力",
    content: (
      <>
        <P>
          影片位置：<a href="https://youtu.be/WM7_3NGGUoQ?t=340">5:40</a>
        </P>
        <P>減少空力，過彎性能降低，但增加極速。增加空力，犧牲少許極速換取更佳的彎道性能。</P>
        <Ol type="i">
          <h4>
            <Li>前空力：</Li>
          </h4>
          <P>有時候前空力並不適合調到最高（保持在約80%的位置），不然在高速時反而會導致失去抓地力。</P>
          <h4>
            <Li>後空力</Li>
          </h4>
          <P>調到最高，若轉向不足再調低</P>
        </Ol>
      </>
    ),
  },
  {
    title: "阻尼",
    content: (
      <>
        <Ol type="i">
          <h4>
            <Li>
              回彈硬度<a href="#公式">（公式決定）</a>
            </Li>
          </h4>
          <h4>
            <Li>壓縮硬度（建議為60%）：</Li>
          </h4>
          <P>影響避震器面對彈跳時的表現，一般在回彈硬度的50%~70%。</P>
        </Ol>
      </>
    ),
  },
  {
    title: "彈簧",
    content: (
      <>
        <P>
          感謝補充：<a href="https://forum.gamer.com.tw/Co.php?bsn=7697&sn=18681&subbsn=7&bPage=0">雪飄夏日(gi516811)</a>
        </P>
        <Ol type="i">
          <h4>
            <Li>彈簧</Li>
          </h4>
          <P>
            使用公式：<InlineCode>(最大值-最小值)×重量比</InlineCode>
          </P>
          <P>注意彈簧公式並未加上最小值。</P>
          <h4>
            <Li>車身高度：</Li>
          </h4>
          <P>降到最低再視情況調高。</P>
        </Ol>
      </>
    ),
  },
  {
    title: "防傾桿",
    content: (
      <>
        <Ol type="i">
          <Li>
            <h4>防傾桿（公路）：</h4>
          </Li>
          <P>
            感謝補充：<a href="https://forum.gamer.com.tw/Co.php?bsn=7697&sn=18681&subbsn=7&bPage=0">暗行者(halcyon1211)</a>
          </P>
          <Ul>
            <Li>
              前置四驅<a href="#公式">（公式決定）</a>
            </Li>
            <Li>中置四驅：</Li>
            <P>同樣使用公式，不過前防傾桿比例可增加2%，例：原重量比48%，改以50%進行計算。</P>
            <Li>後驅：</Li>
            <P>同樣使用公式，因容易轉向過度，所以前防傾桿要比較硬，建議增加6%。</P>
            <Li>前驅：</Li>
            <P>同樣使用公式，因容易轉向不足，所以要比較軟，建議減少8%。</P>
          </Ul>
          <Li>
            <h4>防傾桿（甩尾）：</h4>
          </Li>
          <Ul>
            <Li>
              前：<a href="#公式">公式</a>為基礎，視情況調低。
            </Li>
            <Li>後：可直接調到最低，再視情況調高。</Li>
          </Ul>
          <Li>
            <h4>防傾桿（拉力）：</h4>
          </Li>
          <Ul>
            <Li>
              前：依<a href="#公式">公式</a>決定，視情況調低。
            </Li>
            <Li>後：約20%的位置</Li>
          </Ul>
        </Ol>
      </>
    ),
  },
  {
    title: "輪胎定位",
    content: (
      <>
        <P>
          影片位置：<a href="https://youtu.be/WM7_3NGGUoQ?t=650">10:50</a>、<a href="https://youtu.be/WM7_3NGGUoQ?t=920">15:20</a>
        </P>
        <Ol type="i">
          <h4>
            <Li>外傾角：</Li>
          </h4>
          <P>決定過彎抓地力，調整至踩著油門過彎時外側車輪時接近0°。</P>
          <P>也可以從車輪溫度調整，內側過高，增加外傾角；外側過高，減少外傾角。調整至車輪溫度內側&gt;中間&gt;外側，但差異不要太大（個位數，最好5°C內）</P>
          <ZoomImage className="my-2 mx-auto image-normal" src={`${imagePath}/camber.png`} />
          <h4>
            <Li>束角：</Li>
          </h4>
          <P>影響轉向能力，束角越大，轉向角度越大，直線時越不穩定。下圖為前+後-。拉力賽容許更大的前束角。調整束角時建議以0.1為單位慢慢調整。</P>
          <ZoomImage className="my-2 mx-auto image-normal img-invert" src={`${imagePath}/toe.png`} />
          <h4>
            <Li>前後傾角（4°~6°）：</Li>
          </h4>
          <P>越高，直線時外傾角越穩定，但過彎時將增加負外傾角。在某些情況下，調到太高有可能使車輛重心過度自行回正，導致難以預測的移動。</P>
          <ZoomImage className="my-2 mx-auto image-normal img-invert" src={`${imagePath}/caster.png`} />
        </Ol>
      </>
    ),
  },
  {
    title: "輪胎定位（甩尾）",
    content: (
      <>
        <Ol type="i">
          <Li>前外傾角：-5°</Li>
          <Li>後外傾角：0°</Li>
          <Li>前束角：5°</Li>
          <Li>後束角：1.5°</Li>
          <Li>前後傾角：7°</Li>
        </Ol>
      </>
    ),
  },
  {
    title: "齒輪裝置",
    content: (
      <>
        <Ol>
          <Li>
            <a href="https://youtu.be/D6qthLir2iI?t=350">Hokihoshi</a>的調法：
          </Li>
          <P>調整尺比時需要先理解Power Band（功率帶）的觀念，即車輛產生最大動力的區間。如果在遊戲內使用英制單位，進入引擎升級，從性能圖表中可發現馬力與扭力約在5200轉時交叉，這個點即是功率帶。不過在競速中，維持高轉速非常重要，因此功率帶還要再往上升一些，大至落在6500轉左右，會隨不同車輛與改裝而有所不同。只能實際駕駛後依手感確認。</P>
          <P>調整至1檔起跑只會碰到紅區1~2次，第3次時就應該上2檔，2檔轉速與功率帶銜接。影片中正是在約6500轉時上2檔，之後每次升檔轉速都比前一檔稍微高2~300轉。</P>
          <ZoomImage className="my-2 mx-auto image-normal" src={`${imagePath}/powerBand.png`} />
          <Li>
            <a href="https://forum.gamer.com.tw/Co.php?bsn=7697&sn=18681&subbsn=7&bPage=0">halcyon1211</a>的調法：
          </Li>
          <Ol type="i">
            <Li>最終傳動比</Li>
            <P>調整終傳比讓極速出現時轉速到紅區。極速無法跑進紅區時，往加速的地方調整，直到左邊的極速發生1～2km/h的下降（這邊指的不是累積而是拉一次要下降1～2）。若轉速過早抵達紅區則相反，往極速拉，直到極速上升幅度低於1km。</P>
            <Li>最後一檔</Li>
            <P>調整方式同最終傳動比。</P>
            <Li>1檔</Li>
            <P>
              同<a href="https://youtu.be/D6qthLir2iI?t=350">Hokihoshi</a>
            </P>
            <Li>其餘檔位</Li>
            <P>
              同<a href="https://youtu.be/D6qthLir2iI?t=350">Hokihoshi</a>
            </P>
          </Ol>
        </Ol>
        <h3 className="mt-3">齒輪裝置（甩尾）</h3>
        <Ol type="i">
          <Li>
            <P>
              <b>方法1：</b>首先找到適合甩尾的動力區間，然後把3檔及之後的檔位都調整至接近這個區間。最後齒比看起來會類似下圖：
            </P>
          </Li>
          <ZoomImage className="my-2 mx-auto image-normal" src={`${imagePath}/driftGear.png`} />
          <Li>
            <P>
              <b>方法2：</b>將前四檔調整為Formula Drift系列的齒比，其餘檔位隨意，最後再視駕駛手感調整最終傳動比。
            </P>
          </Li>
          <Ul>
            <Li>1檔：1.80</Li>
            <Li>2檔：1.45</Li>
            <Li>3檔：1.16</Li>
            <Li>4檔：1.00</Li>
          </Ul>
        </Ol>
      </>
    ),
  },
  {
    title: "胎壓",
    content: (
      <>
        <Ol>
          <Li>
            <a href="https://www.youtube.com/c/HokiHoshi">HokiHoshi</a>的調法
          </Li>
          <P>
            影片位置：<a href="https://youtu.be/WM7_3NGGUoQ?t=1115">18:35</a>
          </P>
          <P>越高，轉向越靈敏。越低，起步加速越快。</P>
          <P>以暖胎後達33psi為目標，觀察輪胎溫度變化，盡量保持正常狀態以維持峰值抓地力（輪胎溫度保持保持在即將變黃之前）。</P>
          <Li>
            <a href="https://www.youtube.com/channel/UCGK33hhvffYv5hUNqB0wVnQ">Johnson Racing</a>的調法
          </Li>
          <P>
            影片位置：<a href="https://youtu.be/W4s1VP1nUoM?t=910">15:10</a>
          </P>
          <P>在fh4中，胎壓應盡可能低，因為fh4無視了低胎壓導致的各種負面影響，如耗損、溫度過高、失去抓地力。</P>
          <P>建議胎壓為15psi~23.2psi</P>
        </Ol>
      </>
    ),
  },
  {
    title: "總結",
    content: (
      <>
        <div className="row">
          {data.summarize.map((d) => (
            <div key={d.title} className="col-sm-6 p-2">
              <div className="shadow-sm w-100 h-100 p-3 rounded-2">
                <h4>{d.title}：</h4>
                <Ul>
                  {d.list.map((li) => (
                    <Li key={li}>{li}</Li>
                  ))}
                </Ul>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: "公式",
    content: (
      <>
        <Ol>
          <h4>
            <Li>防傾桿、阻尼：</Li>
          </h4>
          <P>
            <InlineCode>(最大值-最小值)×重量比+最小值</InlineCode>
          </P>
          <P>以防傾桿為例，賽車防傾桿最大值為65，最小值為1，若車輛前端重量比為45%，則：</P>
          <P>
            前防傾桿：<InlineCode>(65-1)*0.45+1=29.8</InlineCode>
          </P>
          <P>
            後防傾桿：<InlineCode>(65-1)*(1-0.45)+1=36.2</InlineCode>
          </P>
          <h4>
            <Li>彈簧：</Li>
          </h4>
          <P>
            <InlineCode>(最大值-最小值)×重量比</InlineCode>
          </P>
        </Ol>
      </>
    ),
  },
  {
    title: "計算器",
    content: (
      <>
        <P className="text-center text-bold text-warn">
          注意最大值：
          <br />
          輸入大於65將計算彈簧
          <br />
          輸入小於等於20將計算阻尼
          <br />
          其他數值將計算防傾桿
        </P>
        <Calculator />
      </>
    ),
  },
];
