function ButtonWithoutBackground(props:any) {
	const handleClick = () => {
		props.onClick("click on "+props.buttonText)
	}
  return (
    <button onClick={handleClick}>
        {props.buttonText}
    </button>
  )
}

export default ButtonWithoutBackground