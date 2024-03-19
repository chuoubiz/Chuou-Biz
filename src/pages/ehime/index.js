import React from 'react';
import { Link } from 'gatsby';

import Seo from '../../components/SEO';
import HeaderEhime from '../../components/HeaderEhime';
import FooterEhime from '../../components/FooterEhime';
import { StaticImage } from 'gatsby-plugin-image';

const index = () => {
  return (
    <>
      <div id='wrap'>
        <HeaderEhime h1title='愛媛の探偵｜浮気調査は55年の実績と信頼｜総合探偵社中央リサーチ愛媛' pagetitle='松山市民病院前にある探偵事務所' />

        <div id='img_top_msg' className='bg_blue_grad'>
          <p className='mp nm'>内閣総理大臣認可 全国調査業協同組合組合員</p>
          <p className='txt nm'>
            当探偵事務所は厳重な審査を経て
            <a href='http://www.ncia-research.or.jp/' rel='nofollow noopener noreferrer' target='_blank'>
              全国調査業協同組合
            </a>
            に加盟しております。
            <br />
            広告は新聞・看板や
            <a href='https://itp.ne.jp/info/341545111182370410/' rel='nofollow noopener noreferrer' target='_blank'>
              NTT iタウンページ (探偵欄){' '}
            </a>
            にも掲載中！
          </p>
        </div>
        <section id='container' className='cf'>
          <div id='page_title'>
            <div className='dsp_hpt'>
              <StaticImage src='../../img/top/title.webp' alt='総合探偵社中央リサーチ' />
            </div>
            <div className='dsp_smt'>
              <StaticImage src='../../img/top/title_sp.webp' alt='総合探偵社中央リサーチ' />
            </div>
          </div>
          <div id='img_bottom_msg'>
            <p className='nm cen thin'>
              ※弊社では探偵経験10年以上のスタッフが卓越した調査力で、
              <br className='dsp_tbs' />
              ご安心、ご納得できるサービスを提供します。
            </p>
          </div>
          <p id='top_comment' className='dsp_smt'>
            <Link to='#top_profile'>
              弁護士事務所から推奨されている
              <br />
              探偵社です！ »
            </Link>
          </p>

          <div className='main'>
            <div id='top_menu' className='bg_wide pt pb ehime'>
              <div className='top_success_img'>
                <StaticImage src='../../img/success_txt01.webp' alt='調査成功率98.8%' />
              </div>

              <div className='head'>
                <p className='maru'>
                  <span className='in serif'>
                    <span className='fs'>探偵実績</span>
                    <br />
                    55<span className='fs'>年</span>
                  </span>
                </p>
                <div className='cb'>
                  <h2>
                    地元愛媛で、
                    <br className='dsp_smt' />
                    調査力No.1を誇る探偵社です｡
                  </h2>
                  <div className='cen dsp_hpt'>
                    <p className='comment'>
                      <Link to='#top_profile'>弁護士事務所から推奨されている探偵社です！ »</Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className='top_price_txt smp'>
              <StaticImage src='../../img/plan_txt01_smp.webp' alt='結果保証プラン有り結果が出なければ0円証拠が取れなければ料金はいただきません' />
              </div>

              <dl className='mp ehime_top'>
                <dt>総合探偵社中央リサーチ愛媛が最も得意とするのは浮気調査です。</dt>
                <dd>
                  経験豊富な探偵調査員があなたの悩みを全力で解決いたします！
                  <br />
                  当社は｢浮気調査が最も得意｣な探偵社であり、裁判証拠収集・動かぬ証拠なら、お任せください!!
                </dd>
              </dl>
            </div>
            <div id='about'>
              <div id='ehime_about' className='main bg_wide pt pb'>
                <h3 className='ttl'>調査項目</h3>
                <div className='box_flex'>
                  <dl id='uwaki'>
                    <dt>
                      <img src='../../img/ehime/about/img01.jpg' alt='' />
                      <b className='mp'>浮気・不倫調査</b>
                    </dt>
                    <dd>浮気や不倫などの事実関係を確認する為、対象者に気づかれることなく尾行・張り込みを行い、その真実を分単位で記録し、同時に証拠（映像）を撮る調査です。</dd>
                  </dl>
                  <dl id='sokou'>
                    <dt>
                      <img src='../../img/ehime/about/img02.jpg' alt='' />
                      <b className='mp'>素行調査</b>
                    </dt>
                    <dd>対象者の素行面（生活実態）の調査をいたします。問題のある家族や従業員の素行調査を行う事でスムーズに問題解決できます ｡</dd>
                  </dl>
                  <dl id='saiban'>
                    <dt>
                      <img src='../../img/ehime/about/img03.jpg' alt='' />
                      <b className='mp'>裁判証拠収集</b>
                    </dt>
                    <dd>裁判を有利にする為に、動かぬ証拠を集めて真実を明らかにするお手伝いをいたします。</dd>
                  </dl>
                  <dl id='kekkon'>
                    <dt>
                      <img src='../../img/ehime/about/img04.jpg' alt='' />
                      <b className='mp'>結婚・身上調査</b>
                    </dt>
                    <dd>ご家族が交際中のお相手と結婚前提にお付き合いしている場合や急に結婚の話が浮上した時など、交際相手の生活実態や交際相手の家族の信用面などを側面から調査いたします。</dd>
                  </dl>
                  <dl id='iede'>
                    <dt>
                      <img src='../../img/ehime/about/img05.jpg' alt='' />
                      <b className='mp'>家出・所在調査</b>
                    </dt>
                    <dd>ご家族の誰かが急に家出をしてしまった事による家出人調査から、お世話になった方の引っ越し先や転勤による所在調査まで行います。当探偵社の発見率は約92％です。</dd>
                  </dl>
                  <dl id='stalker'>
                    <dt>
                      <img src='../../img/ehime/about/img06.jpg' alt='' />
                      <b className='mp'>嫌がらせ・ストーカー対策</b>
                    </dt>
                    <dd>嫌がらせや、いじめ、誹謗中傷、ストーカー行為、つきまとい行為など、事実確認し証拠をとります。</dd>
                  </dl>
                  <dl id='touchouki'>
                    <dt>
                      <img src='../../img/ehime/about/img07.jpg' alt='' />
                      <b className='mp'>盗聴器発見調査</b>
                    </dt>
                    <dd>ネット、スマホの普及により誰でも簡単に盗聴器、盗撮器を入手することができる時代となりました。プライバシーや仕事などの情報が漏洩する可能性がありますので、不審と思われた時は盗聴器発見の調査を相談ください。</dd>
                  </dl>
                  <dl id='kagaku'>
                    <dt>
                      <img src='../../img/ehime/about/img08.jpg' alt='' />
                      <b className='mp'>科学的調査</b>
                    </dt>
                    <dd>指紋・筆跡・声紋などを詳しく鑑定し不審者の割り出しを行います。事実関係を立証する上で裁判証拠としても活用できます。</dd>
                  </dl>
                </div>
                <p className='link nm'>
                  <Link to='/ehime/jirei/'>調査事例はこちら</Link>
                </p>
              </div>
            </div>
            <div id='ehime_promise' className='bg_wide pt'>
              <h3 className='mp'>お客様との６つの約束</h3>
              <div className='box_flex bg_wide'>
                <dl>
                  <dt>
                    <img src='../../img/ehime/img_promise01.jpg' alt='' />
                    <b className='mp'>完全秘密厳守</b>
                  </dt>
                  <dd>ご依頼頂く業務内容がご依頼者様以外に漏えいする事はございません。対象者にも気付かれることなく、探偵業務を行い、報告書をお渡し後は資料をすべてシュレッダーにて破棄いたします。</dd>
                </dl>
                <dl>
                  <dt>
                    <img src='../../img/ehime/img_promise02.jpg' alt='' />
                    <b className='mp'>適正な料金設定</b>
                  </dt>
                  <dd>無駄な経費を控え、労働の対価からどうしても必要とされる経費のみで対応可能。探偵業務内容に応じ適正な料金でご依頼に応じます。</dd>
                </dl>
                <dl>
                  <dt>
                    <img src='../../img/ehime/img_promise03.jpg' alt='' />
                    <b className='mp'>安心の契約書</b>
                  </dt>
                  <dd>探偵業法など各種法令を遵守し健全な業務を徹底しております。安心してご依頼いただけるよう、契約内容を最初に解りやすくご説明いたします。</dd>
                </dl>
                <dl>
                  <dt>
                    <img src='../../img/ehime/img_promise04.jpg' alt='' />
                    <b className='mp'>弁護士との連携</b>
                  </dt>
                  <dd>
                    全国約３００名弁護士や警察OBとも連携し問題解決までスムーズに進める事が可能です。
                    <br />
                    些細なお悩みでも安心してご相談ください。
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <img src='../../img/ehime/img_promise05.jpg' alt='' />
                    <b className='mp'>確実な調査</b>
                  </dt>
                  <dd>経験豊富な探偵が探偵業法・各種法令を順守し無駄のない確実な調査を行います。優秀な人材に恵まれている当探偵社が必ずお客様のお力になります。</dd>
                </dl>
                <dl>
                  <dt>
                    <img src='../../img/ehime/img_promise06.jpg' alt='' />
                    <b className='mp'>アフターケア</b>
                  </dt>
                  <dd>探偵業務終了後、報告書を基に最良の解決法などをアドバイス致します。必要に応じて各事案の得意な弁護士事務所などを無料でご紹介いたします。</dd>
                </dl>
              </div>
            </div>
            <div id='ehime_reason' className='bg_wide pt pb'>
              <h3 className='mp'>
                裁判を有利にする
                <br className='dsp_smt' />
                浮気調査とは？
              </h3>
              <div className='in'>
                <p className='img_rit'>
                  <img src='../../img/ehime/img_reason.jpg' alt='' />
                </p>
                <p>
                  浮気の証拠とは一般的にメールのやりとりなども証拠と思われがちですが、男女が
                  <b className='blue2'>電話やメ－ルで会話しただけでは浮気とは断定されにくい</b>
                  のです。
                  <br />
                  なぜなら男女が会話してはいけないと言う法律などないからです。
                  <br />
                  仲の良い事を表すものであっても、相手が友達程度の関係であると言い訳する場合も多くございます。
                  <br />
                  浮気の証拠で裁判を有利に進める為には、不貞の証拠です。具体的には
                  <b className='blue2'>二人の「性的関係」の立証が不可欠</b>
                  なのです。
                  <br />
                  対象者が浮気相手とラブホテルを出入りする記録と写真（動画）などが必要であり、一緒に食事行く程度では不貞行為とは認められません。
                  <br />
                  裁判で有利になるには動かぬ不貞の証拠が最も重要視されます。それは
                  <b className='red'>裁判所が認めることのできる内容や、わかりやすい写真や映像の証拠</b>
                  でなくてはならないのです。
                </p>
              </div>
            </div>
            <div id='ehime_button'>
              <p className='link mp pt pb'>
                <Link to='/ehime/voice/'>お客様の声はこちら</Link>
              </p>
            </div>
            <div id='top_plan' className='bg_wide pb'>
              <h3 className='mp'>浮気調査安心プラン</h3>
              <div className='box'>
                <dl className='head'>
                  <dt className='mp'>
                    <div className='top_point_title'>必要なところにピンポイント調査</div>
                  </dt>
                  <dd>
                    <p className='nm'>お客様に合った無駄のないプランを提案し、動かぬ証拠を取ります。</p>
                  </dd>
                </dl>
                <div className='wrap'>
                  <dl className='plan w2'>
                    <dt className='mp'>浮気調査(行動調査)基本料金</dt>
                    <dd>
                      <span className='red_waku mp'>調査員1名毎</span>
                      <span className='fs_smt'>行動調査1時間毎の基本料金</span>
                      <br className='dsp_tbs' />
                      <span className='price red'>
                        5,000<span className='fs'>円</span>
                      </span>
                      <span className='komi'>税込 5,500円</span>
                    </dd>
                  </dl>
                  <dl className='plan w2'>
                    <dt className='mp'>1時間毎 基本料金</dt>
                    <dd>
                      <span className='red_waku mp'>調査員2名</span>
                      <span className='fs_smt'>行動調査1時間毎の基本料金</span>
                      <br className='dsp_tbs' />
                      <span className='price red'>
                        10,000<span className='fs'>円</span>
                      </span>
                      <span className='komi'>税込 11,000円</span>
                    </dd>
                  </dl>
                  <dl className='plan w3'>
                    <dt className='mp'>20時間プラン</dt>
                    <dd>
                      <p>
                        19万円<span className='fs'>（税込 209,000円）</span>
                        、調査員2名体制
                        <span className='fs'>（20時間を数日間にわけて調査致します）</span>
                      </p>
                      <p className='red attention'>※浮気調査の成功率98.8%実績</p>
                    </dd>
                  </dl>
                  <dl className='plan w3'>
                    <dt className='mp'>30時間プラン</dt>
                    <dd>
                      <p>
                        28万円<span className='fs'>（税込 308,000円）</span>
                        、調査員2名体制
                        <span className='fs'>（30時間を数日間にわけて調査致します）</span>
                      </p>
                      <p className='red attention'>※浮気調査の成功率99.3%実績</p>
                    </dd>
                  </dl>
                  <dl className='plan w3'>
                    <dt className='mp'>成功報酬プラン</dt>
                    <dd>
                      <p>結果が出なければ調査料0円</p>
                      <p className='red attention'>※不貞の証拠取得時に適応</p>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className='box price_box'>
                <dl className='head'>
                  <dt className='mp w2'>
                    <div className='top_price_title'>
                      <span className='smt_red'>追加料金不要</span>で任せて安心
                      <br />
                      <span className='smt_fs'>（深夜料金一切不要で安心）</span>
                      <br />
                      <span className='credit'>※お支払いはクレジットも利用可能</span>
                    </div>
                  </dt>
                  <dd>
                    <p className='icon'>
                      <img src='../img/top/pay00.png' width={49} height={37} loading='lazy' alt='' />
                      <img src='../img/top/pay01.png' width={50} height={35} loading='lazy' alt='' />
                      <img src='../img/top/pay02.png' width={85} height={26} loading='lazy' alt='' />
                      <img src='../img/top/pay03.png' width={59} height={35} loading='lazy' alt='' />
                      <img src='../img/top/pay04.png' width={124} height={32} loading='lazy' alt='' />
                    </p>
                    <p className='dsp_smt fs'>
                      <span className='fs'>※お支払いはクレジットも利用可能</span>
                    </p>
                    <p className='link mp'>
                      <Link to='/price/'>料金の詳細はこちら</Link>
                    </p>
                  </dd>
                </dl>
              </div>
            </div>
            <div id='ehime_point' className='bg_wide pt'>
              <h3>
                毎日気になって夜も眠れない日々、
                <br className='dsp_hpt' />
                このままでは、ご自分が健康を害してしまいます。
                <br />
                問題解決に向けて今･･･一歩前進する勇気を持ってください！
              </h3>
              <div className='in'>
                <p className='cen_pc nm'>
                  <b className='fm'>証拠は問題解決への第一歩です。</b>
                  <br />
                  相手と話し合いを行うための材料として、また浮気相手に内容証明を送る場合にも、
                  <br />
                  何より裁判などの紛争で有利な立場に立つためにも、確かな効力を発揮します。
                  <br />
                  証拠能力とは客観的に判断されるもので、ご自分が思うものが正しいとは限りません。
                  <br />
                  プロの探偵が的確・適正に調査を進め、裁判などでしっかりと立証できる動かぬ証拠を収集いたします。
                </p>
              </div>
            </div>
            <div id='top_evidence'>
              <div className='sample pb'>
                <h3 className='line mp'>報告書写真サンプル</h3>
                <div className='wrap'>
                  <dl className='w2'>
                    <dt>遠くから確実に証拠を押さえます。</dt>
                    <dd>
                      <p className='arrow'>
                        <img src='../../img/top/sample01.jpg' loading='lazy' alt='' />
                      </p>
                      <p>
                        <img src='../../img/top/sample02.jpg' alt='' />
                      </p>
                    </dd>
                  </dl>
                  <dl className='w2'>
                    <dt>決定的な証拠も確実に撮影</dt>
                    <dd>
                      <p className='arrow'>
                        <img src='../../img/top/sample03.jpg' loading='lazy' alt='' />
                        <span>2019/6/25/19:09</span>
                      </p>
                      <p>
                        <img src='../../img/top/sample04.jpg' alt='' />
                        <span>2019/6/25/21:11</span>
                      </p>
                    </dd>
                  </dl>
                </div>
                <p className='cen'>
                  <img src='../../img/ehime/sample08.png' alt='' className />
                </p>
                <p className='link mp'>
                  <Link to='/sample/'>調査報告書サンプルはコチラ</Link>
                </p>
              </div>
            </div>
            <div id='top_profile'>
              <h3 className='mp bg_wide ehime'>
                <img src='../../img/top/medal_big.png' alt='' width={53} height={53} loading='lazy' />
                <span>弁護士事務所からの推奨コメント</span>
              </h3>
              <div className='bg bg_wide pb'>
                <dl>
                  <dt>
                    <img src='../../img/ehime/profile_name01.png' alt='' />
                  </dt>
                  <dd>
                    <img src='../../img/ehime/profile_txt01.png' alt='' className='dsp_hpt' />
                    <img src='../../img/ehime/profile_txt01_sp.png' alt='' className='dsp_smt' />
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <img src='../../img/ehime/profile_name02.png' alt='' />
                  </dt>
                  <dd>
                    <img src='../../img/ehime/profile_txt02.png' alt='' className='dsp_hpt' />
                    <img src='../../img/ehime/profile_txt02_sp.png' alt='' className='dsp_smt' />
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <img src='../../img/ehime/profile_name03.png' alt='' />
                  </dt>
                  <dd>
                    <img src='../../img/ehime/profile_txt03.png' alt='' className='dsp_hpt' />
                    <img src='../../img/ehime/profile_txt03_sp.png' alt='' className='dsp_smt' />
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <img src='../../img/ehime/profile_name04.png' alt='' />
                    <span className='label very'>
                      <a href='https://rikon.vbest.jp/' target='_blank' rel='nofollow noopener noreferrer'>
                        <img src='../../img/top/bery_best_btn.png' alt='ベリーベスト法律事務所' loading='lazy' />
                      </a>
                    </span>
                  </dt>
                  <dd>
                    <img src='../../img/ehime/profile_txt04.png' alt='' className='dsp_hpt' />
                    <img src='../../img/ehime/profile_txt04_sp.png' alt='' className='dsp_smt' />
                  </dd>
                </dl>
              </div>
            </div>
            <div id='top_faq' className='pt pb'>
              <h3 className='mp'>よくある質問</h3>
              <div className='list'>
                <dl>
                  <dt>
                    <span>Q</span>
                    浮気の動かぬ証拠を撮ることで浮気相手から慰謝料は取れるのでしょうか？
                  </dt>
                  <dd>
                    <span>A</span>
                    夫（妻）の浮気相手は妻（夫）に精神的苦痛を与えていることの事実が証明できる事で、弁護士や司法書士などが内容証明という形で慰謝料を請求する事が一般的です。
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span>Q</span>
                    浮気が原因で離婚に至ってしまう場合、慰謝料は高額になるのでしょうか？
                  </dt>
                  <dd>
                    <span>A</span>
                    当然不貞行為の末、家庭を壊してしまう場合、慰謝料の金額は高額になると思われます。その慰謝料の金額は夫（妻）の収入にも関係し算定されます。
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span>Q</span>
                    夫婦間の修復を目的に調査する事は可能でしょうか？
                  </dt>
                  <dd>
                    <span>A</span>
                    当探偵社では夫婦間を修復される手助けをさせていただいております。浮気が原因で離婚の話が出ている場合など、まずは浮気相手と別れてもらうための合法的な対策など修復に向けて解決に至るまで完全サポート致します。
                  </dd>
                </dl>
              </div>
            </div>
            <div id='top_corona' className='bg_wide pt pb'>
              <h3 className='mp cen'>
                <span>
                  中央リサーチ愛媛は
                  <br className='dsp_smt' />
                  コロナ対策を実施しています。
                </span>
              </h3>
              <p className='b'>中央リサーチ愛媛ではお客様の健康と安全を守るために以下の感染予防対策を実施しています。</p>
              <div className='wrap'>
                <dl>
                  <dt>アルコール消毒液の設置</dt>
                  <dd>
                    <p className='ico nm'>
                      <img src='../../img/top/corona01.png' loading='lazy' alt='アルコール消毒液の設置' />
                    </p>
                    <p className='txt thin nm'>入口に消毒液を設置しておりますので手指の除菌にご協力お願いします。</p>
                  </dd>
                </dl>
                <dl>
                  <dt>スタッフのマスク着用</dt>
                  <dd>
                    <p className='ico nm'>
                      <img src='../../img/top/corona02.png' loading='lazy' alt='スタッフのマスク着用' />
                    </p>
                    <p className='txt thin nm'>全スタッフのマスクの着用を徹底しております。</p>
                  </dd>
                </dl>
                <dl>
                  <dt>スタッフの検温の確認</dt>
                  <dd>
                    <p className='ico nm'>
                      <img src='../../img/top/corona03.png' loading='lazy' alt='スタッフの検温の確認' />
                    </p>
                    <p className='txt thin nm'>毎日出勤時に全スタッフの検温を実施して発熱の確認をしています。</p>
                  </dd>
                </dl>
              </div>
            </div>
            <div id='top_about' className='bg_wide pt pb'>
              <div className='bg'>
                <h3 className='cen'>
                  <span>
                    <img src='../../img/top/txt.png' alt='総合探偵社 中央リサーチ' />
                  </span>
                </h3>
                <p className='earth'>
                  <span className='maru'>
                    <img src='../../img/top/earth.png' alt='' />
                    <span className='txt'>
                      全国対応
                      <br />
                      海外もOK!
                    </span>
                  </span>
                </p>
                <p className='mp cen msg'>
                  つらい思いをされている方が
                  <br className='dsp_tbs' />
                  一日も早く笑顔を取り戻す為に・・・。
                  <br />
                  弊社スタッフは一丸となり
                  <br className='dsp_smt' />
                  「人助け」の思いで、
                  <br className='dsp_tbs' />
                  日夜探偵業務に取り組んでおります。
                </p>
                <div className='wrap'>
                  <dl>
                    <dt>愛媛相談室</dt>
                    <dd>
                      <Link to='/ehime/'>総合探偵社中央リサーチ愛媛</Link>
                      <br />
                      愛媛県松山市三番町7-7-1 村上ビル2階
                      <br />
                      （松山市民病院徒歩2分）
                      <br />
                      TEL：089-931-3800(代)
                    </dd>
                  </dl>
                  <dl>
                    <dt>広島相談室</dt>
                    <dd>
                      <Link to='/'>総合探偵社中央リサーチ広島</Link>
                      <br />
                      広島県広島市中区上幟町2-45 今田ビル2F
                      <br className='dsp_hp' />
                      (家庭裁判所前 白島線電車道り沿い)
                      <br />
                      TEL：082-211-1600(代)
                    </dd>
                  </dl>
                  <dl>
                    <dt>山口相談室</dt>
                    <dd>
                      <Link to='/yamaguchi/'>総合探偵社中央リサーチ山口</Link>
                      <br />
                      山口県周南市平和通2丁目31 三真樹ビル2階
                      <br />
                      （徳山駅徒歩3分）
                      <br />
                      TEL：0834-22-7513(代)
                    </dd>
                  </dl>
                  <dl>
                    <dt>岡山相談室</dt>
                    <dd>
                      <Link to='/okayama/'>総合探偵社中央リサーチ岡山</Link>
                      <br />
                      岡山県岡山市北区富田町1丁目1-1
                      <br />
                      富士野ビル2階
                      <br />
                      TEL：086-231-6661(代)
                    </dd>
                  </dl>
                  <dl>
                    <dt>島根相談室</dt>
                    <dd>
                      <Link to='/shimane/'>総合探偵社中央リサーチ島根</Link>
                      <br />
                      島根県松江市津田町305番 ツダマチビル1階
                      <br />
                      （松江駅徒歩5分）
                      <br />
                      TEL：0852-67-6573(代)
                    </dd>
                  </dl>
                  <dl>
                    <dt>広島本社</dt>
                    <dd>
                      広島県広島市中区上幟町2-45 今田ビル2F
                      <br className='dsp_hp' />
                      (家庭裁判所前 白島線電車道り沿い)
                      <br />
                      TEL：082-211-1600(代)
                      <br />
                      FAX：082-211-1688
                    </dd>
                  </dl>
                </div>
                <ul className='wrap'>
                  <a href='https://www.ncia-research.or.jp/' target='_blank' rel='noopener noreferrer'>
                    <li>
                      内閣総理大臣認可
                      <br />
                      全国調査業協同組合組合員
                      <br />
                      第3266号
                    </li>
                  </a>
                  <li>
                    愛媛県公安委員会
                    <br />
                    探偵業届出証明書番号
                    <br />
                    第82120013号
                  </li>
                  <li>
                    商標登録証
                    <br />
                    第6531358号
                  </li>
                </ul>
              </div>
            </div>
            <div id='top_hiroshima' className='bg_wide pb ehime'>
              <h3 className='mp'>愛媛相談室案内</h3>
              <div className='wrap'>
                <div className='img'>
                  <p>
                    <img src='../../img/ehime/img_yamaguchi.jpg' alt='' />
                    <br />
                    プライバシーを守る相談室
                  </p>
                </div>
                <p className='map'>
                  <a href='https://goo.gl/maps/nxYTXpNztSZBhBYj6' rel='nofollow noopener noreferrer' target='_blank'>
                    <img src='../../img/ehime/map.png' loading='lazy' alt='' />
                  </a>
                </p>
              </div>
              <div className='photo'>
                <h3 className='mp'>当社の看板</h3>
                <ul className='ehime_kanban'>
                  <li>
                    <img src='../../img/ehime/img_signboard01.png' alt='' />
                  </li>
                </ul>
              </div>
            </div>
            <div id='top_koukoku' className='pt pb'>
              <div className='box_flex mb'>
                <div className='line'>
                  <div className='in'>
                    <p>
                      <img src='../../img/ehime/logo_line.png' alt='' />
                    </p>
                    <p className='b'>
                      LINEからお問い合わせ
                      <br className='dsp_smt' />
                      できます！
                    </p>
                    <p>
                      QRコードから
                      <a href='https://line.me/R/ti/p/65gpK3qcDs' target='_blank' rel='noopener noreferrer'>
                        「友だち登録」
                      </a>
                      すると、LINEでお問い合わせができます。
                    </p>
                  </div>
                  <p className='qr'>
                    <img src='../../img/ehime/qr_line.png' alt='' />
                  </p>
                </div>
                <dl className='card'>
                  <dt>お支払いはクレジットでもご利用できます</dt>
                  <dd>
                    <p>
                      <img src='../../img/ehime/img_card01.png' alt='' />
                    </p>
                    <p>
                      <img src='../../img/ehime/img_card02.png' alt='' />
                    </p>
                  </dd>
                </dl>
              </div>
              <div className='list mb'>
                <dl>
                  <dt className='mp'>誇大広告にはご注意ください！</dt>
                  <dd className='b'>探偵案内所、探偵ランキングなど作為的に掲載し、一部の業者だけあっせん・誘導する根拠のない嘘の誇大広告にはご注意ください。</dd>
                </dl>
              </div>
              <ul>
                <li>
                  <a href='http://www.ncia-research.or.jp/' rel='nofollow noopener noreferrer' target='_blank'>
                    <img src='../../img/ehime/bana01.png' alt='全国調査業協同組合' />
                  </a>
                </li>
                <li>
                  <a href='https://www.police.pref.ehime.jp/' rel='nofollow noopener noreferrer' target='_blank'>
                    <img src='../../img/ehime/logo_ehimepolice.jpg' alt='愛媛県警察' />
                  </a>
                </li>
                <li>
                  <a href='https://rikon.vbest.jp/' rel='nofollow noopener noreferrer' target='_blank'>
                    <img src='../../img/ehime/bana03.png' alt='ベリーベスト法律事務所' />
                  </a>
                </li>
                <li>
                  <a href='https://best-legal.jp/want-to-claim-affair-alimony-3366' rel='nofollow noopener noreferrer' target='_blank'>
                    <img src='../../img/ehime/bana04.png' alt='不倫・浮気の慰謝料請求ならベリーベスト法律事務所' />
                  </a>
                </li>
              </ul>
            </div>
            <div id='top_area' className='bg_wide pt pb'>
              <h3 className='mp'>
                <b className='fm'>全国対応</b>いたします
                <b className='ok'>海外もOK!</b>
              </h3>
              <div className='box'>
                <h4 className='mp'>愛媛対応可能エリア</h4>
                <div className='wrap'>
                  <ul>
                    <li>新居浜市</li>
                    <li>四国中央市</li>
                    <li>西条市</li>
                    <li>今治市</li>
                    <li>松山市</li>
                    <li>伊予市</li>
                  </ul>
                  <ul>
                    <li>東温市</li>
                    <li>宇和島市</li>
                    <li>八幡浜市</li>
                    <li>大洲市</li>
                    <li>西予市</li>
                  </ul>
                  <ul>
                    <li>越智郡</li>
                    <li>上浮穴郡</li>
                    <li>伊予郡</li>
                    <li>喜多郡</li>
                    <li>西宇和郡</li>
                    <li>北宇和郡</li>
                    <li>南宇和郡</li>
                  </ul>
                </div>
                <p className='blue nm'>
                  全国主要都市のネットワークで安心の調査をお約束いたします。
                  <br />
                  海外の調査も承ります。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooterEhime />
    </>
  );
};

