import Head from 'next/head';
import React from 'react';

/**
 * Accepts a string containing the directory of a favicon file and returns a link in the header formatted to display a favicon
 * 
*/

/* Favicon Notes:
    Please refer to https://developers.google.com/search/docs/appearance/favicon-in-search
    for a guide on creating proper favicons.
*/

// Component to display a favicon in the header for google SEO optimization
export default function Favicon({ dir }) {
    // Return favicon link
  return (
    <Head>
        <link rel='shortcut icon' href={dir}/>
    </Head>
  )
}