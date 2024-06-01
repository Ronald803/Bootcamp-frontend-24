import ButtonWithoutBackground from "../../atoms/buttons/ButtonWithoutBackground"
import '../../../styles/languageBar.css'
import { useContext } from "react"
import { GeneralContext } from "../../../modules/Context/GeneralContext"
import DropdownLanguageBar from "../../atoms/dropdowns/DropdownLanguageBar"
function LanguageBar() {
	const {languagesAvailable,setLanguageChoosen,setLanguagesAvailable,setAllLanguages,allLanguages} = useContext(GeneralContext)
	const handleSelectNewLanguage = (newLanguage:string) => {
		setLanguagesAvailable([...languagesAvailable,newLanguage])
		const auxLanguages = allLanguages
		const index = auxLanguages.findIndex(language=>language==newLanguage)
		auxLanguages.splice(index,1)
		setAllLanguages(auxLanguages)
	}
	return (
    <div className="navlanguage">
      <div className="navlanguage-text">Select a Language</div>
			<div className="navlanguage-buttons">
				{
					languagesAvailable.map((language:string,index:number) => (
						<ButtonWithoutBackground
							buttonText={language}
							onClick={setLanguageChoosen}
							key={index}
						/>
					))
				}
			</div>
			<DropdownLanguageBar
				options={["english","japanese"]}
				onSelect={handleSelectNewLanguage}
			/>
    </div>
  )
}

export default LanguageBar