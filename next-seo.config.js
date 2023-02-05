/* next-seo-config.js Notes:
 - EXAMPLES HERE            : https://github.com/garmeeh/next-seo#next-seo
 - OFFICIAL DESCRIPTION     : https://github.com/garmeeh/next-seo#nextseo-options
 - DESCRIPTIVE KEYS         : https://blog.avneesh.tech/next-seo-a-better-way-to-manage-seo-for-nextjs#heading-what-each-of-the-props-does



  - Below examples will be used on every page.
  - Use pageSEO to overwrite default values.
*/

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Site Logo (LogoJsonLd) (* Required to Fill)
  LogoJsonLd: {
    /* Notes
      INFO: https://github.com/garmeeh/next-seo#logo
      To be added on per-page basis
      
      To Use:
      import { LogoJsonLd } from "next-seo";
      import SEO from "next-seo.config";
      <LogoJsonLd {...SEO.LogoJsonLd} />
    */
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/images/site-logo.jpg`,
    url: process.env.NEXT_PUBLIC_SITE_URL,
  },

  // Site Default Details (DefaultSeo) (* Required to Fill)
  DefaultSeo: {
    /* Notes
      INFO: https://github.com/garmeeh/next-seo#default-seo-configuration
      To be added on per-page basis
      
      To Use:
      import { DefaultSeo } from "next-seo";
      import SEO from "next-seo.config";
      <DefaultSeo {...SEO.DefaultSeo} />
    */
    // Title
    title: process.env.NEXT_PUBLIC_SITE_TITLE,
    titleTemplate: process.env.NEXT_PUBLIC_SITE_TITLE_PREFIX, 
    defaultTitle: process.env.NEXT_PUBLIC_SITE_FALLBACK_TITLE,

    // Site Details
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
    keywords: process.env.NEXT_PUBLIC_SITE_KEYWORDS,

    // Open Graph (:og)
    openGraph: {
      title: process.env.NEXT_PUBLIC_SITE_TITLE,
      titleTemplate: process.env.NEXT_PUBLIC_SITE_TITLE_PREFIX,
      defaultTitle: process.env.NEXT_PUBLIC_SITE_FALLBACK_TITLE,
      type: "website",
      locale: "en_IE",
      url: process.env.NEXT_PUBLIC_SITE_URL,
      site_name: process.env.NEXT_PUBLIC_SITE_NAME,
    },

    // Twitter Handle
    twitter: {
      handle: undefined,
      site: undefined,
      cardType: undefined,
    },
  },

  // Company Brand Info (BrandJsonLd) (Optional Per-Page)
  BrandJsonLd: {
    /* Notes
      INFO: https://github.com/garmeeh/next-seo#product
      To be added on per-page basis
      
      To Use:
      import { BrandJsonLd } from "next-seo";
      import SEO from "next-seo.config";
      <BrandJsonLd {...SEO.BrandJsonLd} />
    */
    slogan: undefined,
    id: undefined,
    logo: undefined,
    aggregateRating: {
      ratingValue: undefined,
      ratingCount: undefined,
    },
  },

  // Specified Job Posting (JobPostingJsonLd) (Optional Per-Page)
  JobPostingJsonLd: {
    /* Notes
      INFO: https://github.com/garmeeh/next-seo#job-posting
      To be added on per-page basis
      
      To Use:
      import { JobPostingJsonLd } from "next-seo";
      import SEO from "next-seo.config";
      <JobPostingJsonLd {...SEO.JobPostingJsonLd} />
    */
    datePosted: undefined,
    description: undefined,
    hiringOrganization: {
      name: undefined,
      sameAs: undefined,
    },
    jobLocation: {
      streetAddress: undefined,
      addressLocality: undefined,
      addressRegion: undefined,
      postalCode: undefined,
      addressCountry: undefined,
    },
    title: undefined,
    baseSalary: {
      currency: undefined,
      value: undefined, // Can also be a salary range, like [40, 50]
      unitText: undefined,
    },
    employmentType: undefined,
    jobLocationType: undefined,
    validThrough: undefined,
    applicantLocationRequirements: undefined,
  },

  // Local Business Details (LocalBusinessJsonLd) (Optional Per-Page)
  LocalBusinessJsonLd: {
    /* Notes
      INFO: https://github.com/garmeeh/next-seo#local-business
      To be added on per-page basis
      
      To Use:
      import { LocalBusinessJsonLd } from "next-seo";
      import SEO from "next-seo.config";
      <LocalBusinessJsonLd {...SEO.LocalBusinessJsonLd} />
    */
    type: undefined,
    id: undefined,
    name: undefined,
    description: undefined,
    url: undefined,
    telephone: undefined,
    address: {
      streetAddress: undefined,
      addressLocality: undefined,
      addressRegion: undefined,
      postalCode: undefined,
      addressCountry: undefined,
    },
    geo: {
      latitude: undefined,
      longitude: undefined,
    },
    images: [undefined],
    sameAs: [undefined],
    openingHours: [
      {
        opens: undefined,
        closes: undefined,
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        validFrom: undefined,
        validThrough: undefined,
      },
      {
        opens: undefined,
        closes: undefined,
        dayOfWeek: undefined,
        validFrom: undefined,
        validThrough: undefined,
      },
    ],
    rating: {
      ratingValue: undefined,
      ratingCount: undefined,
    },
    review: [
      {
        author: undefined,
        datePublished: undefined,
        name: undefined,
        reviewBody: undefined,
        reviewRating: {
          bestRating: undefined,
          worstRating: undefined,
          reviewAspect: undefined,
          ratingValue: undefined,
        },
      },
      {
        author: undefined,
        datePublished: undefined,
        name: undefined,
        reviewBody: undefined,
        reviewRating: {
          ratingValue: undefined,
        },
      },
    ],
    makesOffer: [
      {
        priceSpecification: {
          type: undefined,
          priceCurrency: undefined,
          price: undefined,
        },
        itemOffered: {
          name: undefined,
          description: undefined,
        },
      },
      {
        priceSpecification: {
          type: undefined,
          priceCurrency: undefined,
          price: undefined,
        },
        itemOffered: {
          name: undefined,
          description: undefined,
        },
      },
    ],
    areaServed: [
      {
        geoMidpoint: {
          latitude: undefined,
          longitude: undefined,
        },
        geoRadius: undefined,
      },
      {
        geoMidpoint: {
          latitude: undefined,
          longitude: undefined,
        },
        geoRadius: undefined,
      },
    ],
    action: {
      actionName: undefined,
      actionType: undefined,
      target: undefined,
    },
  },

  // Organization Details (OrganizationJsonLd) (Optional Per-Page)
  OrganizationJsonLd: {
    /* Notes
      INFO: https://github.com/garmeeh/next-seo#organization
      To be added on per-page basis
      
      To Use:
      import { OrganizationJsonLd } from "next-seo";
      import SEO from "next-seo.config";
      <OrganizationJsonLd {...SEO.OrganizationJsonLd} />
    */
    type: undefined,
    id: undefined,
    logo: undefined,
    legalName: undefined,
    name: undefined,
    address: {
      streetAddress: undefined,
      addressLocality: undefined,
      addressRegion: undefined,
      postalCode: undefined,
      addressCountry: undefined,
    },
    contactPoint: [
      {
        telephone: undefined,
        contactType: undefined,
        areaServed: undefined,
        availableLanguage: undefined,
      },
      {
        telephone: undefined,
        contactType: undefined,
        contactOption: undefined,
        availableLanguage: undefined,
      },
      {
        telephone: undefined,
        contactType: undefined,
        contactOption: undefined,
        areaServed: [undefined, undefined],
        availableLanguage: undefined,
      },
    ],
    sameAs: [undefined],
    url: undefined,
  },

  // Product Details (ProductJsonLd) (Optional Per-Page)
  ProductJsonLd: {
    /* Notes
      INFO: https://github.com/garmeeh/next-seo#product
      To be added on per-page basis
      
      To Use:
      import { ProductJsonLd } from "next-seo";
      import SEO from "next-seo.config";
      <ProductJsonLd {...SEO.ProductJsonLd} />
    */
    productName: undefined,
    images: [undefined],
    description: undefined,
    brand: undefined,
    color: undefined,
    manufacturerName: undefined,
    manufacturerLogo: undefined,
    material: undefined,
    slogan: undefined,
    disambiguatingDescription: undefined,
    releaseDate: undefined,
    productionDate: undefined,
    purchaseDate: undefined,
    award: undefined,
    reviews: [
      {
        author: undefined,
        datePublished: undefined,
        reviewBody: undefined,
        name: undefined,
        reviewRating: {
          bestRating: undefined,
          ratingValue: undefined,
          worstRating: undefined,
        },
        publisher: {
          type: undefined,
          name: undefined,
        },
      },
    ],
    aggregateRating: {
      ratingValue: undefined,
      reviewCount: undefined,
    },
    offers: [
      {
        price: undefined,
        priceCurrency: undefined,
        priceValidUntil: undefined,
        itemCondition: undefined,
        availability: undefined,
        url: undefined,
        seller: {
          name: undefined,
        },
      },
      {
        price: undefined,
        priceCurrency: undefined,
        priceValidUntil: undefined,
        itemCondition: undefined,
        availability: undefined,
        url: undefined,
        seller: {
          name: undefined,
        },
      },
    ],
    mpn: undefined,
  },

  // Persons Social Platforms (SocialProfileJsonLd) (Optional Per-Page)
  SocialProfileJsonLd: {
    /* Notes
      INFO: https://github.com/garmeeh/next-seo#social-profile
      To be added on per-page basis
      
      To Use:
      import { SocialProfileJsonLd } from "next-seo";
      import SEO from "next-seo.config";
      <SocialProfileJsonLd {...SEO.SocialProfileJsonLd} />
    */
    type: undefined,
    name: undefined,
    url: undefined,
    sameAs: [undefined],
  },

  // Video Details (VideoJsonLd) (Optional Per-Page)
  VideoJsonLd: {
    /* Notes
      INFO: https://github.com/garmeeh/next-seo#video-1
      To be added on per-page basis
      
      To Use:
      import { VideoJsonLd } from "next-seo";
      import SEO from "next-seo.config";
      <VideoJsonLd {...SEO.VideoJsonLd} />
    */
    name: undefined,
    description: undefined,
    thumbnailUrls: [undefined],
    contentUrl: undefined,
    embedUrl: undefined,
    uploadDate: undefined,
    duration: undefined,
  },
};
