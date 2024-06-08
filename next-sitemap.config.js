/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://digimoda.kimhabork.com",
  generateRobotsTxt: true // (optional)
  // ...other options
};
