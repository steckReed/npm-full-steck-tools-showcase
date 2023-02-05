import { LogoJsonLd, NextSeo } from "next-seo";
import { PageSEO } from "@Assets/functions/SEO";
import { Autocomplete, TextField } from '@mui/material';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { useEffect, useState } from 'react';

export default function Home() {
  // SEO
    // Per-Page SEO
    const SEO = PageSEO({
      siteLogo    : "site/logo",
      url         : `${process.env.NEXT_PUBLIC_SITE_URL}/index`,
      title       : "Full Steck Tools Showcase",
      description : "Showcase for the npm package 'full-steck-tools'"
    });
  // SEO

  // Full (unsorted) List of Styles
  const [fullListOfStyles     , setFullListOfStyles]      = useState([]);

  // Styles Dropdown
  const [styleLabel           , setStyleLabel]            = useState("");
  const [styleValue           , setStyleValue]            = useState("");


  function cssIsClass(str) {
    return (str.includes('.'))
  }

  function cssClassHasSelector(str){
    return (str.includes(':'))
  }

  function cssStripSelector(str){
    return (str.split(':')[0]);
  }

  

  // If client window loaded
  if (typeof window !== "undefined") {

    // Get all styles within stylesheet
    if (fullListOfStyles.length == 0) {
      const documentStyleSheets = document.styleSheets;

      for (let i = 0; i < documentStyleSheets.length; i++){
        
        // Very poor way of checking for specific stylesheet....
        if (documentStyleSheets[i].cssRules.length > 7000) {
          setFullListOfStyles([documentStyleSheets[i].cssRules])
        }


      }
    }

  }


  // Sets list of Styles to display to user within selection dropdown
  const setStyleDropdownOptions = () => {
    let styleList = [];

  
    if (fullListOfStyles[0]){

      Object.values(fullListOfStyles[0]).map(key => {
        let currClassName = key['selectorText'];

        // Ensure name is defined
        if (currClassName) {
          currClassName = currClassName.trim();


          // For Nested (CSV) Class Names 
          if(currClassName.includes(',')){

            (currClassName.split(',')).map((currClassNameSplit) => {
              currClassNameSplit  = currClassNameSplit.trim();
              currClassName       = (cssClassHasSelector(currClassNameSplit)) ? cssStripSelector(currClassNameSplit) : currClassNameSplit;
              
              if ( cssIsClass(currClassName) ){
                let style = {
                  label     : `${currClassName}`,
                  value     : currClassName,
                }

                // Place created attribute obj into specific dropdown option
                if (!styleList.find(esp => esp.label == style.label)) {
                  styleList.push(style);
                }
              }
            })

          }

          // For Single Class Name
          else {
            currClassName = (cssClassHasSelector(currClassName)) ? cssStripSelector(currClassName) : currClassName;

            if ( cssIsClass(currClassName) ){
              let style = {
                label     : `${currClassName}`,
                value     : currClassName,
              }

              // Place created attribute obj into specific dropdown option
              if (!styleList.find(esp => esp.label == style.label)) {
                styleList.push(style);
              }
            }

          }
          
        }

      })

    }
      
    return styleList;
  };

  
  useEffect(() => {
    // Styles
    if (fullListOfStyles) {
      

      // // Styles Dropdown
      // setStyleLabel        (fullListOfStyles[0]['selectorText'])
      // setStyleValue        (fullListOfStyles[0]['selectorText'])
    }
    }, []
  );



  // Handles change of dropdown Style selection
  function handleStyleChange(event, option) {

    if (option && option.value) {
      
      // console.log(option);

    }

  }


  return (
    <>
      <LogoJsonLd {...SEO.LogoJsonLd} />
      <NextSeo {...SEO.DefaultSeo} />


      <Autocomplete
        disablePortal
        disableClearable
        id="selection-category-search"
        className='grid'
        size={"small"}
        value={styleLabel} // <- For Display
        onChange={handleStyleChange} // click on the show tags
        options={setStyleDropdownOptions()}
        sx={{ width: 'clamp(185px, 30vw, 450px) !important', margin: 'auto' }}

        renderInput={(params) => (
          <TextField {...params} label={`Selected Style`} margin="normal" />
        )}

        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.label, inputValue, { insideWords: true });
          const parts   = parse(option.label, matches);

          return (
            <li {...props}>
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            </li>
          );
        }}
      />

      
    </>
  );
}
