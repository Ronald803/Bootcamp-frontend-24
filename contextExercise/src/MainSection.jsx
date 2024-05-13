import React, { useContext } from 'react'
import { LanguagesContext } from '../LanguageContext'

function MainSection() {
	const {language} = useContext (LanguagesContext)
  console.log(language)
	return (
    <div>
      <p id="favoriteLanguage">favorite programing language: {language}</p>
      <button id="changeFavorite">toggle language</button>
    </div>
  )
}

export default MainSection