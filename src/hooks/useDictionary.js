"use client"

import { useState, useCallback } from "react"

const useDictionary = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchWord = useCallback(async (word) => {
    if (!word.trim()) {
      setError("Please enter a word to search")
      return
    }

    setLoading(true)
    setError(null)
    setData(null)

    try {
      const cleanWord = word
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z]/g, "")

      if (!cleanWord) {
        throw new Error("Please enter a valid word with only letters")
      }

      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${cleanWord}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`No definition found for "${word}". Please check the spelling and try again.`)
        }
        if (response.status >= 500) {
          throw new Error("Dictionary service is temporarily unavailable. Please try again later.")
        }
        throw new Error(`Error ${response.status}: Unable to fetch definition. Please try again.`)
      }

      const result = await response.json()

      if (!result || result.length === 0) {
        throw new Error("No definition found for this word.")
      }

      setData(result)
    } catch (err) {
      console.error("Dictionary API Error:", err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const clearResults = useCallback(() => {
    setData(null)
    setError(null)
  }, [])

  return {
    data,
    loading,
    error,
    searchWord,
    clearResults,
  }
}

export default useDictionary
