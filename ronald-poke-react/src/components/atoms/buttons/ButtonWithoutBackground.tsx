import '../../../styles/buttonWithoutBackground.css'
function ButtonWithoutBackground(props:any) {
	const handleClick = () => {
		props.onClick("click on "+props.buttonText)
	}
  return (
    <button onClick={handleClick} className='button-without-background'>
        {props.buttonText}
    </button>
  )
}

export default ButtonWithoutBackground