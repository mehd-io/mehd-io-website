module.exports = {
  pathPrefix: '',
  siteUrl: 'https://mehd.io',
  siteTitle: 'Mehdio',
  siteDescription: 'Logbook of a software engineer',
  author: 'Mehdi OUAZZA',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  pages: {
    home: '/',
    blog: 'blog',
  },
  social: {
    github: 'https://github.com/mehd-io',
    twitter: 'https://twitter.com/mehd_io',
    linkedin: 'https://linkedin.com/in/mehd-io/',
    medium: 'https://medium.com/@mehdio',
    spotify: 'https://open.spotify.com/artist/27Mo6S5guiiHYTTGb3rHwk?si=gMDHVEb0QS6KJ0Ynji7MHA',
    rss: '/rss.xml',
  },
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
};
