export function HistoryButton(props) {
  const {city} = props;
  return (
		<button 
			key={city} 
			id="cityButton" 
			onClick={()=>props.act(city)}
		>
			{city}
		</button>
	);
}