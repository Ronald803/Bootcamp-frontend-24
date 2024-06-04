import {useRef} from 'react'
import ButtonRed from '../../atoms/buttons/ButtonRed'

function InputButton(props) {
	const inputRef = useRef(null)
	const handleClick = () => {
		props.onClickTwo(0)
		props.onClick(inputRef.current.value)
	}
  return (
    <div>
      <input type="number" ref={inputRef}/>
			<ButtonRed buttonText={"Set limit"} onClick={handleClick} idButton={null}/>
    </div>
  )
}

export default InputButton