import Head from 'next/head';
import React from 'react';

/**
 * Accepts an object containing specifier tags in the tags prop and returns a LD JSON script block 
 * that will be recognized by google as structured data for Rich Results preview. Description tags are handled by the SEO class 
 * and can be ommitted from this one.
*/

/* GoogleRichResults.tsx Notes:
 
    Check https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data for more info
    and try using https://search.google.com/test/rich-results to test the component on your page.

    List of common structured data tags: https://developers.google.com/search/docs/appearance/structured-data/search-gallery
    and examples of how to use them.

    Rcommendations on making proper description tags:https://developers.google.com/search/docs/appearance/snippet#meta-descriptions

    Place in the code for your page like this:
    -------Outside of the JSX-------
      const myTags = {"@context": "https://schema.org/",
        "@type": "Recipe",
        "name": "Chocolate Cake",
        "author": {
          "@type": "Person",
          "name": "Bob Jones"
        },
        "datePublished": "2022-10-6",
        "description": "A chocolate cake perfect for birthdays.",
        "prepTime": "PT40M"}
    --------Inside of the JSX--------
      <GoogleRichResults richtags={myTags}/>


*/

// Component to output a structured data tag for google search engine optimization
export default function GoogleRichResults({ richTags }) {
  // Return a block of LD JSON for google structured data
  return (
    <Head>
      <script key = "rich-results-Id" type="application/ld+json">{JSON.stringify(richTags)}</script>
    </Head>
  );
}