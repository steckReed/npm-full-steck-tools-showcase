import { LogoJsonLd, NextSeo } from "next-seo";
import { PageSEO, GoogleRichResults } from "@Assets/functions/SEO";

export default function Home() {
  // SEO
    // Per-Page SEO
    const SEO = PageSEO({
      siteLogo    : "site/logo",
      url         : `${process.env.NEXT_PUBLIC_SITE_URL}/index`,
      title       : "HOME TITLE HERE",
      description : "HOME DESCRIPTION HERE"
    });

    // Google Indexing
    const googleTags =  {
      "@context": "https://schema.org/",
      "@type": "Product", // <- https://developers.google.com/search/docs/appearance/structured-data/search-gallery
      "name": "EXAMPLE PRODUCT NAME",
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
      ],

      // //  OPTIONAL EXAMPLE
        // "description": "PRODUCT DESCRIPTION",
        // "sku": "0446310786",
        // "mpn": "925872",
        // "brand": {
        //   "@type": "Brand",
        //   "name": "ACME"
        // },
        // "review": {
        //   "@type": "Review",
        //   "reviewRating": {
        //     "@type": "Rating",
        //     "ratingValue": "4",
        //     "bestRating": "5"
        //   },
        //   "author": {
        //     "@type": "Person",
        //     "name": "John Smith"
        //   }
        // },
        // "aggregateRating": {
        //   "@type": "AggregateRating",
        //   "ratingValue": "4.4",
        //   "reviewCount": "89"
        // },
        // "offers": {
        //   "@type": "AggregateOffer",
        //   "offerCount": "5",
        //   "lowPrice": "119.99",
        //   "highPrice": "199.99",
        //   "priceCurrency": "USD"
        // }
      // //  OPTIONAL EXAMPLE
    }
  // SEO

  return (
    <>
      <LogoJsonLd {...SEO.LogoJsonLd} />
      <NextSeo {...SEO.DefaultSeo} />
      <GoogleRichResults richTags={googleTags}/>
      
    </>
  );
}
