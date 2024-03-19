import { useState, useEffect } from 'react'
import data  from './components/questions'
import './App.css'

function App() {


const [score, setScore] = useState(0);
const [showAnswer, setShowAnswer] = useState(Array(data.questions.length).fill(false))

const handleAnswer = (i) => {
  //add a div of answer, maybe using id to be specific with what answer has been shown to which question
  console.log(i)
  const updatedAnswer = [...showAnswer]
  updatedAnswer[i] = true;
  console.log(updatedAnswer)
  setShowAnswer(updatedAnswer)
  console.log(showAnswer)
}

const handleClick = (value, index, i) => {
  console.log(value);
  console.log(index);
  console.log(i)
  const question = data.questions[i];
  console.log(question)
  if (question && question.correctAnswer) {
    const correctAnswer = question.correctAnswer;
    console.log(correctAnswer)
    if (value === correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
  }
  console.log(score);
}


return (

<div>
  {data.questions.map((ele,i) => <div key={i}> <h2 key={i}>{ele.question}</h2>
  {ele.options.map((option, optionindex) => (<div key={optionindex}>
    <input key={optionindex} value={option} type="radio" onClick={() => handleClick(option, optionindex, i)}/>
    <span>{option}</span>
  </div>))}
  <button onClick={() => handleAnswer(i)} >Show Answer</button>
  {showAnswer[i] && <div>{ele.correctAnswer}</div>}
  </div>

  )}
  <div style={{fontSize: '30px', marginTop: '40px', marginLeft: '30%'}}>Score: {score}</div>
  <div>{score === 3 && <h2>Yay! You have won the matchWinner</h2>}</div>
</div>

)
}

export default App
