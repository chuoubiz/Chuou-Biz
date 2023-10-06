import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

const TopBlog = () => {
  dayjs.locale("ja");
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsPosts(
        filter: { category: { id: { eq: "info" } } }
        sort: { date: DESC }
        limit: 2
      ) {
        nodes {
          date
          title
          postsId
        }
      }
    }
  `);

  const posts = data.allMicrocmsPosts.nodes;
  return (
    <>
      <div id="top_blog" className="top_column bg_wide pt pb">
        <h3 className="cen mp">探偵ブログ</h3>
        <div className="box">
          <div id="blog_list">
            {posts.map((post) => (
              <dl key={post.postsId}>
                <dt>
                  <time
                    dateTime={dayjs
                      .utc(post.date)
                      .tz("Asia/Tokyo")
                      .format("YYYY-MM-DDTHH:mm:ss")}
                  >
                    {dayjs.utc(post.date).tz("Asia/Tokyo").format("YYYY/MM/DD")}
                  </time>
                </dt>
                <dd>
                  <Link to={`/posts/${post.postsId}`}>{post.title}</Link>
                </dd>
              </dl>
            ))}
          </div>
          <p className="rit nm">
            <Link to="/category/info/">一覧はこちら »</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default TopBlog;
