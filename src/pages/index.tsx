import styles from '@Styles/_index.module.scss';
import { LogoJsonLd, NextSeo } from "next-seo";
import { PageSEO } from "@Assets/functions/SEO";
import { Autocomplete, SpeedDial, SpeedDialAction, SpeedDialIcon, TextField, Tooltip } from '@mui/material';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';

import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';


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

  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
  ];

  // Full (unsorted) List of Styles
  const fullListOfStyles = useMemo(() => {
    if (typeof window !== "undefined") {
      // If client window loaded

      // Get all styles within stylesheet
      const documentStyleSheets = document.styleSheets;

      for (let i = 0; i < documentStyleSheets.length; i++){
        
        // Very poor way of checking for specific stylesheet....
        if (documentStyleSheets[i].cssRules.length > 7000) {
          return([documentStyleSheets[i].cssRules])
        }


      }
    }
  },[]);

  // Styles Dropdown
  const [styleLabel           , setStyleLabel]            = useState([]);
  const [styleValue           , setStyleValue]            = useState([]);

  

  function cssIsClass(str) {
    return (str.includes('.'))
  }

  function cssClassHasSelector(str){
    return (str.includes(':'))
  }

  function cssStripSelector(str){
    return (str.split(':')[0]);
  }

  function getClassNameDesc(className){
    if (className.includes('active')){
      return('Click on Element to View Changes');
    }

    if (className.includes('hover')) {
      return ('Move Cursor Over Element to View Changes');
    }

    return ('')
  }

  


  // Sets list of Styles to display to user within selection dropdown
  const setStyleDropdownOptions = () => {
    let styleList = [];

  
    if (fullListOfStyles && fullListOfStyles[0]){
      
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
                currClassName = currClassName.split('.')[1]
                let style = {
                  label     : `${currClassName}`,
                  value     : (currClassName.includes('btn')) ? `btn ${currClassName}` : currClassName,
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
              currClassName = currClassName.split('.')[1]
              let style = {
                label     : `${currClassName}`,
                value     : (currClassName.includes('btn')) ? `btn ${currClassName}` : currClassName,
                desc      : getClassNameDesc(currClassName)
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


  const styleDropdownOptions  = setStyleDropdownOptions();
  const options               = styleDropdownOptions.map((option) => {
    const firstLetter = option.label[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  }).sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter));

  

  // Handle Init Load of dropdown pre-selected
  useEffect(() => {
    // Styles
    if (fullListOfStyles) {
      // // Styles Dropdown
      // setStyleLabel        (fullListOfStyles[0]['selectorText'])
      // setStyleValue        (fullListOfStyles[0]['selectorText'])
    }
    }, []
  );



  useEffect(() => {
    document.getElementById('element-to-change').className = styleValue.toString();
  })

  // Handles change of dropdown Style selection
  function handleStyleChange(event, option) {
      setStyleLabel((option[0]) ? option.map(({ label }) => label).join(' ').trim() : '');
      setStyleValue((option[0]) ? option.map(({ value }) => value).join(' ').trim() : '');
  }


  return (
    <>
      <LogoJsonLd {...SEO.LogoJsonLd} />
      <NextSeo {...SEO.DefaultSeo} />

      <div className={`grid-container bg-background `}>


        <div className={`grid bg-background shadow-3-theme-alt 
                        ${styles['resizable-container']} ${styles['element-to-change-container']} `}>
          
          <div id='element-to-change' className=''
            style={{ transition:'250ms' }}>
            <p>Full</p>
            <p>Steck</p>
            <p>Tools</p>
          </div>

        </div>

        

        <div className='position-fixed-bottom-middle bg-white shadow-5-theme-alt' style={{ borderRadius: '18px', padding:'12px', zIndex:'999'}}>
    

          {/* <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', bottom: 16, right: 16 }}
              icon={<SpeedDialIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          </Box> */}


          <Autocomplete
            multiple
            disablePortal
            id              = "selection-category-search"
            className       = 'grid mini-autocomplete'
            size            = {"small"}
            value           = {styleLabel[0]}     // <- For Display
            onChange        = {handleStyleChange} // click on the show tags
            options         = {options}
            groupBy         = {(option) => option.firstLetter}
            getOptionLabel  = {(option) => option.label}
            
            sx={{ width: 'clamp(185px, 70vw, 550px) !important', margin: 'auto' }}

            renderInput={(params) => (
              <TextField {...params} label={`Selected Style(s)`} margin="normal" />
            )}
            
            renderGroup={(params) => (
              <li key={params.key} style={{ marginTop: '-8px', zIndex:'10'}}>
                <div className='bg-offset' style={{ position:'sticky', top:'-8px', padding:'8px 10px', fontSize:'1.05rem' }}>{params.group}</div>
                <div>{params.children}</div>
              </li>
            )}

            renderOption={(props, option, { inputValue }) => {
              const matches = match(option.label, inputValue, { insideWords: true });
              const parts   = parse(option.label, matches);

              return (
              <>
                    
                    <motion.div 
                      // whileHover={{ y: '-2px'}}
                      whileTap={{ 
                        y:'2px', 
                        scale:'0.995',
                        transition: { duration: 0.15 },
                    }}>
                      <li {...props} className={`${styles['renderOption-container']} hover-shadow-2-black`}>
                        <div>

                          {parts.map((part, index) => (
                            <Tooltip title={''} placement="left">
                              <span
                                key   = { index }
                                style = {{ fontWeight: part.highlight ? 700 : 400 }}
                              >
                                {part.text}
                              </span>
                            </Tooltip>
                          ))}

                        </div>
                      </li>
                    </motion.div>

                
              </>);
            }}
          />

        </div>

      </div>
      
    </>
  );
}
