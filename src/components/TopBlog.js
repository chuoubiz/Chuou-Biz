import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';



const TopBlog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsPosts(
        filter: {category: {id: {eq: "info"}}}
        sort: {date: DESC}
        limit: 2
      ) {
        nodes {
          date(formatString: "YYYY/MM/DD")
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
            {posts.map(post => (
              <dl key={post.postsId}>
                <dt>{post.date}</dt>
                <dd>
                  <Link to={`/posts/${post.postsId}`}>
                    {post.title}
                  </Link>
                </dd>
              </dl>
            ))}
          </div>
          <p className="rit nm">
            <Link to="/info/">一覧はこちら »</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default TopBlog

