import React, { createContext, useState } from "react";

const LanguagesContext = createContext();
const LanguageContextProvider = ({children}) => {
    const languages = ['JavaScript', 'Python'];
    const [language, setLanguage] = useState(languages[0])
    const toggleLanguage = () => {
      setLanguage(languages[1])
    }
  return (
    <LanguagesContext.Provider value={{language,toggleLanguage}}>
        {children}
    </LanguagesContext.Provider>
  )
}

export {LanguageContextProvider,LanguagesContext}