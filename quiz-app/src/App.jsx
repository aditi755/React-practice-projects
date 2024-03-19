import { useState, useEffect } from 'react'
import data  from './components/questions'
import './App.css'

function App() {


const [score, setScore] = useState(0);
const [selectedOptions, setSelectedOptions] = useState(Array(data.questions.length).fill(null))
const [showAnswer, setShowAnswer] = useState(Array(data.questions.length).fill(false))
const [correctlySelected, setCorrectlySelected] = useState(Array(data.questions.length).fill(false));

const handleAnswer = (i) => {
  //add a div of answer, maybe using id to be specific with what answer has been shown to which question
  console.log(i)
  const updatedAnswer = [...showAnswer]
  updatedAnswer[i] = true;
  console.log(updatedAnswer)
  setShowAnswer(updatedAnswer)
  console.log(showAnswer)
}


const handleClick = (value, questionIndex) => {
  const selectedOption = selectedOptions[questionIndex];
  const question = data.questions[questionIndex];

  if (selectedOption !== value) {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = value;
    setSelectedOptions(updatedSelectedOptions);
  }

  if (question && value === question.correctAnswer && !correctlySelected[questionIndex]) {
    setScore(prevScore => prevScore + 1);
    const updatedCorrectlySelected = [...correctlySelected];
    updatedCorrectlySelected[questionIndex] = true;
    setCorrectlySelected(updatedCorrectlySelected);
  }
};



return (

<div>
  {data.questions.map((ele,i) => <div key={i}> <h2 key={i}>{ele.question}</h2>
  {ele.options.map((option, optionindex ) => (<div key={optionindex}>
    <input key={optionindex} value={option} type="radio" checked={selectedOptions[i] === option} onClick={() => handleClick(option, i, optionindex)}/>
    <span>{option}</span>
  </div>))}

  <button onClick={() => handleAnswer(i)} >Show Answer</button>
  {showAnswer[i] && <div>{ele.correctAnswer}</div>}
  </div>

  )}
  <div style={{fontSize: '30px', marginTop: '40px', marginLeft: '30%'}}>Score: {score}</div>
  <div>{score >= 3 && <h2>Yay! You have won the matchWinner</h2>}</div>
</div>

)
}

export default App
