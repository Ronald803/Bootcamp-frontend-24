import React, { useContext, useRef } from 'react'
import { LanguagesContext } from './LanguageContext'

function LanguageAddForm() {
	const newLanguageRef = useRef(null)
	const {addLanguageToDB} = useContext( LanguagesContext)
	const addLanguage = ()=> {
		addLanguageToDB(newLanguageRef.current.value)
	}
	return (
    <div>
			<label>
        New Language: 
        <input type="text" ref={newLanguageRef}/>
      </label>
      <button onClick={addLanguage}>Add Language</button>
    </div>
  )
}

export default LanguageAddForm