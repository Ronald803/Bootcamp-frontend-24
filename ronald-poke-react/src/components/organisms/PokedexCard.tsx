import '../../styles/pokedexCard.css'
function PokedexCard(props) {
  return (
    <div className="pokedex-card">
      <div className="card-header">
        <span className="card-name">{props.pokemon.id}. {props.pokemon.name}</span>
      </div>
      <div className="card-image">
        <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name} />
      </div>
      <div className="card-types">
        {props.pokemon.types.map((type, index) => (
          <span key={index} className="card-type">{type.type.name}</span>
        ))}
      </div>
    </div>
  )
}

export default PokedexCard