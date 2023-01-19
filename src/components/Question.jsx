import React from 'react';

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);

    console.log(quizState);
    
  return (
    <div>Questions</div>
  )
}

export default Questions