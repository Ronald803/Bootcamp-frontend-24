import React from 'react'
import { createContext, useState } from "react";

const LanguagesContext = createContext();
const LanguageContextProvider = ({children}) => {
    const languages = ['JavaScript', 'Python'];
    const [language, setLanguage] = useState(languages[0])
    const toggleLanguage = () => {
      setLanguage(languages[1])
    }
  return (
    <LanguageContextProvider.Provider value={{language,toggleLanguage}}>
        {children}
    </LanguageContextProvider.Provider>
  )
}

export {LanguageContextProvider,LanguagesContext}