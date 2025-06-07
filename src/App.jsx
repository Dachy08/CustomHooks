import "./App.css"
import useDictionary from "./hooks/useDictionary"
import SearchForm from "./components/SearchForm"
import WordCard from "./components/WordCard"
import TestComponent from "./components/TestComponent"

function App() {
  const { data, loading, error, searchWord } = useDictionary()

  return (
    <div className="app">
      <TestComponent />

      <header className="header">
        <h1 className="title">Dictionary</h1>
        <p className="subtitle">Find definitions, pronunciations, and more</p>
      </header>

      <SearchForm onSearch={searchWord} loading={loading} />

      {loading && <div className="loading">Searching for word...</div>}

      {error && <div className="error">{error}</div>}

      {data && data.length > 0 && (
        <div>
          {data.map((wordData, index) => (
            <WordCard key={index} wordData={wordData} />
          ))}
        </div>
      )}

      {data && data.length === 0 && (
        <div className="no-results">No definitions found. Please try a different word.</div>
      )}
    </div>
  )
}

export default App
