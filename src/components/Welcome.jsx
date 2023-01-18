import { useContext } from "react";
import { QuizContext } from "../context/quiz"; //context onde consome, provider onde provem

import Quiz from "../img/quiz.svg";

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext); //quizState pega os valores e dispatch altera

  return (
    <div id="welcome">
      <h2>Seja Bem-Vindo!!</h2>
      <p>Clique no botão abaixo para começar: </p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        INICIAR
      </button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
};

export default Welcome;
