"use client"

import useAudio from "../hooks/useAudio"

const WordCard = ({ wordData }) => {
  const { playAudio } = useAudio()

  const getAudioUrl = (phonetics) => {
    return phonetics?.find((p) => p.audio)?.audio || null
  }

  const getPhoneticText = (phonetics) => {
    return phonetics?.find((p) => p.text)?.text || ""
  }

  return (
    <div className="word-card">
      <div className="word-header">
        <div>
          <h2 className="word-title">{wordData.word}</h2>
          {getPhoneticText(wordData.phonetics) && <p className="phonetic">{getPhoneticText(wordData.phonetics)}</p>}
        </div>
        {getAudioUrl(wordData.phonetics) && (
          <button
            onClick={() => playAudio(getAudioUrl(wordData.phonetics))}
            className="audio-button"
            title="Play pronunciation"
          >
            🔊
          </button>
        )}
      </div>

      <div className="meanings-section">
        {wordData.meanings?.map((meaning, index) => (
          <div key={index} className="meaning-item">
            <h3 className="part-of-speech">{meaning.partOfSpeech}</h3>

            {meaning.definitions && (
              <ul className="definitions-list">
                {meaning.definitions.map((def, defIndex) => (
                  <li key={defIndex} className="definition-item">
                    <p className="definition-text">{def.definition}</p>
                    {def.example && <p className="example">Example: "{def.example}"</p>}
                  </li>
                ))}
              </ul>
            )}

            {meaning.synonyms && meaning.synonyms.length > 0 && (
              <div className="synonyms-section">
                <p className="synonyms-title">Synonyms:</p>
                <div className="synonyms-list">
                  {meaning.synonyms.map((synonym, synIndex) => (
                    <span key={synIndex} className="synonym">
                      {synonym}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {meaning.antonyms && meaning.antonyms.length > 0 && (
              <div className="antonyms-section">
                <p className="antonyms-title">Antonyms:</p>
                <div className="antonyms-list">
                  {meaning.antonyms.map((antonym, antIndex) => (
                    <span key={antIndex} className="antonym">
                      {antonym}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default WordCard
