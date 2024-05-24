import ButtonWithoutBackground from "../../atoms/buttons/ButtonWithoutBackground"
import '../../../styles/languageBar.css'
function LanguageBar() {
  const languagesAvailable = ["English", "Spanish", "Japanese"]
	return (
    <div className="navlanguage">
      <div className="navlanguage-text">Select a Language</div>
			<div className="navlanguage-buttons">
				{
					languagesAvailable.map((language) => (
						<ButtonWithoutBackground
							buttonText={language}
							onClick={console.log}
						/>
					))
				}
			</div>
    </div>
  )
}

export default LanguageBar