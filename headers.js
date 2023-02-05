// https://nextjs.org/docs/advanced-features/security-headers

module.exports = [
  {
    // Controls DNS prefetching, allowing browsers to proactively perform domain name resolution on external links, images, CSS, JavaScript, and more.
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    // Informs browsers it should only be accessed using HTTPS, instead of using HTTP. 
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Server',
    value: 'Apache', // phony server value
  },
  {
    // Prevents the browser from attempting to guess the type of content if the Content-Type header is not explicitly set. 
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    // Indicates whether the site should be allowed to be displayed within an iframe.
    key: 'X-Frame-Options',
    // value: 'sameorigin', // Allow
    value: 'deny',       // Disallow
  },
  {
    // Stops pages from loading when they detect reflected cross-site scripting (XSS) attacks. 
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    // Controls how much information the browser includes when navigating from the current website (origin) to another. 
    key: 'Referrer-Policy',
    value: 'same-origin',
  },
  {
    // Allows you to control which features and APIs can be used in the browser. 
    key: 'Permissions-Policy',
    value: 'geolocation=*', // allow specified policies here
  },
];
