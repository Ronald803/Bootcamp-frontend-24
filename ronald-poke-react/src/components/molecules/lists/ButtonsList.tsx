import ButtonRed from "../../atoms/buttons/ButtonRed"
import '../../../styles/buttonList.css'
import { useContext } from "react"
import { GeneralContext } from "../../../modules/Context/GeneralContext"
function ButtonsList(props) {
  const { setPokemonChoosenGame } = useContext(GeneralContext)
	const handlePokemonChoosen = (pokemon) => {
		setPokemonChoosenGame(pokemon)
	}
	return (
    <div className="buttonlist">
			{
				props.arrayButtons.map((butt:any,i:number) => (
					<ButtonRed
						buttonText={butt.name}
						onClick={handlePokemonChoosen}
						idButton={butt.id}
						key={i}
					/>
				))
			}
		</div>
  )
}

export default ButtonsList