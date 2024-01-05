import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const HeaderEhime = (props) => {
  return (
    <>
      <header id='header' className='cf'>
        <h1>{props.h1title}</h1>
        <div id='sticky'>
          <p className='title'>
            <Link to='/ehime/'>
              <span className='fs dsp_smt'>{props.pagetitle}</span>
              <img src='/img/ehime/title.png' alt='株式会社中央リサーチ愛媛' />
            </Link>
          </p>
          <div className='contact'>
            <p className='all_hour'>
              24時間受付
              <br />
              携帯OK
            </p>
            <div className='txt_area'>
              <p className='blue'>{props.pagetitle}</p>
              <p className='tel'>
                無料相談窓口<Link to='tel:0120-30-6630'>0120-30-6630</Link>
              </p>
            </div>
            <p className='line'>
              <a href='https://line.me/R/ti/p/65gpK3qcDs' aria-label='LINE' rel='nofollow noopener noreferrer' target='_blank'>
                <img src='/img/line.png' width={58} height={58} alt='LINE' />
              </a>
            </p>
          </div>
        </div>
        {/*　タブレットスマホ時ハンバーガーメニュー　*/}
        <nav id='menu'>
          <ul className='g_menu ehime'>
            <li>
              <Link to='/ehime/voice/'>お客様の声</Link>
            </li>
            <li>
              <Link to='/ehime/jirei/'>調査事例</Link>
            </li>
            <li>
              <Link to='/ehime/company/'>会社概要</Link>
            </li>
            <li>
              <Link to='/ehime/price/'>料金表</Link>
            </li>
            <li>
              <Link to='/ehime/toiawase/'>お問い合わせ</Link>
            </li>
          </ul>
        </nav>
        {/*　ここまで　*/}
        <nav className='smp_nav'>
          <input type='checkbox' id='overlay-input' />
          <label htmlFor='overlay-input' id='overlay-button'>
            <span></span>
          </label>
          <div id='overlay'>
            <ul>
              <li>
                <Link to='/ehime/'>ホーム</Link>
              </li>
              <li>
                <input id='smpnav-check5' className='smpnav-check5' type='checkbox' />
                <label className='smpnav-label' htmlFor='smpnav-check5'>
                  調査項目
                  <FontAwesomeIcon icon={faPlus} />
                </label>
                <ul className='smpnav-content'>
                  <li>
                    <Link to='/ehime/about/#uwaki' state={{ scrollTo: true }}>
                      浮気・不倫調査
                    </Link>
                  </li>
                  <li>
                    <Link to='/ehime/about/#sokou' state={{ scrollTo: true }}>
                      素行調査
                    </Link>
                  </li>
                  <li>
                    <Link to='/ehime/about/#saiban' state={{ scrollTo: true }}>
                      裁判証拠収集
                    </Link>
                  </li>
                  <li>
                    <Link to='/ehime/about/#kekkon' state={{ scrollTo: true }}>
                      結婚・身上調査
                    </Link>
                  </li>
                  <li>
                    <Link to='/ehime/about/#iede' state={{ scrollTo: true }}>
                      家出・所在調査
                    </Link>
                  </li>
                  <li>
                    <Link to='/ehime/about/#stalker' state={{ scrollTo: true }}>
                      嫌がらせ・ストーカー対策
                    </Link>
                  </li>
                  <li>
                    <Link to='/ehime/about/#touchouki' state={{ scrollTo: true }}>
                      盗聴器発見調査
                    </Link>
                  </li>
                  <li>
                    <Link to='/ehime/about/#kagaku' state={{ scrollTo: true }}>
                      科学的調査
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <input id='smpnav-check3' className='smpnav-check3' type='checkbox' />
                <label className='smpnav-label' htmlFor='smpnav-check3'>
                  相談室案内
                  <FontAwesomeIcon icon={faPlus} />
                </label>
                <ul className='smpnav-content'>
                  <li>
                    <Link to='/'>広島相談室</Link>
                  </li>
                  <li>
                    <Link to='/okayama/'>岡山相談室</Link>
                  </li>
                  <li>
                    <Link to='/ehime/'>愛媛相談室</Link>
                  </li>
                  <li>
                    <Link to='/yamaguchi/'>山口相談室</Link>
                  </li>
                  <li>
                    <Link to='/shimane/'>島根相談室</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/ehime/voice/'>お客様の声</Link>
              </li>
              <li>
                <Link to='/ehime/jirei/'>調査事例紹介</Link>
              </li>
              <li>
                <Link to='/ehime/company/'>会社概要</Link>
              </li>
              <li>
                <Link to='/ehime/price/'>料金表</Link>
              </li>
              <li>
                <Link to='/ehime/toiawase/'>お問い合わせ</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderEhime;
