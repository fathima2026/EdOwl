import React, { useEffect , useState} from 'react';
import { checkWin } from '../helpers/helpers';



const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain,count}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
  const [score, setScore] = useState(0)


  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congratulations! You won! 😃';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  useEffect(()=>{

    if(finalMessage == 'Congratulations! You won! 😃'){
      setScore(score+1)
    }

  },[finalMessage])

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        {count<3 && <><button onClick={playAgain}>Next Question</button></> }
        {count==3 && <><button>Submit!<h3>your score is :{score}</h3></button></> } 
      </div>
    </div>
  )
}

export default Popup
