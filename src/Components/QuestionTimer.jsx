import { useState, useEffect } from 'react'

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout, mode)
        return () => {
            clearTimeout(timer)
        }
    }, [onTimeout, timeout])

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 10)
        }, 10)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <progress id="question-time" max={timeout} value={remainingTime} className={mode} />
    )
}