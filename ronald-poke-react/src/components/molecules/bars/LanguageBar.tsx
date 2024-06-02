import ButtonWithoutBackground from "../../atoms/buttons/ButtonWithoutBackground"
import '../../../styles/languageBar.css'
import { useContext } from "react"
import { GeneralContext } from "../../../modules/Context/GeneralContext"
import DropdownLanguageBar from "../../atoms/dropdowns/DropdownLanguageBar"
import ButtonImage from "../../atoms/buttons/ButtonImage"
function LanguageBar() {
	const {languagesAvailable,setLanguageChoosen,setLanguagesAvailable,setAllLanguages,allLanguages} = useContext(GeneralContext)
	const handleSelectNewLanguage = (newLanguage) => {
		console.log(newLanguage)
		setLanguagesAvailable([...languagesAvailable,newLanguage])
		const auxLanguages = allLanguages
		const index = auxLanguages.findIndex(language=>language.name==newLanguage.name)
		auxLanguages.splice(index,1)
		setAllLanguages(auxLanguages)
	}
	return (
    <div className="navlanguage">
      <div className="navlanguage-text">Select a Language</div>
			<div className="navlanguage-buttons">
				{
					languagesAvailable.map((language,index:number) => (
						// <ButtonWithoutBackground
						// 	buttonText={language.name}
						// 	onClick={setLanguageChoosen}
						// 	key={index}
						// />
						<ButtonImage
							name={language.name}
							imageUrl={language.flagImg}
							onClick={setLanguageChoosen}
						/>
					))
				}
			</div>
			<div className="navlanguage-dropdown">
				<DropdownLanguageBar onSelect={handleSelectNewLanguage}/>
			</div>
    </div>
  )
}

export default LanguageBar