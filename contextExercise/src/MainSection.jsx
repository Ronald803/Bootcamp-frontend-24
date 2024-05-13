import React, { useContext } from 'react'
import { LanguagesContext } from './LanguageContext'

function MainSection() {
	const {language,toggleLanguage} = useContext (LanguagesContext)
  return (
    <div>
      <p id="favoriteLanguage">favorite programing language: {language}</p>
      <button id="changeFavorite" onClick={toggleLanguage}>toggle language</button>
    </div>
  )
}

export default MainSection