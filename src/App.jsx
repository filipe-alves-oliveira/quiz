//organizacao - react, components, estático

import Welcome from './components/Welcome';
import { useContext } from 'react';
import Question from './components/Question';
import { QuizContext } from './context/quiz';

import './App.css'


function App() {
  const [quizState, dispatch] = useContext(QuizContext); //quizState pega os valores e dispatch altera


  return (
    <div className="App">
        <h1>Quiz de Programação</h1>
        {quizState.gameStage === "Start" && <Welcome />} 
        {quizState.gameStage === "Playing" && <Question />}
    </div>
  )
}
//se quiz.state.gamestage = start imprimr
export default App;
