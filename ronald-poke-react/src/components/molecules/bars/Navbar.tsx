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
				<a href="/game">
					<ButtonWithoutBackground
						buttonText="Game"
						onClick={console.log}
					/>
				</a>
				<ButtonWithoutBackground
					buttonText="Langs"
					onClick={console.log}
				/>
				<a href="/Pokedex">
					<ButtonWithoutBackground
						buttonText="Pokedex"
						onClick={console.log}
					/>
				</a>
			</div>
    </div>
  )
}

export default Navbar