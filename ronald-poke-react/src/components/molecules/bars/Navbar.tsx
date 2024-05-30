import ButtonWithoutBackground from "../../atoms/buttons/ButtonWithoutBackground";
import '../../../styles/navbar.css';
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
				<img src="/pokeball.png" className="navbar-logo-img"/>
				Pokedex
			</div>
			<div className="navbar-buttons">
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