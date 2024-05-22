import ButtonWithoutBackground from "../../atoms/buttons/ButtonWithoutBackground";
function Navbar() {
  return (
    <div>
      <div>
				Pokedex
			</div>
			<div>
				<ButtonWithoutBackground
					buttonText="Game"
					onClick={console.log}
				/>
				<ButtonWithoutBackground
					buttonText="Langs"
					onClick={console.log}
				/>
				<ButtonWithoutBackground
					buttonText="Pokedex"
					onClick={console.log}
				/>
			</div>
    </div>
  )
}

export default Navbar