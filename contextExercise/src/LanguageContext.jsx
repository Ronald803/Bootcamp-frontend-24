import React, { createContext, useState } from "react";
import { languages } from "./LanguagesDB";

const LanguagesContext = createContext();
const LanguageContextProvider = ({children}) => {
    const [language, setLanguage] = useState(languages[0])
    const toggleLanguage = () => {
      let index = languages.findIndex(lang=>lang==language)
      if(index == (languages.length - 1)){
        index = 0
      } else {
        index = index + 1
      }
      setLanguage(languages[index])
    }
  return (
    <LanguagesContext.Provider value={{language,toggleLanguage}}>
        {children}
    </LanguagesContext.Provider>
  )
}

export {LanguageContextProvider,LanguagesContext}