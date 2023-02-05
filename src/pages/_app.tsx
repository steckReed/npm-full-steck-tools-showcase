import "@Styles/_global-styles.scss";

import { LogoJsonLd, DefaultSeo } from "next-seo";
import SEO from "next-seo.config";

export default function NextApp({ Component, pageProps }) {
  return (
    <>
      <LogoJsonLd {...SEO.LogoJsonLd} />
      <DefaultSeo {...SEO.DefaultSeo} />

      {/* <Navbar />  */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}
