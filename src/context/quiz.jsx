import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0, //para saber pergunta atual, criado estado para estar mudando isso 
}

const quizReducer = (state, action) => {  //altera stado q ta o jogo, acao q modifica o estado do jogo 
    console.log(state, action);

    switch(action.type){
        case "CHANGE_STATE":
            return {
                ...state, //spread operator
                gameStage: STAGES[1],
            };
        
        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5; //embaralhar o obj
            })
            return {
            ...state,
            questions: reorderedQuestions,
            };

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;

            return {
                ...state,
                currentQuestion: nextQuestion
            };

        default:
            return state;
    }
};

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}