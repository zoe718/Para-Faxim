import { useEffect, useState } from 'react'
import './FloatingLilies.css'

const FloatingLilies = () => {
  const [lilies, setLilies] = useState([])

  useEffect(() => {
    const lilyElements = []
    for (let i = 0; i < 15; i++) {
      const isBlue = i % 2 === 0
      lilyElements.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 25 + Math.random() * 20,
        size: 0.5 + Math.random() * 0.8,
        color: isBlue ? 'blue' : 'red'
      })
    }
    setLilies(lilyElements)
  }, [])

  return (
    <div className="floating-lilies-container">
      {lilies.map(lily => (
        <div
          key={lily.id}
          className={`floating-lily lily-${lily.color}`}
          style={{
            left: `${lily.left}%`,
            animationDelay: `${lily.delay}s`,
            animationDuration: `${lily.duration}s`,
            opacity: lily.size * 0.3,
            transform: `scale(${lily.size})`
          }}
        >
          ✮
        </div>
      ))}
    </div>
  )
}

export default FloatingLilies