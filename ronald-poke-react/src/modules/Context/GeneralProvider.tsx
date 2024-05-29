import { useState } from "react";
import { GeneralContext } from "./GeneralContext";

export const GeneralProvider = ({ children }) => {
	const [gameScore, setGameScore] = useState(-1)
  const [isRoundFinished, setIsRoundFinished] = useState(false)
	
	return (
    <GeneralContext.Provider
			value={{
				gameScore,setGameScore,
				isRoundFinished,setIsRoundFinished
			}}
		>
      { children }
    </GeneralContext.Provider>
  )
}