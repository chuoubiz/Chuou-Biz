import React from 'react'

import Seo from '../components/SEO'
import Header from '../components/Header'
import SubpageTitle from '../components/SubpageTitle'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const jirei = () => {
    const pagemeta = {
        title:`事例紹介`,
        slug:jsonS
    }
    return (
        <>
        
            <div id="wrap">
            <Header h1title="調査事例について" />
            <SubpageTitle subtitle={pagemeta.title} id={pagemeta.slug} />
            <Breadcrumb subtitle={pagemeta.title} />
                <Layout>
                    <div id={pagemeta.slug} className="main">
                        <div className="pb">

                            <h3 className="headline mp">当探偵社へのご相談事例</h3>

                            <div className="cmn_example">
                                
                                <input id="jirei-check1" className="jirei-check1" type="checkbox" checked />                                
                                <label className="jirei-label" htmlFor="jirei-check1">
                                    <div className='jirei-icon'>事例<span>1</span></div>
                                    夫の携帯を見たら浮気相手と思われる女性とのメールを見ました｡<br />話し合う為にも動かぬ証拠と浮気相手がどんな人物か知りたい。
                                </label>
                                
                                <div className='jirei-content'>
                                    <div className="dd_tab">
                                        <dl>
                                        <dt>夫の携帯を見たら浮気相手と思われる女性とのメールを見ました。話し合う為にも動かぬ証拠と浮気相手がどんな人物か知りたい。</dt>
                                        <dd>
                                            <div className="box_gray">
                                            依頼者：妻/30代/広島在住<br />
                                            対象者：夫/30代後半/広島のメーカー会社勤務
                                            </div>
                                            <div className="box_irai">
                                            <h4>依頼内容</h4>
                                            <p>今まで夫は毎日同じ帰宅時間の6時半頃に帰ってきていたのですが、最近は週に2回ぐらい残業で真夜中に帰ってくることが多くなりました。初めは信じていましたが、朝方に帰ってくる日もあり、さすがにおかしいな...と思い始めました。ある日夫がお風呂に入っていると、夫のスマホに連続して通知が鳴るのです。10回ぐらい連続して通知音がなったので、画面を覗いてみるとハートマークで「明日楽しみにしてるね！亅とのメッセージを見てしまいました。最近、記憶にないクレジットカードの請求書もあり、「これは浮気相手がいるな。亅と確信しました。生活費も余裕はないので浮気などせずに家族を最優先にして真面目になって欲しいのです。これは夫と真剣に話し合いをしなければならないと思い、私は浮気の証拠を獲得することに決めました。子供がまだ小学生なので夫が浮気をしていても離婚はしないつもりです。</p>
                                            <p>どんな浮気相手なのかこの目で見てみたい、という思いはありましたが、自分で尾行して証拠写真を撮るのはリスクが高いと知ってやめました。広島で浮気調査に定評のある会社を探していたところ、中央リサーチさんを知りました。探偵に相談するのは初めてでしたが、電話での対応から親切だったので安心して話を聞いてもらえました。</p>
                                            <div className="box_kekka">
                                                <h5>依頼(調査)結果</h5>
                                                <p className="txt">中央リサーチさんのカウンセリング中に夫の行動を思い出すと怒りと悲しみで震えてしまいましたが、そっと心に寄り添ってくれて、ストレスが軽くなったのを覚えています。夫が残業と言って帰りが遅くなる曜日や給料日の後など、浮気相手と密会している日を予測していただきました。</p>
                                                <p className="txt">浮気調査ではドンピシャで密会の日と浮気相手女性の自宅マンション、鮮明な証拠写真が撮れていて驚きました。スタッフさんと話している間にだんだんと怒りも収まって、夫と冷静に話し合いをする準備ができました。</p>
                                                <p className="txt">休みの日に夫とゆっくり話し合った時に証拠写真を見せると非常に動揺していました。明らかに浮気相手の女性マンションから出入りする写真がはっきり写っているので言い逃れはできなかったのです。夫は「事実だ。悲しい思いをさせてごめん。」と謝罪しました。もう二度と浮気はしないと約束して夫婦関係を修復することになりました。</p>
                                                <p className="txt nm">正直、探偵に浮気調査をすることには勇気が要りましたが、思ったよりも短期間で浮気の証拠を掴んでいただいて本当に良かったです。中央リサーチさんの土地勘や経験値を信じて良かったです。感謝しています。ありがとうございました。</p>
                                            </div>
                                            </div>
                                        </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                            <div className="cmn_example">
                                
                                <input id="jirei-check2" className="jirei-check2" type="checkbox" />                                
                                <label className="jirei-label" htmlFor="jirei-check2">
                                    <div className='jirei-icon'>事例<span>2</span></div>
                                    営業社員の業績が上がらないことで、悩んでいました。このままでは会社が倒産してしまうという不安がよぎり、思い切って相談してみました。
                                </label>
                                
                                <div className='jirei-content'>
                                    <div className="dd_tab">
                                        <dl>
                                            <dt>営業社員の業績が上がらないことで、悩んでいました。このままでは会社が倒産してしまうという不安がよぎり、思い切って相談してみました。</dt>
                                            <dd>
                                                <div className="box_gray">
                                                依頼者：プラスチック工場経営者<br />
                                                対象者：従業員
                                                </div>
                                                <div className="box_irai">
                                                <h4>依頼内容</h4>
                                                <p>ここ1年の間に営業社員の業績が下がり続けて悩んでいます。今までは日本製の高品質を売りにしていましたが、安価な輸入品が増えているので、時代の流れかな...とも思っていました。</p>
                                                <p>しかし最近、従業員が仕事中にサボっていると小耳に挟み驚きました。うちの従業員は勤務年数が長く、ベテラン揃いなのでサボっているとは考えもしませんでした。</p>
                                                <p>考えてみれば、顧客との連絡が遅いとのクレームが増えたり、新規がなかなか増えないといった問題があり、思い当たる節はありました。</p>
                                                <p>悩んでいる時期にコロナが来てしまい、ますます売上が落ちてしまったのです。そこで従業員の一体誰が営業をサボっているのか調べたいと思い、広島の調査で定評のある中央リサーチさんに素行・内偵調査を依頼することにしました。</p>
                                                <div className="box_kekka">
                                                    <h5>依頼(調査)結果</h5>
                                                    <p>中央リサーチの相談員さんに相談したところ過去の事例でよく似たことがあると話していただきました。営業社員がサボる際によく行く場所やパターンを把握されているみたいでした。そこで、従業員の勤務時間中に調査をしたところ、全く仕事をしていない従業員が二人いることが判明しました。</p>
                                                    <p>調査報告書にはコンビニの駐車場で3時間以上サボっている従業員の写真や動画があり、決定的な証拠となりました。驚いたことにどちらも勤務年数7年のベテラン営業マンです。ショックでしたがこれが現実か...と思いましたね。新入社員の育成や採用面接など責任のある仕事も任せていたので自分も反省しなければと思いました。</p>
                                                    <p>この厳しい経営状況の中、仕事に対して甘い考えを持っている従業員に対しては解雇せざるを得ませんでした。解雇を告げる際にもこの証拠があることで、トラブルなく話を進めることができました。調査中はビクビクしましたが、とてもスムーズに短期間で事実確認ができてさすがプロだなと思いました。</p>
                                                    <p className="nm">これをきっかけに会社も心機一転してまたスタートしたいと思っています。今回はありがとうございました。</p>
                                                </div>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                            <div className="cmn_example">
                                
                                <input id="jirei-check3" className="jirei-check3" type="checkbox" />                                
                                <label className="jirei-label" htmlFor="jirei-check3">
                                    <div className='jirei-icon'>事例<span>3</span></div>
                                    夫が急に離婚しようと言い出し、その原因はと問いただすと、こちらばかり責められます。もしかして愛人がいるのでは？
                                </label>
                                
                                <div className='jirei-content'>
                                    <div className="dd_tab">
                                        <dl>
                                            <dt>夫が急に離婚しようと言い出し、その原因はと問いただすと、こちらばかり責められます。もしかして愛人がいるのでは？</dt>
                                            <dd>
                                                <div className="box_gray">
                                                依頼者：妻/20代/広島在住<br />
                                                対象者：夫/20代後半/広島の不動産会社勤務
                                                </div>
                                                <div className="box_irai">
                                                <h4>依頼内容</h4>
                                                <p>結婚3年目で3歳の娘がいて毎日幸せに過ごしていました。</p>
                                                <p>しかしここ1年の間に、夫の態度が変わっていきました。元から無口な人でしたが家では全く喋らなくなり、帰宅しない日も多くなったのです。</p>
                                                <p>私は夫が一家の大黒柱として一生懸命仕事をしているので、何事も深く尋ねないようにしていました。ところがある日、突然「離婚してほしい」と真顔で切り出されました。</p>
                                                <p>私は驚いて「急にどうしたの？何があったの？」と動揺しました。初めはコロナで会社をクビにでもなったのかと思い心配しましたが、様子がおかしく愛人がいるのでは...と思うようになったのです。</p>
                                                <p>その理由は、ある日車に乗った時のこと。助手席に口紅が落ちていました。私は知らぬふりをしてその口紅を片付けました。すると一週間後今度はアイライナーが落ちていたのです。浮気相手の女性からのメッセージだと思い、私に敵意を持っていると感じました。私は耐えられなくなって夫に原因を問い詰めると逆ギレされてしまいました。</p>
                                                <p>夫は全く私への気持ちが残っていないように感じます。正直もう自分の力ではどうすることもできません。もし、離婚をする結末になってしまった場合、浮気の証拠がなければ、裁判になっても認めてもらえず、不利な立場になってしまうかもしれない・・・。そこで私は探偵に浮気調査を依頼することにしました。とにかく早く浮気の証拠が必要でした。口コミで浮気調査に定評のある中央リサーチさんは広島の実績が多いと知り相談してみることに。</p>
                                                <div className="box_kekka">
                                                    <h5>依頼(調査)結果</h5>
                                                    <p>事情を説明するとすぐに調査を開始していただきました。浮気調査で分かったことは、なんと夫は職場の部下にあたる女性と2年にわたる不倫をしており、女性の自宅マンションで二重生活をしていることが発覚しました。</p>
                                                    <p>今まで夫を信じて尊敬していましたが、騙された喪失感とそれに気がつかなかった自分が嫌になりました。しかし、明確な浮気の証拠を入手したので何も恐れることはありません。最終的に離婚裁判で浮気を認めてもらい、慰謝料請求と親権を勝ち取りました。</p>
                                                    <p>中央リサーチさんは調査報告書を提出していただいた後も、弁護士の紹介や今後の流れについても詳しく説明していただき本当に助かりました。自分の人生のためにもまだ3歳の娘のためにも、これからの人生を新たな気持ちでスタートさせます。調査中もメンタルケアと心遣いをしていただき本当に感謝しています。ありがとうございました。</p>
                                                </div>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                            <div className="cmn_example">
                                
                                <input id="jirei-check4" className="jirei-check4" type="checkbox" />                                
                                <label className="jirei-label" htmlFor="jirei-check4">
                                    <div className='jirei-icon'>事例<span>4</span></div>
                                    娘が家出をしてしまい、眠れない日々を過ごしています。<br />今、何処で何をしているのか、気になります。
                                </label>
                                
                                <div className='jirei-content'>
                                    <div className="dd_tab">
                                        <dl>
                                        <dt>娘が家出をしてしまい、眠れない日々を過ごしています。今、何処で何をしているのか、気になります。</dt>
                                        <dd>
                                            <div className="box_gray">
                                            依頼者：母親/40代/広島在住<br />
                                            対象者：娘/10代大学生
                                            </div>
                                            <div className="box_irai">
                                            <h4>依頼内容</h4>
                                            <p>ある日食事中に些細なことで口論となり、娘がその日の夜に家を飛び出してしまいました。</p>
                                            <p>娘は公務員試験を受験するつもりでしたが、大学卒業後に結婚すると言い出したのです。大学の他に塾にも通って時間とお金をかけてきたので考えを改めるように説得しました。</p>
                                            <p>娘の意思は固いようで、結婚することしか考えていないようなのです。急に家を飛び出して驚きましたが、その日の内に帰ってくるだろうと思っていました。</p>
                                            <p>しかし、1日経っても帰ってこないし、電話も繋がらない。最悪な展開になってはならないと思い、まずは最寄りの警察署に相談しました。</p>
                                            <p>捜索願を出しましたが、事件性はないと見たのか実際に動いてはもらえませんでした。すると夫が探偵にでも相談してなんとか見つけてもらうしかないと言いました。</p>
                                            <p>もうすでに３日間経っているので焦って探偵を探したところ、家出と所在調査に定評のある中央リサーチさんを発見し、相談してみることにしたのです。</p>
                                            <div className="box_kekka">
                                                <h5>依頼(調査)結果</h5>
                                                <p>事情をよく理解していただきすぐに調査を開始していただきました、まさに神頼みでした。中央リサーチさんは過去の事例と娘の行動パターンから居場所を特定されました。</p>
                                                <p>広島市内のネットカフェで彼氏と二人で過ごしていたようです。調査を依頼してから発見までのスピードがあまりにも早く本当に驚きました。</p>
                                                <p>娘にもご家族が心配していますよと優しくアプローチをしていただいたそうで、帰る決心がついたと話していました。</p>
                                                <p>とにかく娘が無事で帰ってきて本当にほっとしています。本人と話をするとお金がなくなるまで、ネットカフェに居続けようと思ったそうです。</p>
                                                <p className="nm">中央リサーチさんに調査をしてもらわなければどうなっていたことでしょうか...。私は人生で初めて探偵社を利用しましたが、こんなに素晴らしいスキルがあるお仕事とは正直知りませんでした。調査中も電話で色々お気遣いもして頂き、本当にスタッフさんと調査員さんには感謝をしています。ありがとうございました。</p>
                                            </div>
                                            </div>
                                        </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="cmn_example">
                                
                                <input id="jirei-check5" className="jirei-check5" type="checkbox" />                                
                                <label className="jirei-label" htmlFor="jirei-check5">
                                    <div className='jirei-icon'>事例<span>5</span></div>
                                    「いま付き合っている相手と別れた方がよいのか？」と悩んでいます。<br />自分の気持ちに、ふん切りを付けるためにも事実関係を確認したいのです。
                                </label>
                                
                                <div className='jirei-content'>
                                    <div className="dd_tab">
                                        <dl>
                                        <dt>「いま付き合っている相手と別れた方がよいのか？」と悩んでいます。<br />
                                            自分の気持ちに、ふん切りを付けるためにも事実関係を確認したいのです。</dt>
                                        <dd>
                                            <div className="box_gray">
                                                依頼者：彼女/20代/広島在住<br />
                                                対象者：彼氏/20代後半/広島のメーカー会社勤務
                                            </div>
                                            <div className="box_irai">
                                                <h4>依頼内容</h4>
                                                <p>付き合って3年になる彼氏からプロポーズをされて婚約中です。</p>
                                                <p>本来幸せの絶頂であるはずですが、最近彼氏の行動が怪しく悩んでいます。その理由は、ある日会話をしている時に私の名前を違う女性の名前で呼んだからです。</p>
                                                <p>驚いて聞き直しましたが、無視をされてしまいました。なんか怪しい...と思っていましたが同じような事が何回か続いたのです。</p>
                                                <p>私は「ちょっと！名前間違ってるんだけど！」と言ったら話をそらされました。もしかして彼氏は二股をかけているのでは？と思うと夜も眠れなくなり...。</p>
                                                <p>このまま結婚していいんだろうか...と悩んでいます。婚約中なのに「浮気をしているの?」と尋ねるのもおかしな話ですし、それで関係が悪化したら自分を余計に責めることになりそうです。まずは私は彼氏が本当に浮気をしているのか事実を知りたい。そこで広島の浮気調査に定評のある中央リサーチさんに相談してみることにしたのです。</p>
                                                <div className="box_kekka">
                                                    <h5>依頼(調査)結果</h5>
                                                    <p>婚約中に相手が浮気をしている可能性があると相談すると、親身になって話を聞いていただけました。まずは事実確認をして気持ちを整理したいと伝えました。相談員さんから調査中は彼の素行を調べるために2日間は交際相手と会わないように言われました。</p>
                                                    <p>休日を中心に彼の行動を尾行、張り込みをしたところ、別の女性との交際が発覚しました。しかもその相手とは、私と付き合う前の元彼女でした。</p>
                                                    <p>調査が終わって報告書を見てみると、休日に楽しそうに二人で買い物をしたりパチンコをしたり過ごしている様子が写っていました。昔の彼女と二股をしているのに、どういった神経で私にプロポーズをしたのか信じられません。どんな理由であれ、これは許されることではないので別れることを決意しました。</p>
                                                    <p className="mt10">私も30歳を過ぎて早く結婚したいと思っていましたが妥協で結婚するのだけは絶対に嫌です。婚約者に浮気の証拠の写真を見せると驚いてその場からいなくなってしまいました。</p>
                                                    <p>ちゃんと話し合いたいからと戻ってきてもらうと、青ざめた顔で「本当にごめんなさい」と謝られました。彼女とは体の関係だけズルズル続いていたそうです。元カノとは気持ちもないと説明されましたが私の気持ちはもう冷めてしまいました。結果的には悲しいけれど籍を入れる前に事実が分かってよかったです。</p>
                                                </div>
                                            </div>
                                        </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                            <div className="cmn_example">
                                
                                <input id="jirei-check6" className="jirei-check6" type="checkbox" />                                
                                <label className="jirei-label" htmlFor="jirei-check6">
                                    <div className='jirei-icon'>事例<span>6</span></div>
                                    離婚した元妻とは、定期的に連絡はとって子供の近況報告は受けています。<br />しかし、それが本当なのか？「虐待はないのか？」「いじめられていないか？」「元気そうに学校に行っているか？」気になります。
                                </label>
                                
                                <div className='jirei-content'>
                                    <div className="dd_tab">
                                        <dl>
                                        <dt>離婚した元妻とは、定期的に連絡はとって子供の近況報告は受けています。しかし、それが本当なのか？「虐待はないのか？」「いじめられていないか？」「元気そうに学校に行っているか？」気になります。</dt>
                                        <dd>
                                            <div className="box_gray">
                                            依頼者：男性/40代/会社員　広島在住<br />
                                            対象者：元妻/30代後半
                                            </div>
                                            <div className="box_irai">
                                            <h4>依頼内容</h4>
                                            <p>2年前に妻と離婚し、7歳の娘の親権は元妻にあります。</p>
                                            <p>私が妻と離婚した理由は彼女が非常にヒステリックで大きな声で怒鳴りつけるからです。お弁当のおかずを残しただけでもすごい剣幕で怒られて、ストレスがピークでした。</p>
                                            <p>今は離れて暮らしてる娘のことが心配です。元妻は雨が降ったり、些細なことで怒り狂ってしまう性格なので娘が安全に過ごしているのか気がかりです。</p>
                                            <p>毎月1回程度のペースで元妻とは連絡を取っていますが、電話に出る娘の声が悲しそうなので最近は眠れない日もあるのです。</p>
                                            <p>学校の友達と仲良くしているか、いじめられていたり、嫌な思いをしていないか心配で仕方がありません。娘はもう小学生なので、実際に会うと離婚した理由を聞かれると思うので元妻のことをどう説明すれば良いのか正直わかりません。</p>
                                            <p>娘に元妻のことを悪く言うと家庭に支障をきたしてしまい、娘が余計にストレスを抱えてしまうと思うからです。</p>
                                            <p>元妻の母親ともあまり仲が良くないので、正直誰に相談して良いのか本当に胸が押しつぶされそうになりました。</p>
                                            <p>ある日、子育てのブログで離婚した父親が子供の近況を知るのに探偵の調査が役立つという記事を見てハッとしました。</p>
                                            <p>今まで探偵を利用したことはありませんが我が子の近況を調査してくれるなら是非利用しようと思い、探偵社を探し始めました。</p>
                                            <p>広島での素行調査に定評のある中央リサーチさんは電話対応がしっかりしていて相談員の方も親切に話を聞いていただけたので依頼することにしました。</p>
                                            <div className="box_kekka">
                                                <h5>依頼(調査)結果</h5>
                                                <p>元妻の現住所を伝えると、すぐに子供の生活実態の調査が始まりました。調査報告書を見ると娘が元気に友達と通学をしている様子を見て安心しました。</p>
                                                <p>自転車で近くの学習塾に行く様子や自立した一面も見えて、娘の成長を感じることができました。そばにいないからこそ本当に貴重な情報です。</p>
                                                <p>電話で元気な声を聞くよりも、こうして日常の様子を写真で見ると本当に安心しますね。健康面も問題なく元気に生活していると知り、ほっと一安心です。</p>
                                                <p>中央リサーチさんは様々なケースの調査をされているみたいなので、相談から依頼まで迷いなくスムーズに事が進みました。この度はありがとうございました。</p>
                                            </div>
                                            </div>
                                        </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>                            
                            
                        </div>

                        

                    </div>
                </Layout>
            </div>
            <Footer />        
        </>
    )
}

