import styles from '@Styles/_error.module.scss'
import { LogoJsonLd, NextSeo } from "next-seo";
import { PageSEO } from "@Assets/functions/SEO";

export default function Custom404() {
  // SEO
    // Per-Page SEO
    const SEO = PageSEO({
      siteLogo    : "site/logo",
      url         : `${process.env.NEXT_PUBLIC_SITE_URL}/index`,
      title       : "Error | 404",
      description : "Oh no, 404 Error"
    });
  // SEO

  return (
    <>
      <LogoJsonLd {...SEO.LogoJsonLd} />
      <NextSeo {...SEO.DefaultSeo} />

      <div className={styles["error-page-container"]}>
        <h1>
          Oh no, 404 Error
        </h1>
        <h3>
          (Not Found)
        </h3>
      </div>
    </>
  )
}