"use client"

import { useState } from "react"

const SearchForm = ({ onSearch, loading }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Try it here..."
        className="search-input"
        disabled={loading}
      />
      <button type="submit" className="search-button" disabled={loading || !searchTerm.trim()}>
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  )
}

export default SearchForm
