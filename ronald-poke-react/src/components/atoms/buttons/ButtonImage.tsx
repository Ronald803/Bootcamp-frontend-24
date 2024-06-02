import '../../../styles/buttonImage.css'

function ButtonImage(props) {
  const handleClick = () => {
		props.onClick(props.name)
	}
	return (
	<button 
		className='flag-button'
		onClick={handleClick} 
		>
		<img 
			src={props.imageUrl} 
			alt="flag" 
			width='50px'
			height='50px'
		/>
	</button>
  )
}

export default ButtonImage