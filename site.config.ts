import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'ceca6166ee814dfa887028bc526256ac',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'PB Marketing',
  domain: 'wr8-only.vercel.app',
  author: 'PB Marketing',
  seotitle: 'PB Marketing - with Bora',

  // open graph metadata (optional)
  description: '인스타팔로워늘리기, 인스타팔로워구매, 인스타한국인팔로워, 유튜브조회수늘리기, 유튜브구독자늘리기, 인스타그램팔로워늘리기, 유튜브구독자구매, 트래픽, 틱톡, 페이스북, 플레이스, 블로그, 쓰레드, 유튜브',

  // social usernames (optional)
  twitter: 'jotzilla',
  github: 'verfasor',
  linkedin: 'mighil',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://cdn.imweb.me/upload/S20231119ec49b4c5c8219/6dd46a6be23da.png',
  defaultPageCover: 'https://cdn.imweb.me/upload/S20231119ec49b4c5c8219/7647db738fe04.png',
  defaultPageCoverPosition: 0.3,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default',
 // navigationLinks: [   
 //   {
 //     title: 'Blog',
 //     pageId: '588031c1e65d4dfa9d58e2492c9c1b7e'
 //   },    
 //   {
 //     title: 'About',
 //     pageId: 'cf2ae3c4839e4e09a1b4a33cc600c409'
 //   },
 //   {
 //     title: 'Contact',
 //     pageId: '5f7e562fef814299b10c68c52e920c9a'
 //   }
 // ]
})
