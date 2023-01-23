//organizacao - react, components, estático

import Welcome from './components/Welcome';
import { useContext, useEffect } from 'react';
import Question from './components/Question';
import { QuizContext } from './context/quiz';
import GameOver from './components/GameOver';

import './App.css'


function App() {
  const [quizState, dispatch] = useContext(QuizContext); //quizState pega os valores e dispatch altera

  useEffect(() => {
    dispatch ({type: "REORDER_QUESTIONS"})//embaralhar as perguntas
  }, [])

  return (
    <div className="App">
        <h1>Quiz de Programação</h1>
        {quizState.gameStage === "Start" && <Welcome />} 
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}
//se quiz.state.gamestage = start imprimr welcome
export default App;
