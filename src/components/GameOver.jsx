import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Welldone from "../img/welldone.svg";


import'./GameOver.css'

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
        <h3>Parabéns voce chegou ao Fim do Jogo!</h3>
        <p>Sua Pontuação: {quizState.score}</p>
        <p>Voce Acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.</p>
        <img src={Welldone} alt="Fim do Quiz" />
        <button onClick={() => dispatch({type: "NEW_GAME" })}>Reiniciar Quiz</button>
    </div>
  )
}

export default GameOver