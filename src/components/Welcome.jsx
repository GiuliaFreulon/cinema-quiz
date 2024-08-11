// React
import { useContext } from "react";

// Context
import { QuizContext } from "../context/quiz";

// CSS
import "./Welcome.css";

// Images
import Quiz from "../img/quiz.svg";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Início do quiz" />
    </div>
  );
};

export default Welcome;
