import React from "react";

import Seo from "../components/SEO";
import Header from "../components/Header";
import SubpageTitle from "../components/SubpageTitle";
import Breadcrumb from "../components/breadcrumb";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const jobs = () => {
  const pagemeta = {
    title: `採用情報`,
    slug: `jobs`,
  };
  return (
    <>
      <div id="wrap">
        <Header h1title="採用情報について" />
        <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
        <Breadcrumb subtitle={pagemeta.title} />
        <Layout>
          <div className="main">
            <p>
              中央リサーチでは、私達と共にお客様の悩みの解決に尽力する人材を募集しています。
              <br />
              ご希望の方はプロフィールをお書き添えの上、下記アドレスまでお願い致します。
              <br />
              ※定員になり次第締め切らせていただきます。
            </p>
            <p className="red">
              中央リサーチ：採用担当　<a href="mailto:info@chuou.biz">info@chuou.biz</a>
            </p>
            <div id="jobs">
              <div className="pb">
                <h3 className="headline">事務相談員</h3>
                <table className="tbl">
                  <tbody>
                    <tr>
                      <th>年齢</th>
                      <td>30～50歳位迄の女性</td>
                    </tr>
                    <tr>
                      <th>資格</th>
                      <td>高卒以上、経験不問　※経験者優遇</td>
                    </tr>
                    <tr>
                      <th>就業時間</th>
                      <td>フレックス制（週４０時間労働）</td>
                    </tr>
                    <tr>
                      <th>賃金</th>
                      <td>月額200,000円～300,000円＋能力給 </td>
                    </tr>
                    <tr>
                      <th>待遇</th>
                      <td>昇給有、賞与業績で有、交通費支給、社会保険、雇用、労災保険、教育研修</td>
                    </tr>
                    <tr>
                      <th>休日</th>
                      <td>週休二日制、年末年始、お盆、ゴールデンウイーク</td>
                    </tr>
                    <tr>
                      <th>仕事の内容</th>
                      <td>
                        一般事務及び浮気・素行・家出、嫌がらせ等に関するご相談に対し電話応対や面談し、お悩みについて問診、カウンセリングし契約交付。
                      </td>
                    </tr>
                    <tr>
                      <th>勤務地</th>
                      <td>広島本社</td>
                    </tr>
                    <tr>
                      <th>特徴</th>
                      <td>
                        つらい思いをして悩んでいる方のお力になれるお仕事です。
                        <br />
                        対話が得意な方、事務経験、営業経験、接客業経験者優遇します。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pb">
                <h3 className="headline">探偵スタッフ</h3>
                <table className="tbl">
                  <tbody>
                    <tr>
                      <th>年齢</th>
                      <td>23～35歳位迄の男女</td>
                    </tr>
                    <tr>
                      <th>資格</th>
                      <td>高卒以上、普通自動車運転免許要　※自動二輪免許優遇</td>
                    </tr>
                    <tr>
                      <th>就業時間</th>
                      <td>フレックス制（週40時間労働）残業月20時間程度</td>
                    </tr>
                    <tr>
                      <th>賃金</th>
                      <td>月額200,000円～300,000円＋能力給</td>
                    </tr>
                    <tr>
                      <th>待遇</th>
                      <td>昇給有、賞与業績で有、交通費支給、出張手当、社会保険、雇用、労災保険、教育研修</td>
                    </tr>
                    <tr>
                      <th>休日</th>
                      <td>週休二日制、年末年始、お盆、ゴールデンウィーク</td>
                    </tr>
                    <tr>
                      <th>仕事の内容</th>
                      <td>
                        浮気・素行・結婚・所在調査、嫌がらせ対策等の事案に対し尾行、張り込み、聞き込み等の調査を行い報告書を作成する。
                      </td>
                    </tr>
                    <tr>
                      <th>勤務地</th>
                      <td>広島本社</td>
                    </tr>
                    <tr>
                      <th>特徴</th>
                      <td>
                        つらい思いをして悩んでいる方のお力になれるお仕事です。
                        <br />
                        機敏で臨機応変な対応ができる方が向いているお仕事と思います。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pb">
                <h3 className="headline">教育研修会について</h3>
                <p>
                  探偵業務とは探偵業法に基づく業務であり、個人のプライバシーや個人情報を扱う重要なお仕事です。
                  <br />
                  採用の際は、下記の内容に基づき教育研修を行い探偵業法や各種法令を熟知した上で適正な業務に当たっていただきます。
                </p>
                <ul className="btn cf">
                  <li>
                    <a href="/pdf/jobs01.pdf" target="_blank" rel="noopenner noreferrer">
                      教育研修規程 »
                    </a>
                  </li>
                  <li>
                    <a href="/pdf/jobs02.pdf" target="_blank" rel="noopenner noreferrer">
                      教育研修実施記録簿別表 »
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pb">
                <h3 className="headline">探偵社に必要な能力</h3>
                <p>
                  探偵に必要な能力の基本部分だけ簡単に説明したいと思います。探偵業は主に
                  <b className="red fm">尾行・張り込み・聞き込み</b>を中心に行います。
                </p>
                <br />
                <div id="choose">
                  <div className="box">
                    <h3 className="no">
                      <span>1</span>あらゆる乗り物を乗りこなせる資格と運転技術
                    </h3>
                    <div className="in">
                      <p>
                        対象者の尾行を行う場合、仮に対象者がバイク750CCで発進した場合、車では到底追いつきません、必ず
                        <b className="red">同等能力のあるバイクの運転技術</b>が必要となるのです。
                      </p>
                    </div>
                  </div>
                  <div className="box">
                    <h3 className="no">
                      <span>2</span>カメラの知識と撮影テクニック
                    </h3>
                    <div className="in">
                      <p>
                        暗い場所の撮影が中心の証拠撮りにはあらゆるカメラの撮影知識と経験が必要です。
                        <br />
                        せっかくうまく尾行できても、証拠が取れなければ全く調査した意味がないからです。
                        <br />
                        <b className="red">カメラ知識や技術のない探偵社では良い証拠は取れない</b>のです。
                      </p>
                    </div>
                  </div>
                  <div className="box">
                    <h3 className="no">
                      <span>3</span>パソコン知識と経験
                    </h3>
                    <div className="in">
                      <p>
                        探偵は報告書の作成の一部で、調査した分単位の記録をパソコンに入力したり、写真や動画を取り込む作業が必要ですのでパソコンの経験は必ず必要とされるものです。
                      </p>
                    </div>
                  </div>
                  <div className="box">
                    <h3 className="no">
                      <span>4</span>情報収集能力
                    </h3>
                    <div className="in">
                      <p>
                        現地での聞き込みを行う際は相手に警戒されてしまっては情報をうまく収集できません。
                        <br />
                        <b className="red">社交的でうまくコミュニケーションを測り目的を達成できる能力</b>
                        を必要とされます。
                      </p>
                    </div>
                  </div>
                  <div className="box">
                    <h3 className="no">
                      <span>5</span>忍耐力と集中力
                    </h3>
                    <div className="in">
                      <p>
                        対象者が外泊する場合など、長時間による張り込みを余儀なくされる職業であり、いつ出入りがあるか分からない為、集中力が必要です。調査中は休憩など現場を離れる訳にはいかず忍耐力も必要とされます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb">
                <h3 className="headline">探偵業務適正検査</h3>
                <ol>
                  <li>自動車の運転は他人より上手な方だと思う。</li>
                  <li>バイクに興味があり最低でも人並みに運転できる。</li>
                  <li>約20メートルの距離で薄暗い場所などでも対象者の顔を見る視力はある方だと思う。</li>
                  <li>人物の顔の判別は得意であり、大まかな古い写真などあれば顔を見分ける力はあると思う。</li>
                  <li>徒歩で走る事や長時間自転車に乗ることの体力には自信がある。</li>
                  <li>一箇所に長時間（8時間程度）待機する忍耐力はあると思う。</li>
                  <li>一箇所に長時間（8時間程度）見張る集中力はあると思う。</li>
                  <li>
                    写真に興味ありカメラの基本的知識（レンズの明るさ、絞り、シャッタースピード等）ある方だと思う。
                  </li>
                  <li>パソコンに興味あり（インターネット、ワード、エクセル）基本的知識はあると思う。</li>
                  <li>文章を書く事が得意な方で、報告書作成など文章力はある方だと思う。</li>
                  <li>連絡が入ると迅速な対応や、機敏な動きができる方だと思う。</li>
                  <li>お酒は普段から、あまり飲まない。</li>
                  <li>事故などなく免許の点数は充分ある。現在違反など特にない。</li>
                  <li>将棋などに似た予測する、先を読む力がある方だと思う。</li>
                  <li>自分なりにどちらかと言うと、とっさの機転が効く方だと思う。</li>
                  <li>対象者の車両ナンバーなど記憶力には自信がある方だと思う。</li>
                  <li>現状の状況から、どうしたら良いのか物事に対する判断力や理解力はある方だと思う。</li>
                  <li>労働時間帯が不規則な時間でも目的のためには対応できる。</li>
                  <li>見たことの事実を的確、正確に伝えることができる。</li>
                  <li>担当者や、責任者に報告･連絡･相談は常に心がけ実行できる。</li>
                  <li>詳細な対象者の特徴やキメ細かな情報収集も丁寧に対応できる。</li>
                  <li>一般の人と同化出来て、人より目立たない存在になれる。</li>
                  <li>聞き込みなどで知らない人とさりげなく自然に会話できる。</li>
                  <li>自分の時間を犠牲にしても相手のために時間を費やすことはできる。</li>
                </ol>
              </div>
            </div>
          </div>
        </Layout>
      </div>
      <Footer />
    </>
  );
};

