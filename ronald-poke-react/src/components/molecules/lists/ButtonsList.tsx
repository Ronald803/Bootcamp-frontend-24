import ButtonRed from "../../atoms/buttons/ButtonRed"

function ButtonsList(props:any) {
  return (
    <div>
			{
				props.arrayButtons.map((butt:string) => (
					<ButtonRed
						buttonText={butt}
						onClick={console.log}
					/>
				))
			}
		</div>
  )
}

export default ButtonsList