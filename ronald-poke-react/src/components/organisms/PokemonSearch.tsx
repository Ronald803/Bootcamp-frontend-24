import InputButton from '../molecules/inputs/InputButton'

function PokemonSearch() {
  const handleClick = (a) => {
		console.log(a)
	}
	return (
    <div>
			<InputButton
				onClick={handleClick} 
				onClickTwo={handleClick}
				type={"text"}
				buttonText={"Search"}
			/>
		</div>
  )
}

export default PokemonSearch