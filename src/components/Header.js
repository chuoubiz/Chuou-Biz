import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [isConsultationOpen, setConsultationOpen] = useState(false);
  return (
    <>
      <header id="header" className="cf">
        <h1>{props.h1title}</h1>
        <div id="sticky">
          <p className="title_top">
            <Link to="/">
              <img src="/img/logo.png" width={430} height={36} alt="株式会社中央リサーチ" />
            </Link>
          </p>
          <div className="contact">
            <p className="all_hour">
              24時間受付
              <br />
              携帯OK
            </p>
            <div className="txt_area">
              <p className="blue">家庭裁判所前にある探偵事務所</p>
              <p className="tel">
                無料相談窓口<a href="tel:0120-30-6630">0120-30-6630</a>
              </p>
            </div>
            <p className="line">
              <a
                href="https://line.me/R/ti/p/65gpK3qcDs"
                aria-label="LINE"
                rel="nofollow noopener noreferrer"
                target="_blank">
                <img src="/img/line.png" width={58} height={58} alt="LINE" />
              </a>
            </p>
          </div>
        </div>
        <nav id="menu">
          <ul className="hp_menu">
            <li>
              <Link to="/beginner/">はじめての方へ</Link>
            </li>
            <li>
              <Link to="/choose/">探偵社の選び方</Link>
            </li>
            <li>
              <Link to="/voice/">お客様の声</Link>
            </li>
            <li className="dsp_hp drop">
              <Link to="/" className="child">
                調査項目
              </Link>
              <ul className="dropdwn_menu">
                <li className="sub dsp_hp">調査項目</li>
                <li>
                  <Link to="/fickleness/">浮気・不倫調査</Link>
                </li>
                <li className="pad">
                  <Link to="/fickleness/type/">離婚の種類について</Link>
                </li>
                <li className="pad">
                  <Link to="/fickleness/proof/">内容証明について</Link>
                </li>
                <li>
                  <Link to="/behavior/">素行調査</Link>
                </li>
                <li>
                  <Link to="/trial/">裁判証拠収集</Link>
                </li>
                <li>
                  <Link to="/marriage/">結婚・身上調査</Link>
                </li>
                <li>
                  <Link to="/whereabouts/">家出・所在調査</Link>
                </li>
                <li>
                  <Link to="/stalker/">嫌がらせ対策</Link>
                </li>
                <li>
                  <Link to="/tapping/">盗聴器発見</Link>
                </li>
                <li>
                  <Link to="/fingerprint/">指紋・筆跡鑑定</Link>
                </li>
              </ul>
            </li>
            <li className="dsp_hp drop">
              <Link to="/corporation/" className="child">
                法人様向けプラン
              </Link>
              <ul className="dropdwn_menu">
                <li className="sub dsp_hp">法人様向けプラン</li>
                <li>
                  <Link to="/corporation/#credit-check">企業信用調査</Link>
                </li>
                <li>
                  <Link to="/corporation/#employment-Survey">採用調査</Link>
                </li>
                <li>
                  <Link to="/corporation/#market-research">市場調査</Link>
                </li>
                <li>
                  <Link to="/corporation/#employee-behavior">従業員の素行</Link>
                </li>
                <li>
                  <Link to="/corporation/#crisis-management">危機管理</Link>
                </li>
                <li>
                  <Link to="/corporation/#traffic-accident">交通事故調査</Link>
                </li>
                <li>
                  <Link to="/corporation/#intellectual-property">知的財産調査</Link>
                </li>
                <li>
                  <Link to="/corporation/#competitor-Survey">競合他社調査</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <nav className="g_nav dsp_hp">
          <ul>
            <li>
              <Link to="/">相談室案内</Link>
              <ul>
                <li>
                  <Link to="/">広島相談室</Link>
                </li>
                <li>
                  <Link to="/okayama/">岡山相談室</Link>
                </li>
                <li>
                  <Link to="/ehime/">愛媛相談室</Link>
                </li>
                <li>
                  <Link to="/yamaguchi/">山口相談室</Link>
                </li>
                <li>
                  <Link to="/shimane/">島根相談室</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/service/">当社の取り組み</Link>
            </li>
            <li>
              <Link to="/company/">会社概要</Link>
            </li>
            <li>
              <Link to="/jirei/">事例紹介</Link>
            </li>
            <li>
              <Link to="/price/">料金表</Link>
            </li>
            <li>
              <Link to="/jobs/">採用情報</Link>
            </li>
            <li>
              <Link to="/toiawase/">お問い合わせ</Link>
            </li>
          </ul>
        </nav>
        <nav className="smp_nav">
        <div id="overlay-button" className={isOverlayOpen ? 'open' : ''} onClick={() => {setIsOverlayOpen(!isOverlayOpen); setIsOpen(false); setSubMenuOpen(false);}}>
          <span></span>
        </div>
        <div id="overlay" className={isOverlayOpen ? 'open' : ''}>          
            <ul>
              <li>
                <Link to="/">ホーム</Link>
              </li>
              <li>
              <label className={`smpnav-label ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                調査項目
                <FontAwesomeIcon icon={faPlus} />
              </label>
                <ul className={`smpnav-content ${isOpen ? 'open' : ''}`}>
                  <li>
                    <Link to="/fickleness/" onClick={() => setIsOverlayOpen(false)}>浮気・不倫調査</Link>
                  </li>                  
                  <li>
                    <Link to="/behavior/" onClick={() => setIsOverlayOpen(false)}>素行調査</Link>
                  </li>
                  <li>
                    <Link to="/trial/" onClick={() => setIsOverlayOpen(false)}>裁判証拠収集</Link>
                  </li>
                  <li>
                    <Link to="/marriage/" onClick={() => setIsOverlayOpen(false)}>結婚・身上調査</Link>
                  </li>
                  <li>
                    <Link to="/whereabouts/" onClick={() => setIsOverlayOpen(false)}>家出・所在調査</Link>
                  </li>
                  <li>
                    <Link to="/stalker/" onClick={() => setIsOverlayOpen(false)}>嫌がらせ対策</Link>
                  </li>
                  <li>
                    <Link to="/tapping/" onClick={() => setIsOverlayOpen(false)}>盗聴器発見</Link>
                  </li>
                  <li>
                    <Link to="/fingerprint/" onClick={() => setIsOverlayOpen(false)}>指紋・筆跡鑑定</Link>
                  </li>
                </ul>
              </li>
              <li>
              <div className={`smpnav-label houjin ${isSubMenuOpen ? 'open' : ''}`} onClick={() => setSubMenuOpen(!isSubMenuOpen)}>
                法人様向けプラン
                <FontAwesomeIcon icon={faPlus} />
              </div>
                <ul className={`smpnav-content ${isSubMenuOpen ? 'open' : ''}`}>
                  <li>
                    <Link to="/corporation/#credit-check">企業信用調査</Link>
                  </li>
                  <li>
                    <Link to="/corporation/#employment-Survey">採用調査</Link>
                  </li>
                  <li>
                    <Link to="/corporation/#market-research">市場調査</Link>
                  </li>
                  <li>
                    <Link to="/corporation/#employee-behavior">従業員の素行</Link>
                  </li>
                  <li>
                    <Link to="/corporation/#crisis-management">危機管理</Link>
                  </li>
                  <li>
                    <Link to="/corporation/#traffic-accident">交通事故調査</Link>
                  </li>
                  <li>
                    <Link to="/corporation/#intellectual-property">知的財産調査</Link>
                  </li>
                  <li>
                    <Link to="/corporation/#competitor-Survey">競合他社調査</Link>
                  </li>
                </ul>
              </li>
              <li>
              <div className={`smpnav-label ${isConsultationOpen ? 'open' : ''}`} onClick={() => setConsultationOpen(!isConsultationOpen)}>
                相談室案内
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <ul className={`smpnav-content soudan ${isConsultationOpen ? 'open' : ''}`}>
                  <li>
                    <Link to="/" onClick={() => setTimeout(() => setConsultationOpen(false), 0)}>広島相談室</Link>
                  </li>
                  <li>
                    <Link to="/okayama/" onClick={() => setTimeout(() => setConsultationOpen(false), 0)}>岡山相談室</Link>
                  </li>
                  <li>
                    <Link to="/ehime/" onClick={() => setTimeout(() => setConsultationOpen(false), 0)}>愛媛相談室</Link>
                  </li>
                  <li>
                    <Link to="/yamaguchi/" onClick={() => setTimeout(() => setConsultationOpen(false), 0)}>山口相談室</Link>
                  </li>
                  <li>
                    <Link to="/shimane/" onClick={() => setTimeout(() => setConsultationOpen(false), 0)}>島根相談室</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/beginner/">はじめての方へ</Link>
              </li>
              <li>
                <Link to="/choose/">探偵社の選び方</Link>
              </li>
              <li>
                <Link to="/voice/">お客様の声</Link>
              </li>
              <li>
                <Link to="/service/">当社の取り組み</Link>
              </li>
              <li>
                <Link to="/company/">会社概要</Link>
              </li>
              <li>
                <Link to="/jirei/">事例紹介</Link>
              </li>
              <li>
                <Link to="/price/">料金表</Link>
              </li>
              <li>
                <Link to="/jobs/">採用情報</Link>
              </li>
              <li>
                <Link to="/toiawase/">お問い合わせ</Link>
              </li>
            </ul>
          </div>

        </nav>
      </header>
    </>
  );
};

export default Header;
