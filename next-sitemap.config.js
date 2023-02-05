/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  // optional
  robotsTxtOptions: {
    additionalSitemaps: [
      // `${process.env.NEXT_PUBLIC_SITE_URL}/my-custom-sitemap-1.xml`,
    ],
  },
};
