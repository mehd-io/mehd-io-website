module.exports = {
  pathPrefix: '',
  siteUrl: 'https://mehd.io',
  siteTitle: 'Mehdio',
  siteDescription: 'Data engineer & Content creator',
  author: 'Mehdi OUAZZA',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  pages: {
    home: '/',
    blog: 'blog',
  },
  social: {
    github: 'https://github.com/mehd-io',
    youtube: 'https://www.youtube.com/channel/UCiZxJB0xWfPBE2omVZeWPpQ',
    twitter: 'https://twitter.com/mehd_io',
    linkedin: 'https://linkedin.com/in/mehd-io/',
    medium: 'https://medium.com/@mehdio',
    rss: '/rss.xml',
  },
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
};