const jsonN = "広島探偵 中央リサーチ",
  jsonT = "採用情報",
  jsonS = "jirei",
  jsonD = "広島の探偵社「中央リサーチ」の採用情報です。私達と共にお客様のお悩みの解決に尽力する人材を募集しています。";

const jsonLd = {
  "@context": "http://schema.org/",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `https://www.chuou.biz/${jsonS}/#website`,
      url: `https://www.chuou.biz/${jsonS}/`,
      name: `${jsonT}｜広島の探偵　浮気調査なら55年の実績｜${jsonN}`,
      description: `${jsonD}${jsonT}`,
      inLanguage: "ja",
      publisher: {
        "@id": `https://www.chuou.biz/${jsonS}/#person`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `https://www.chuou.biz/${jsonS}/#webpage`,
      url: `https://www.chuou.biz/${jsonS}/`,
      name: `${jsonN}`,
      description: `${jsonD}${jsonT}`,
      inLanguage: "ja",
      isPartOf: {
        "@id": `https://www.chuou.biz/${jsonS}/#website`,
      },
      breadcrumb: {
        "@id": `https://www.chuou.biz/${jsonS}/#breadcrumblist`,
      },
      datePublished: "2023-2-22T21:00:00+09:00",
      dateModified: "2023-2-24T19:00:00+09:00",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `https://www.chuou.biz/${jsonS}/#breadcrumblist`,
      itemListElement: [
        {
          "@type": "ListItem",
          "@id": `https://www.chuou.biz/#listItem`,
          position: 1,
          item: {
            "@type": "WebPage",
            "@id": `https://www.chuou.biz/`,
            name: `${jsonN}`,
            description:
              "当探偵社は広島に本社を構え、皆様の信頼に支えられ55年の実績を重ねてまいりました。調査・解決共経験豊富な当社にまずはお気軽にご相談ください。",
            url: `https://www.chuou.biz/`,
          },
          nextItem: `https://www.chuou.biz/${jsonS}/#listItem`,
        },
        {
          "@type": "ListItem",
          "@id": `https://www.chuou.biz/${jsonS}/#listItem`,
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": `https://www.chuou.biz/${jsonS}/`,
            name: `${jsonT}｜${jsonN}`,
            description: `${jsonD}`,
            url: `https://www.chuou.biz/${jsonS}/`,
          },
          previousItem: `https://www.chuou.biz/#listItem`,
        },
      ],
    },
  ],
};

export const Head = () => (
  <>
    <Seo
      title="採用情報"
      description="広島の探偵社「中央リサーチ」の採用情報です。私達と共にお客様のお悩みの解決に尽力する人材を募集しています。"
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
);
export default jobs;
