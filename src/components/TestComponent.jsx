"use client"

const TestComponent = () => {
  const testAPI = async () => {
    try {
      const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
      const data = await response.json()
      console.log("API Test Success:", data)
      alert("API is working! Check console for details.")
    } catch (error) {
      console.error("API Test Failed:", error)
      alert("API test failed: " + error.message)
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 1000,
        background: "#f0f0f0",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <button
        onClick={testAPI}
        style={{
          background: "#007bff",
          color: "white",
          border: "none",
          padding: "5px 10px",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        Test API
      </button>
    </div>
  )
}

export default TestComponent