const jsonN = "広島探偵 中央リサーチ",
jsonT = "当探偵社へのご相談事例",
jsonS = "jirei",
jsonD = "広島の探偵社「中央リサーチ」、事例紹介についての説明ページです。";

const jsonLd = {
    "@context": "http://schema.org/",
    "@graph":[
        {
            "@type":"WebSite",
            "@id":`https://www.chuou.biz/${jsonS}/#website`,
            "url":`https://www.chuou.biz/${jsonS}/`,
            "name":`${jsonT}｜ 広島の探偵　浮気調査なら55年の実績｜${jsonN}`,
            "description":`${jsonD}${jsonT}`,
            "inLanguage":"ja",
            "publisher":{
                "@id":`https://www.chuou.biz/${jsonS}/#person`
            }
        },
        {
            "@type":"WebPage",
            "@id":`https://www.chuou.biz/${jsonS}/#webpage`,
            "url":`https://www.chuou.biz/${jsonS}/`,
            "name":`${jsonN}`,
            "description":`${jsonD}${jsonT}`,
            "inLanguage":"ja",
            "isPartOf":{
                "@id":`https://www.chuou.biz/${jsonS}/#website`
            },
            "breadcrumb":{
                "@id":`https://www.chuou.biz/${jsonS}/#breadcrumblist`
            },
            "datePublished":"2023-2-22T21:00:00+09:00",
            "dateModified":"2023-2-24T19:00:00+09:00"
        },
        {
            "@type":"BreadcrumbList",
            "@id":`https://www.chuou.biz/${jsonS}/#breadcrumblist`,
            "itemListElement":[
                {
                    "@type":"ListItem",
                    "@id":`https://www.chuou.biz/#listItem`,
                    "position":1,
                    "item":{
                        "@type":"WebPage",
                        "@id":`https://www.chuou.biz/`,
                        "name":`${jsonN}`,
                        "description":"当探偵社は広島に本社を構え、皆様の信頼に支えられ55年の実績を重ねてまいりました。調査・解決共経験豊富な当社にまずはお気軽にご相談ください。",
                        "url":`https://www.chuou.biz/`
                    },
                    "nextItem":`https://www.chuou.biz/${jsonS}/#listItem`
                },
                {
                    "@type":"ListItem",
                    "@id":`https://www.chuou.biz/${jsonS}/#listItem`,
                    "position":2,
                    "item":{
                        "@type":"WebPage",
                        "@id":`https://www.chuou.biz/${jsonS}/`,
                        "name":`${jsonT}｜${jsonN}`,
                        "description":`${jsonD}`,
                        "url":`https://www.chuou.biz/${jsonS}/`
                    },
                    "previousItem":`https://www.chuou.biz/#listItem`
                }
            ]
        }
    ]
}

export const Head = () => (
    <>
        <Seo
        title="当探偵社へのご相談事例"
        keyword="事例紹介,広島,探偵,中央リサーチ"
        description="広島の探偵社「中央リサーチ」、事例紹介についての説明ページです。"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
)
export default jirei
