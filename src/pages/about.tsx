import { LogoJsonLd, NextSeo } from "next-seo";
import { PageSEO, GoogleRichResults } from "@Assets/functions/SEO";

export default function About() {
  // SEO
    // Per-Page SEO
    const SEO = PageSEO({
      siteLogo    : "site/logo",
      url         : `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
      title       : "ABOUT TITLE HERE",
      description : "ABOUT DESCRIPTION HERE",
    });
  // SEO

  return (
    <>
      <LogoJsonLd {...SEO.LogoJsonLd} />
      <NextSeo {...SEO.DefaultSeo} />
    </>
  );
}
