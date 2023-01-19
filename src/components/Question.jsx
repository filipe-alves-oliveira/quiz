import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState);

  return (
    <div>Questions</div>
  )
}

export default Questions