import "./styles.css";
import { useEffect, useState } from "react";


export default function App() {
  // Hooks
  const [randomColors, setRandomColors] = useState([]);
  const [guessColor, setGuessColor] = useState("");
  const [isCorrect, setIsCorrect] = useState("");
  const [newGame, setNewGame] = useState(false)
  
  useEffect(() => {
    
    const newGame = () => {
      const guessableColor = generateRandomColor();
      const randomNumber = Math.floor(Math.random() * 3)
      
      setGuessColor(guessableColor[randomNumber])
      setRandomColors(guessableColor)
    }
    
    setTimeout(() => {
      setIsCorrect("")
      newGame();
    }, 1000)
    
  }, [newGame])
 
  // Functions
  const handleColorGuess = (e) => {
    const selectedColor = e.currentTarget.value;
    
    if (selectedColor === guessColor) {
      setIsCorrect("yes")
      setNewGame(prev => !prev)
    } else {
      setIsCorrect("no")
    }
  }
  
  const generateRandomColor = () => {
    const colorArray = [];
    
    for (let i = 0; i < 3; i++) {
       const color = '#' + Math.floor(Math.random() * (256 * 256 * 256)).toString(16).padStart(6, '0')
       colorArray.push(color)
    }
    return colorArray;
    setRandomColors(colorArray)
  }

  return (
    <div className="App">
      <h1>Guess the color</h1>      
      <div className="color-cont" style={{backgroundColor: guessColor}}></div>
      <div className="button-group-cont">
        {randomColors.map((color, idx) => (
            <button value={color}
              key={idx}
              onClick={handleColorGuess}>
              {color}
            </button>
        ))}
      </div>
      <h4 className="lbl-guess-checker">
        {isCorrect === "yes" ? "Correct! ✅" : 
        isCorrect === "no" ? "Bad guess ❌" : null}
      </h4>
    </div>
  );
}
