/* PageSEO Notes:
  Required:
   - LogoJsonLd
   - DefaultSeo

  Optional Per-page:
   - BrandJsonLd
   - JobPostingJsonLd
   - LocalBusinessJsonLd
   - OrganizationJsonLd
   - ProductJsonLd
   - SocialProfileJsonLd
   - VideoJsonLd
*/

export default function PageSEO({
  // Site Logo (LogoJsonLd)
    siteLogo          = undefined,

  // Site Default Details (DefaultSeo (AKA: NextSeo))
    // DEFAULTS
      // Title
      title           = undefined,
      titleTemplate   = undefined,
      defaultTitle    = undefined,

      // Description
      description     = undefined,
      keywords        = undefined,

      // Open Graph (:og)
      type            = undefined,
      locale          = undefined,
      url             = undefined, // Also Used for 'DefaultSeo.canonical', 'LogoJsonLd.url'
      site_name       = undefined,

    // SOCIALS
      // Twitter Handle
      twHandle        = undefined,
      twSite          = undefined,
      twCardType      = undefined,

  // Company Brand Info (BrandJsonLd)
    brandSlogan       = undefined,
    brandId           = undefined,
    brandLogo         = undefined,
    brandRatingValue  = undefined,
    brandRatingCount  = undefined,

  // Specified Job Posting (JobPostingJsonLd)
    jobPostingDateposted       = undefined,
    jobPostingDescription       = undefined,
    jobPostingTitle             = undefined,
    jobPostingEmploymenttype    = undefined,
    jobPostingJoblocationtype   = undefined,
    jobPostingValidthrough      = undefined,
    jobPostingApplicantlocationrequirements = undefined,

    // hiringOrganization
    jobPostingName              = undefined,
    jobPostingSameas            = undefined,

    // jobLocation
    jobPostingStreetaddress     = undefined,
    jobPostingAddresslocality   = undefined,
    jobPostingAddressregion     = undefined,
    jobPostingPostalcode        = undefined,
    jobPostingAddresscountry    = undefined,

    // baseSalary
    jobPostingCurrency          = undefined,
    jobPostingValue             = undefined,
    jobPostingUnittext          = undefined,
    
  // Local Business Details (LocalBusinessJsonLd)
    localBusinessType             = undefined,
    localBusinessId               = undefined,
    localBusinessName             = undefined,
    localBusinessDescription      = undefined,
    localBusinessUrl              = undefined,
    localBusinessTelephone        = undefined,
    
    // Address 
    localBusinessStreetaddress    = undefined,
    localBusinessAddresslocality  = undefined,
    localBusinessAddressregion    = undefined,
    localBusinessPostalcode       = undefined,
    localBusinessAddresscountry   = undefined,

    // Geo
    localBusinessLatitude         = undefined,
    localBusinessLongitude        = undefined,

    // Images
    localBusinessImages           = [undefined],

    // sameAs
    localBusinessSameas           = [undefined],

    // Opening Hours
    localBusinessOpens            = undefined,
    localBusinessCloses           = undefined,
    localBusinessDayofweek        = [undefined],
    localBusinessValidfrom        = undefined,
    localBusinessValidthrough     = undefined,

    // Rating
    localBusinessRatingvalue      = undefined,
    localBusinessRatingcount      = undefined,

    // Review
    localBusinessAuthor           = undefined,
    localBusinessDatepublished    = undefined,
    localBusinessReviewbody       = [undefined],
    localBusinessReviewrating     = [undefined],

    // Action
    localBusinessActionname       = undefined,
    localBusinessActiontype       = undefined,
    localBusinessTarget           = undefined,

  // Organization Details (OrganizationJsonLd)
    organizationType              = undefined,
    organizationId                = undefined,
    organizationLogo              = undefined,
    organizationLegalname         = undefined,
    organizationName              = undefined,

    // Address
    organizationStreetaddress     = undefined,
    organizationAddresslocality   = undefined,
    organizationAddressregion     = undefined,
    organizationPostalcode        = undefined,
    organizationAddresscountry    = undefined,

    // ContactPoint
    organizationTelephone         = undefined,
    organizationContacttype       = undefined,
    organizationContactoption     = undefined,
    organizationAreaserved        = undefined,
    organizationAvailablelanguage = undefined,

    organizationSameas            = undefined,
    organizationUrl               = undefined,
    
  // Product Details (ProductJsonLd)
    productProductname               = undefined,
    productImages                    = undefined,
    productDescription               = undefined,
    productBrand                     = undefined,
    productColor                     = undefined,
    productManufacturername          = undefined,
    productManufacturerlogo          = undefined,
    productMaterial                  = undefined,
    productSlogan                    = undefined,
    productDisambiguatingdescription = undefined,
    productReleasedate               = undefined,
    productProductiondate            = undefined,
    productPurchasedate              = undefined,
    productAward                     = undefined,
    productReviews                   = undefined,
    productMpn                       = undefined,

  // Persons Social Platforms (SocialProfileJsonLd)
    socialType        = undefined,
    socialName        = undefined,
    socialUrl         = undefined,
    socialSameas      = undefined,

  // Video Details (VideoJsonLd)
    videoName          = undefined,
    videoDescription   = undefined,
    videoThumbnailUrls = [ undefined ],
    videoContentUrl    = undefined,
    videoEmbedUrl      = undefined,
    videoUploadDate    = undefined,
    videoDuration      = undefined,

}) {
  const PageSEO = {
    
    // Site Logo (LogoJsonLd)
    LogoJsonLd: {
      logo: siteLogo,
      url:  url,
    },

    // Site Default Details (DefaultSeo (AKA: NextSeo))
    DefaultSeo: {
      // DEFAULTS
        // Title
        title         : title,
        titleTemplate : (titleTemplate !== undefined) ? titleTemplate+' %s': titleTemplate,
        defaultTitle  : defaultTitle,

        // Site Details
        canonical     : url,
        description   : description,
        keywords      : keywords,

        // Open Graph (:og)
        openGraph: {
          title       : title,
          description : description,
          type        : type,
          locale      : locale,
          url         : url,
          site_name   : site_name,
        },
      
      // SOCIALS
        // Twitter Handle
        twitter: {
          handle        : twHandle,
          site          : twSite,
          cardType      : twCardType,
        },
    },
    
    // Company Brand Info (BrandJsonLd)
    BrandJsonLd: {
      slogan        : brandSlogan,
      id            : brandId,
      logo          : brandLogo,
      aggregateRating: {
        ratingValue : brandRatingValue,
        ratingCount : brandRatingCount,
      },
    },

    // Specified Job Posting (JobPostingJsonLd)
    JobPostingJsonLd:{
      datePosted : jobPostingDateposted,
      description : jobPostingDescription,
      title : jobPostingTitle,
      employmentType : jobPostingEmploymenttype,
      jobLocationType : jobPostingJoblocationtype,
      validThrough : jobPostingValidthrough,
      applicantLocationRequirements : jobPostingApplicantlocationrequirements,

      hiringOrganization: {
        name : jobPostingName,
        sameAs : jobPostingSameas,
      },

      jobLocation: {
        streetAddress : jobPostingStreetaddress,
        addressLocality : jobPostingAddresslocality,
        addressRegion : jobPostingAddressregion,
        postalCode : jobPostingPostalcode,
        addressCountry : jobPostingAddresscountry,
      },

      baseSalary: {
        currency : jobPostingCurrency,
        value : jobPostingValue,
        unitText : jobPostingUnittext,
      },
    },

    // Local Business Details (LocalBusinessJsonLd)
    LocalBusinessJsonLd:{
      type : localBusinessType,
      id : localBusinessId,
      name : localBusinessName,
      description : localBusinessDescription,
      url : localBusinessUrl,
      telephone : localBusinessTelephone,

      address:{
        streetAddress : localBusinessStreetaddress,
        addressLocality : localBusinessAddresslocality,
        addressRegion : localBusinessAddressregion,
        postalCode : localBusinessPostalcode,
        addressCountry : localBusinessAddresscountry,
      },
      geo:{
        latitude : localBusinessLatitude,
        longitude : localBusinessLongitude,
      },
      images:[
        localBusinessImages
      ],
      sameAs : [
        localBusinessSameas
      ],

      // UNCLEAR HOW TO, BUT INSERT OPENING HOURS HERE

      rating: {
        ratingValue : localBusinessRatingvalue,
        ratingCount : localBusinessRatingcount,
      },

      review: {
        author : localBusinessAuthor,
        datePublished : localBusinessDatepublished,
        name : localBusinessName,
      },

      action: {
        actionName : localBusinessActionname,
        actionType : localBusinessActiontype,
        target : localBusinessTarget,
      }
    },

    // Organization Details (OrganizationJsonLd)
    OrganizationJsonLd:{
      type                  : organizationType,
      id                    : organizationId,
      logo                  : organizationLogo,
      legalName             : organizationLegalname,
      name                  : organizationName,

      address: {
        streetAddress       : organizationStreetaddress,
        addressLocality     : organizationAddresslocality,
        addressRegion       : organizationAddressregion,
        postalCode          : organizationPostalcode,
        addressCountry      : organizationAddresscountry,
      },

      contactPoint: [
        {
          telephone         : organizationTelephone,
          contactType       : organizationContacttype,
          contactOption     : organizationContactoption,
          areaServed        : organizationAreaserved,
          availableLanguage : organizationAvailablelanguage,
        }
      ],

      sameAs : organizationSameas,
      url : organizationUrl,


    },

    // Product Details (ProductJsonLd)
    ProductJsonLd:{
      productName               : productProductname,
      images                    : productImages,
      description               : productDescription,
      brand                     : productBrand,
      color                     : productColor,
      manufacturerName          : productManufacturername,
      manufacturerLogo          : productManufacturerlogo,
      material                  : productMaterial,
      slogan                    : productSlogan,
      disambiguatingDescription : productDisambiguatingdescription,
      releaseDate               : productReleasedate,
      productionDate            : productProductiondate,
      purchaseDate              : productPurchasedate,
      award                     : productAward,
      reviews                   : productReviews,
      mpn                       : productMpn,

    },

    // Persons Social Platforms  (SocialProfileJsonLd)
    SocialProfileJsonLd:{
      type          : socialType,
      name          : socialName,
      url           : socialUrl,
      sameAs        : socialSameas,

    },

    // Video Details (VideoJsonLd)
    VideoJsonLd: {
      name          : videoName,
      description   : videoDescription,
      thumbnailUrls : [ videoThumbnailUrls ],
      contentUrl    : videoContentUrl,
      embedUrl      : videoEmbedUrl,
      uploadDate    : videoUploadDate,
      duration      : videoDuration,
    }   
  };

  return PageSEO;
}
