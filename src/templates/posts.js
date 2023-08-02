import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import SubpageTitle from '../components/SubpageTitle';
import Breadcrumb from '../components/breadcrumbPosts';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const PostPage = ({ data }) => {
  const { microcmsPosts } = data; // フィールド名を修正

  return (
    <>
      <div id='wrap'>
        <Header h1title={`${microcmsPosts.category.name}｜${microcmsPosts.title}`} />
        <SubpageTitle subtitle={microcmsPosts.category.name} id="column" />
        <Breadcrumb url={`/${microcmsPosts.category.id}/`} cat={microcmsPosts.category.name} title={data.microcmsPosts.title} />
        <Layout>
          <div className="main pb">

            <article className="main">
              <h3 className="line">{data.microcmsPosts.title}<br />
              <span className='date'>更新日：<time dateTime={data.microcmsPosts.createdAt}>{data.microcmsPosts.updatedAt}</time></span></h3>

              <div
              dangerouslySetInnerHTML={{
                  __html: `${data.microcmsPosts.content}`,
              }}
              />

              <p class="cen"><a href={`/${microcmsPosts.category.id}/`} className='bt01'>一覧に戻る</a></p>
              <p class="cen"><a href="/" className='bt01'>広島で浮気調査なら<br class="dsp_smt" />総合探偵社 中央リサーチ広島へ</a></p>
                
            </article>
          </div>
        </Layout>
        <Footer />
      </div>
    </>
  );
};

export const query = graphql`
query ($postId: String) {
  microcmsPosts(id: {eq: $postId}) {
    title
    category {
      id
      name
    }
    content
    eyecatch {
      url
    }
    postsId
    updatedAt(formatString: "YYYY年MM月DD日")
    createdAt(formatString: "YYYY-MM-DDTHH:MM")
  }
}
`;

export default PostPage;
