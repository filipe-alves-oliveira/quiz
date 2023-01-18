import Quiz from "../img/quiz.svg";

import "./Welcome.css";

const Welcome = () => {
  return (
    <div id="welcome">
        <h2>Seja Bem-Vindo!!</h2>
        <p>Clique no botão abaixo para começar: </p>
        <button>INICIAR</button>
        <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome