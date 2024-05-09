import React, { useRef } from 'react'
function CinemaSizeForm(props) {
	const rowRef = useRef(null);
	const columnRef = useRef(null);
	const handleButton = () => {
		props.setCinemaCreated(true)
		props.setCinemaSize({x:rowRef.current.value,y:columnRef.current.value})
	}
  return (
    <div>
      <div>
				<div>Number of rows</div>
				<input
					type='number'
					id='rows'
					name='rows'
					ref={rowRef}
				/>
			</div>
			<div>
				<div>Number of columns</div>
				<input
					type='number'
					id='columns'
					name='columns'
					ref={columnRef}
				/>
			</div>
			<div>
				<button onClick={handleButton}>Listo</button>
			</div>
    </div>
  )
}

export default CinemaSizeForm