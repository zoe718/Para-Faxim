import { Heart, Book, Sparkles } from 'lucide-react'
import './HomePage.css'

const HomePage = ({ onNavigate }) => {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="title-section">
          <h1 className="main-title">
            Para, Fatima Ximena
          </h1>
          <p className="subtitle">
          💜
          </p>
          <div className="decorative-hearts">
            <span className="heart-accent">ℱ𝒳</span>
            <span className="heart-accent">☆</span>
            <span className="heart-accent">𝒪𝓏</span>
          </div>
        </div>

        <div className="cards-container">
          <button 
            className="romantic-card story-card"
            onClick={() => onNavigate('story')}
          >
            <div className="card-icon">
              <Book size={48} strokeWidth={1.5} />
            </div>
            <h2 className="card-title"></h2>
            <p className="card-description">
              No lies, no words in the air, just me in front of you
            </p>
            <div className="card-sparkle">
              <Sparkles size={20} />
            </div>
          </button>

          <button 
            className="romantic-card love-card"
            onClick={() => onNavigate('reasons')}
          >
            <div className="card-icon">
              <Heart size={48} strokeWidth={1.5} />
            </div>
            <h2 className="card-title">¿♡?</h2>
            <p className="card-description">
              De todas las flores, eres el lirio mas lindo
            </p>
            <div className="card-sparkle">
              <Sparkles size={20} />
            </div>
          </button>
        </div>

        <div className="footer-message">
          <p>❀  あなたよ、他の誰でもない,
            Это ты, мне никто другой не нужен,
            Det är du, jag vill inte ha någon annan,
            C'est toi, je ne veux personne d'autre,
             It's you, I don't want anyone else,
             Es que eres tu no quiero a nadie mas ❀ </p>
          <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.8 }}>
            De Omar Z☆E para Xim
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
