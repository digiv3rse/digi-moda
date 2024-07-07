/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://digimoda.kimhabork.site",
  generateRobotsTxt: true // (optional)
  // ...other options
};
