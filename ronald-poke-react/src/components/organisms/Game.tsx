import ButtonsList from "../molecules/lists/ButtonsList"

function Game() {
  const pokemonOptions = ["Pikachu","Charizard","Gengar","Articuno"]
  return (
    <div>
        <ButtonsList arrayButtons={pokemonOptions} />
    </div>
  )
}

export default Game