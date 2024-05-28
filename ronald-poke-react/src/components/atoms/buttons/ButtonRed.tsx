import '../../../styles/buttonBackgroundRed.css'
function ButtonRed(props:any) {
	const handleClick = () => {
		props.onClick(props.buttonText)
	}
  return (
		<button onClick={handleClick} className='button-background-red'>
			{props.buttonText}
		</button>
  )
}

export default ButtonRed