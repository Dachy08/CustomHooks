"use client"

import { useState, useCallback } from "react"

const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const playAudio = useCallback((audioUrl) => {
    if (!audioUrl) return

    setIsPlaying(true)
    const audio = new Audio(audioUrl)

    audio.onended = () => setIsPlaying(false)
    audio.onerror = () => setIsPlaying(false)

    audio.play().catch(() => {
      setIsPlaying(false)
    })
  }, [])

  return {
    isPlaying,
    playAudio,
  }
}

export default useAudio
