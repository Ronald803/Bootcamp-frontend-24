import ButtonWithoutBackground from "../../atoms/buttons/ButtonWithoutBackground"
import '../../../styles/languageBar.css'
function LanguageBar(props:any) {
	return (
    <div className="navlanguage">
      <div className="navlanguage-text">Select a Language</div>
			<div className="navlanguage-buttons">
				{
					props.languagesAvailable.map((language:string,index:number) => (
						<ButtonWithoutBackground
							buttonText={language}
							onClick={props.setLanguageChoosen}
							key={index}
						/>
					))
				}
			</div>
    </div>
  )
}

export default LanguageBar