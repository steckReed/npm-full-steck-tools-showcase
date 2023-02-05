/*
   Dynamic Error Trapping Page
   When a URL error is encountered, NEXT will automatically
   route to the _error.js page and dynamically displays
   the error and corresponding message that is encountered.

   IMPORTANT: Due to the frequency at which the 404 page may
   be encountered, a 404.js page should be created to benefit
   from having it statically generated as opposed to this method. 
*/

import styles from '@Styles/_error.module.scss'
import { LogoJsonLd, NextSeo } from "next-seo";
import { PageSEO } from "@Assets/functions/SEO";


function Error({ statusCode }) {
  // SEO
    // Per-Page SEO
    const SEO = PageSEO({
      siteLogo    : "site/logo",
      url         : `${process.env.NEXT_PUBLIC_SITE_URL}/index`,
      title       : { `Error | ${statusCode}` },
      description : `Oh no, ${statusCode} Error`
    });
  // SEO


  // This is not an exhaustive list of statusCodes
  // a complete list of standard codes can be
  // found here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

  const errors = {
    0: 'Error',
    400: 'Bad Request',
    401: 'Unauthorized Request',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    418: 'I am a teapot',
    421: 'Misdirect Request',
    422: 'Unprocessable Entity (WebDAV)',
    423: 'Locked (WebDAV)',
    424: 'Failed Dependency (WebDAV)',
    425: 'Too Early',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    451: 'Unavailable For Legal Reasons',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage (WebDAV)',
    508: 'Loop Detected (WebDAV)',
    510: 'Not Extended',
    511: 'Network Auth Required',
    null: 'Error With Return',
  }

  let errMsg = "Error not specified in _error.tsx"
  const errMap = new Map(Object.entries(errors)); //Turn object into a map for O(1) lookups

  if (statusCode == null)
    errMsg = 'Error With Return'
  else if (errMap.has(statusCode.toString()))
    errMsg = errMap.get(statusCode.toString())
  else
    errMsg = "Error not specified in _error.tsx"


  return (
    <>
      <LogoJsonLd {...SEO.LogoJsonLd} />
      <NextSeo {...SEO.DefaultSeo} />

      <div className={styles["error-page-container"]}>
        <h1>
          {`Oh no, ${statusCode} Error`}
        </h1>
        <h3>
          ({errMsg})
        </h3>
      </div>
    </>
  )
}

// Getting Error Status Code
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