const jsonN = '総合探偵社中央リサーチ愛媛',
  jsonS = 'ehime',
  jsonD = '探偵で愛媛の調査なら｢浮気調査、不倫調査」を最も得意とする総合探偵社中央リサーチ愛媛が高いスキルで浮気の証拠をとり早期解決に導きます。分かりやすい料金表でお見積り、ご相談無料です。所在地　愛媛県松山市三番町７－７－１村上ビル2階（松山市民病院から徒歩２分）愛媛県公安委員会届け出済み';

const jsonLd = {
  '@context': 'http://schema.org/',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: '総合探偵社中央リサーチ愛媛',
      description: `${jsonD}`,
      url: `https://www.chuou.biz/${jsonS}/`,
      logo: 'https://www.chuou.biz/img/title.png',
      image: ['https://www.chuou.biz/img/top/title_sp.jpg'],
      telephone: '089-931-3800',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '愛媛県松山市三番町７－７－１村上ビル2階',
        addressLocality: '松山市',
        postalCode: '790-0003',
        addressRegion: '愛媛県',
        addressCountry: '日本',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 33.83876,
        longitude: 132.7532774,
      },
      priceRange: 'お問い合わせください',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '24:00',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `https://www.chuou.biz/${jsonS}/#website`,
      url: `https://www.chuou.biz/${jsonS}/`,
      name: `${jsonN}`,
      description: `${jsonD}`,
      inLanguage: 'ja',
      publisher: {
        '@id': `https://www.chuou.biz/${jsonS}/#person`,
      },
    },
    {
      '@type': 'WebPage',
      '@id': `https://www.chuou.biz/${jsonS}/#webpage`,
      url: `https://www.chuou.biz/${jsonS}/`,
      name: `${jsonN}`,
      description: `${jsonD}`,
      inLanguage: 'ja',
      isPartOf: {
        '@id': `https://www.chuou.biz/${jsonS}/#website`,
      },
      breadcrumb: {
        '@id': `https://www.chuou.biz/${jsonS}/#breadcrumblist`,
      },
      datePublished: '2023-2-22T21:00:00+09:00',
      dateModified: '2023-3-03T04:00:00+09:00',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `https://www.chuou.biz/${jsonS}/#breadcrumblist`,
      itemListElement: [
        {
          '@type': 'ListItem',
          '@id': `https://www.chuou.biz/${jsonS}/#listItem`,
          position: 1,
          item: {
            '@type': 'WebPage',
            '@id': `https://www.chuou.biz/${jsonS}/`,
            name: `${jsonN}`,
            description: `${jsonD}`,
            url: `https://www.chuou.biz/${jsonS}/`,
          },
          nextItem: `https://www.chuou.biz/${jsonS}/#listItem`,
        },
      ],
    },
  ],
};

export const Head = () => (
  <>
    <Seo title2='愛媛の探偵｜浮気調査は55年の実績と信頼｜総合探偵社中央リサーチ愛媛' description='探偵で愛媛の調査なら｢浮気調査、不倫調査」を最も得意とする総合探偵社中央リサーチ愛媛が高いスキルで浮気の証拠をとり早期解決に導きます。分かりやすい料金表でお見積り、ご相談無料です。所在地　愛媛県松山市三番町７－７－１村上ビル2階（松山市民病院から徒歩２分）愛媛県公安委員会届け出済み' keyword='探偵,愛媛,興信所,浮気調査,中央リサーチ愛媛' />
    <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
  </>
);
export default index;
