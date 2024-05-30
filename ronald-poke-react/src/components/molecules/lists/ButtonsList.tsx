import ButtonRed from "../../atoms/buttons/ButtonRed"
import '../../../styles/buttonList.css'
import { useContext } from "react"
import { GeneralContext } from "../../../modules/Context/GeneralContext"
function ButtonsList(props) {
  const { 
		gameScore, 
		setGameScore, 
		oneRandomNumber,
		setIsGameStarted,
		setPokemonImageClass,
		pokemonsRandomFour
	 } = useContext(GeneralContext)
	const handlePokemonChoosen = (pokeNameChoosen,pokeIdChoosen) => {
		if(pokemonsRandomFour[oneRandomNumber].id  == pokeIdChoosen){
			setGameScore(gameScore+1)
		}
		setPokemonImageClass('game-imagepokemon')
		setIsGameStarted(false)
	}
	return (
    <div className="buttonlist">
			{
				pokemonsRandomFour.map((butt:any,i:number) => (
					<ButtonRed
						buttonText={butt.name}
						onClick={()=>handlePokemonChoosen(butt.name,butt.id)}
						idButton={butt.id}
						key={i}
					/>
				))
			}
		</div>
  )
}

export default ButtonsList