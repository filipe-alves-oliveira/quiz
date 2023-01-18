import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { QuizProvider } from "./context/quiz"; //o contexto vai importar do componentes utilizados e o provedor aqui vai prover o contexto dos componentes

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
