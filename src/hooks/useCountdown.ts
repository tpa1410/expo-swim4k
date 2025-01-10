import { useState, useEffect, useRef } from 'react'

export function useCountdown(initialTime: number) {
  const [timeLeft, setTimeLeft] = useState(initialTime)
  const [isActive, setIsActive] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Start the countdown
  const startCountdown = () => {
    if (!isActive) {
      setIsActive(true)
    }
  }

  // Reset the countdown
  const resetCountdown = () => {
    setIsActive(false)
    setTimeLeft(initialTime)
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
  }

  // Manage the countdown
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    } else if (timeLeft <= 0 && timerRef.current) {
      clearInterval(timerRef.current)
      setIsActive(false)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isActive, timeLeft])

  return { timeLeft, startCountdown, resetCountdown, isActive }
}
