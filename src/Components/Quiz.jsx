import { useState, useCallback } from 'react'
import QUESTIONS from '../questions.js'
import Summary from './Summary.jsx'
import Question from './Question.jsx'

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length

    const quizIsComplete = QUESTIONS.length === activeQuestionIndex

    const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer]
        })
    }, [])

    const handleSkipAnswer = useCallback(() => handleSelectedAnswer(null), [handleSelectedAnswer])

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers}/>
    }

    return (
        <div id='quiz'>
            <Question
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectedAnswer}
            onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}