/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "広島の探偵｜浮気調査は55年の実績と信頼｜総合探偵社 中央リサーチ",
    keyword:"探偵,広島,興信所,浮気調査,結婚・身上調査,中央リサーチ広島",
    description:
      "探偵で広島の調査なら｢浮気調査、不倫調査」を最も得意とする総合探偵社中央リサーチが高いスキルで浮気の証拠をとり早期解決に導きます。分かりやすい料金表でお見積り、ご相談無料です。所在地　広島県広島市中区上幟町２－４５今田ビル２階（広島家庭裁判所前）広島県公安委員会届け出済み",
    image: "/images/ogp.jpg",
    url: "https://www.chuou.biz",
    siteUrl: "https://www.chuou.biz",
    timezone: 'Asia/Tokyo',
  },
  plugins: [


    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`shorthands`, `cloning`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 50, //デフォルトは50
        },
      },
    },

    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.API_KEY,
        serviceId: 'chuoubiz',
        apis: [
          {
            endpoint: 'posts',
          },
          {
            endpoint: 'category',
          },
        ],
      },
    },

    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.chuou.biz/`,
        sitemap: `https://www.chuou.biz/sitemap-0.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.chuou.biz`,
      },
    },

    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KPV22J2",
        includeInDevelopment: false,
      },
    },

    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    'gatsby-paginate',
    'gatsby-plugin-slug',
    
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*.html": ["Cache-Control: public, max-age=0, must-revalidate"],
          "/page-data/*": ["Cache-Control: public, max-age=0, must-revalidate"],
          "/page-data/app-data.json": [
            "Cache-Control: public, max-age=0, must-revalidate",
          ],
          "/static/*": ["Cache-Control: public, max-age=31536000, immutable"],
          "/sw.js": ["Cache-Control: no-cache"],
          "/**/*.js": ["Cache-Control: public, max-age=31536000, immutable"],
          "/**/*.css": ["Cache-Control: public, max-age=31536000, immutable"],
        },
      },
    },
    
  ],
}
