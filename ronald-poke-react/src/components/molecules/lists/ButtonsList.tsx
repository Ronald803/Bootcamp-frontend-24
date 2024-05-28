import ButtonRed from "../../atoms/buttons/ButtonRed"
import '../../../styles/buttonList.css'
function ButtonsList(props:any) {
  return (
    <div className="buttonlist">
			{
				props.arrayButtons.map((butt:any) => (
					<ButtonRed
						buttonText={butt.name}
						onClick={props.setPokemonChoosen}
						idButton={butt.id}
					/>
				))
			}
		</div>
  )
}

export default ButtonsList