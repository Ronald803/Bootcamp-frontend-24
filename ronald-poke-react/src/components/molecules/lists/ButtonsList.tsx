import ButtonRed from "../../atoms/buttons/ButtonRed"
import '../../../styles/buttonList.css'
function ButtonsList(props:any) {
  return (
    <div className="buttonlist">
			{
				props.arrayButtons.map((butt:string) => (
					<ButtonRed
						buttonText={butt}
						onClick={props.setPokemonChoosen}
					/>
				))
			}
		</div>
  )
}

export default ButtonsList