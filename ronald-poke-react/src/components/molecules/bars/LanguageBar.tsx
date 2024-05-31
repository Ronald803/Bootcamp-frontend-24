import ButtonWithoutBackground from "../../atoms/buttons/ButtonWithoutBackground"
import '../../../styles/languageBar.css'
import { useContext } from "react"
import { GeneralContext } from "../../../modules/Context/GeneralContext"
import DropdownLanguageBar from "../../atoms/dropdowns/DropdownLanguageBar"
function LanguageBar(props:any) {
	const {languagesAvailable} = useContext(GeneralContext)
	return (
    <div className="navlanguage">
      <div className="navlanguage-text">Select a Language</div>
			<div className="navlanguage-buttons">
				{
					languagesAvailable.map((language:string,index:number) => (
						<ButtonWithoutBackground
							buttonText={language}
							onClick={props.setLanguageChoosen}
							key={index}
						/>
					))
				}
			</div>
			<DropdownLanguageBar
				options={["english","japanese"]}
				onSelect={console.log}
			/>
    </div>
  )
}

export default LanguageBar