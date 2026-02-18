import { useState, useEffect, useRef } from 'react'
import { Home, Heart, Star, Sparkles, Flower2, Sun, Moon, CloudRain } from 'lucide-react'
import './WhyILoveYouPage.css'

const reasons = [
  {
    id: 1,
    icon: Heart,
    title: "Amo tus ojos",
    description: "",
  },
  {
    id: 2,
    icon: Star,
    title: "Amo tu forma de ser",
    description: "",
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Amo tu sonrisa",
    description: "",
  },
  {
    id: 4,
    icon: Flower2,
    title: "Amo que te maquilles",
    description: "",
  },
  {
    id: 5,
    icon: Sun,
    title: "Amo cuando te veo desarreglada",
    description: "",
  },
  {
    id: 6,
    icon: Moon,
    title: "Amo cuando estamos en silencio",
    description: "",
  },
  {
    id: 7,
    icon: CloudRain,
    title: "Amo cuando no paramos de hablar",
    description: "",
  },
  {
    id: 8,
    icon: Heart,
    title: "Amo tus lunares",
    description: "",
  },
  {
    id: 9,
    icon: Star,
    title: "Amo tu regazo",
    description: "",
  },
  {
    id: 10,
    icon: Sparkles,
    title: "Amo cuando estoy sobre tu pecho y escucho tu corazón latir",
    description: "",
  },
  {
    id: 11,
    icon: Flower2,
    title: "Amo tu cabello",
    description: "",
  },
  {
    id: 12,
    icon: Sun,
    title: "Amo cuando haces lo mejor que puedes en situaciones difíciles",
    description: "",
  },
  {
    id: 13,
    icon: Moon,
    title: "Amo tus pestañas",
    description: "",
  },
  {
    id: 14,
    icon: CloudRain,
    title: "Amo hacer esta lista de la forma más cursi, perdón si es demasiado empalagoso",
    description: "",
  },
  {
    id: 15,
    icon: Heart,
    title: "Amo tu empatía",
    description: "",
  },
  {
    id: 16,
    icon: Star,
    title: "Amo tus valores",
    description: "",
  },
  {
    id: 17,
    icon: Sparkles,
    title: "Amo tus uñas",
    description: "",
  },
  {
    id: 18,
    icon: Flower2,
    title: "Amo tu cuerpo",
    description: "",
  },
  {
    id: 19,
    icon: Sun,
    title: "Amo tu historia",
    description: "",
  },
  {
    id: 20,
    icon: Moon,
    title: "Amo que me platiques tu día",
    description: "",
  },
  {
    id: 21,
    icon: CloudRain,
    title: "Amo tus sueños",
    description: "",
  },
  {
    id: 22,
    icon: Heart,
    title: "Amo tu amabilidad",
    description: "",
  },
  {
    id: 23,
    icon: Star,
    title: "Amo cuando insultas",
    description: "",
  },
  {
    id: 24,
    icon: Sparkles,
    title: "Amo tus abrazos",
    description: "",
  },
  {
    id: 25,
    icon: Flower2,
    title: "Amo tus besos",
    description: "",
  },
  {
    id: 26,
    icon: Sun,
    title: "Amo tus cuadros",
    description: "",
  },
  {
    id: 27,
    icon: Moon,
    title: "Amo tus cartas",
    description: "",
  },
  {
    id: 28,
    icon: CloudRain,
    title: "Amo tu olor",
    description: "",
  },
  {
    id: 29,
    icon: Heart,
    title: "Amo que me ames a tu manera",
    description: "",
  },
  {
    id: 30,
    icon: Star,
    title: "Amo tu honestidad",
    description: "",
  },
  {
    id: 31,
    icon: Sparkles,
    title: "Amo cuando estás triste",
    description: "",
  },
  {
    id: 32,
    icon: Flower2,
    title: "Amo cuando estás enojada",
    description: "",
  },
  {
    id: 33,
    icon: Sun,
    title: "Amo cada detalle de ti",
    description: "",
  },
  {
    id: 34,
    icon: Moon,
    title: "Amo que seas mi amiga favorita",
    description: "",
  },
  {
    id: 35,
    icon: CloudRain,
    title: "Amo que seas mi novia (sé que aún no somos nada)",
    description: "",
  },
  {
    id: 36,
    icon: Heart,
    title: "Te amo cuando estás decaída y sales adelante",
    description: "",
  },
  {
    id: 37,
    icon: Star,
    title: "Te amo por estar cuando lo necesito",
    description: "",
  },
  {
    id: 38,
    icon: Sparkles,
    title: "Amo tu nombre",
    description: "",
  },
  {
    id: 39,
    icon: Flower2,
    title: "Amo los tenis que usas",
    description: "",
  },
  {
    id: 40,
    icon: Sun,
    title: "Amo tus mochilas",
    description: "",
  },
  {
    id: 41,
    icon: Moon,
    title: "Amo tu estilo",
    description: "",
  },
  {
    id: 42,
    icon: CloudRain,
    title: "Amo tu risa",
    description: "",
  },
  {
    id: 43,
    icon: Heart,
    title: "Amo tu mirada",
    description: "",
  },
  {
    id: 44,
    icon: Star,
    title: "Amo cuando estás acostada en tu cama",
    description: "",
  },
  {
    id: 45,
    icon: Sparkles,
    title: "Amo la música que escuchas",
    description: "",
  },
  {
    id: 46,
    icon: Flower2,
    title: "Amo cuando comemos juntos",
    description: "",
  },
  {
    id: 47,
    icon: Sun,
    title: "Amo cuando estás enfocada",
    description: "",
  },
  {
    id: 48,
    icon: Moon,
    title: "Amo cuando salgo contigo",
    description: "",
  },
  {
    id: 49,
    icon: CloudRain,
    title: "Amo tu cuarto",
    description: "",
  },
  {
    id: 50,
    icon: Heart,
    title: "Te amo cuando lloras",
    description: "",
  },
  {
    id: 51,
    icon: Star,
    title: "Amo las cosas que no puedo decirte porque no me quiero ver desubicado",
    description: "",
  },
  {
    id: 52,
    icon: Sparkles,
    title: "Amo cuando sientes cosquillas",
    description: "",
  },
  {
    id: 53,
    icon: Flower2,
    title: "Amo que seas tú la mujer a la que le dedico esta página web",
    description: "",
  },
  {
    id: 54,
    icon: Sun,
    title: "Amo que sepas que te amo",
    description: "",
  },
  {
    id: 55,
    icon: Moon,
    title: "Amo cuando camino contigo",
    description: "",
  },
  {
    id: 56,
    icon: CloudRain,
    title: "Amo cuando corres",
    description: "",
  },
  {
    id: 57,
    icon: Heart,
    title: "Amo tus manos",
    description: "",
  },
  {
    id: 58,
    icon: Star,
    title: "Amo cuando veo tus ojos muy cerca de mí",
    description: "",
  },
  {
    id: 59,
    icon: Sparkles,
    title: "Amo que me regañes",
    description: "",
  },
  {
    id: 60,
    icon: Flower2,
    title: "Amo cuando te llenas y me lo das",
    description: "",
  },
  {
    id: 61,
    icon: Sun,
    title: "Amo pasar el tiempo contigo",
    description: "",
  },
  {
    id: 62,
    icon: Moon,
    title: "Amo que seas una mujer increíble",
    description: "",
  },
  {
    id: 63,
    icon: CloudRain,
    title: "Amo tu respeto",
    description: "",
  },
  {
    id: 64,
    icon: Heart,
    title: "Amo tu compromiso",
    description: "",
  },
  {
    id: 65,
    icon: Star,
    title: "Amo tu voz",
    description: "",
  },
  {
    id: 66,
    icon: Sparkles,
    title: "Amo haberte conocido",
    description: "",
  },
  {
    id: 67,
    icon: Flower2,
    title: "Amo que pueda hacer estas cosas, que yo hable y hable y jamás te aburras de mí, y me sigas mirando como si fuera la primera vez",
    description: "",
  },
  {
    id: 68,
    icon: Sun,
    title: "Amo que me sigas a todos lados",
    description: "",
  },
  {
    id: 69,
    icon: Moon,
    title: "Amo apoyarte",
    description: "",
  },
  {
    id: 70,
    icon: CloudRain,
    title: "Amo saber que aún tengo muchas series que ver, gracias a ti",
    description: "",
  },
  {
    id: 71,
    icon: Heart,
    title: "Amo debatir contigo",
    description: "",
  },
  {
    id: 72,
    icon: Star,
    title: "Amo tus frases",
    description: "",
  },
  {
    id: 73,
    icon: Sparkles,
    title: "Amo saber que jamás se nos van a acabar las conversaciones",
    description: "",
  },
  {
    id: 74,
    icon: Flower2,
    title: "Amo que te gusten los atardeceres tanto como a mí",
    description: "",
  },
  {
    id: 75,
    icon: Sun,
    title: "Amo todos tus defectos",
    description: "",
  },
  {
    id: 76,
    icon: Moon,
    title: "Amo cuando me corriges",
    description: "",
  },
  {
    id: 77,
    icon: CloudRain,
    title: "Amo que ames mi cabello tanto como yo",
    description: "",
  },
  {
    id: 78,
    icon: Heart,
    title: "Amo saber que me voy a tener que inventar nuevas cosas para mis votos de boda",
    description: "",
  },
  {
    id: 79,
    icon: Star,
    title: "Amo no cansarme de escribir y hablar sobre ti",
    description: "",
  },
  {
    id: 80,
    icon: Sparkles,
    title: "Amo tus bromas",
    description: "",
  },
  {
    id: 81,
    icon: Flower2,
    title: "Amo que toleres mis chistes",
    description: "",
  },
  {
    id: 82,
    icon: Sun,
    title: "Amo hacerte sentir especial en tus cumpleaños y prometo seguir haciéndolo",
    description: "",
  },
  {
    id: 83,
    icon: Moon,
    title: "Amo estar contigo en las buenas, en las malas, en la salud y en la enfermedad",
    description: "",
  },
  {
    id: 84,
    icon: CloudRain,
    title: "Amo crecer contigo",
    description: "",
  },
  {
    id: 85,
    icon: Heart,
    title: "Amo chismear contigo",
    description: "",
  },
  {
    id: 86,
    icon: Star,
    title: "Amo que me hagas cosquillas",
    description: "",
  },
  {
    id: 87,
    icon: Sparkles,
    title: "Amo besar cada parte de ti",
    description: "",
  },
  {
    id: 88,
    icon: Flower2,
    title: "Amo jugar contigo",
    description: "",
  },
  {
    id: 89,
    icon: Sun,
    title: "Amo desvelarme contigo",
    description: "",
  },
  {
    id: 90,
    icon: Moon,
    title: "Amo salir a la calle y ver cosas que me recuerdan a ti",
    description: "",
  },
  {
    id: 91,
    icon: CloudRain,
    title: "Amo que te rías de mí",
    description: "",
  },
  {
    id: 92,
    icon: Heart,
    title: "Amo que te preocupes por mí",
    description: "",
  },
  {
    id: 93,
    icon: Star,
    title: "Amo que me digas que me amas",
    description: "",
  },
  {
    id: 94,
    icon: Sparkles,
    title: "Amo sentirte cerca",
    description: "",
  },
  {
    id: 95,
    icon: Flower2,
    title: "Amo los videos que me compartes",
    description: "",
  },
  {
    id: 96,
    icon: Sun,
    title: "Amo apoyarte en todas tus decisiones",
    description: "",
  },
  {
    id: 97,
    icon: Moon,
    title: "Amo tu piel",
    description: "",
  },
  {
    id: 98,
    icon: CloudRain,
    title: "Te amo cuando estás en tus peores crisis",
    description: "",
  },
  {
    id: 99,
    icon: Heart,
    title: "Amo tu forma de amarme",
    description: "",
  },
  {
    id: 100,
    icon: Star,
    title: "Te amo porque sí, y ¿por qué no?",
    description: "",
  },

  {
    id: 101,
    icon: Flower2,
    title: "Amo tu forma de pensar",
    description: "",
  },
  {
    id: 102,
    icon: Sun,
    title: "Amo hacer que esta lista va a terminar en número par por ti",
    description: "",
  },
  {
    id: 103,
    icon: Moon,
    title: "Amo escuchar música juntos",
    description: "",
  },
  {
    id: 104,
    icon: CloudRain,
    title: "Amo pensar en ti cada que veo el número 6",
    description: "",
  },
  {
    id: 105,
    icon: Heart,
    title: "Amo cuando por fin puedo ir a verte",
    description: "",
  },
  {
    id: 106,
    icon: Star,
    title: "Te amo porque eres tú y no quiero a nadie más",
    description: "𓃱",
  },
]

const WhyILoveYouPage = ({ onNavigate }) => {
  const [visibleReasons, setVisibleReasons] = useState([])
  const reasonsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id)
            setVisibleReasons((prev) => [...new Set([...prev, id])])
          }
        })
      },
      { threshold: 0.1 }
    )

    reasonsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="reasons-page">
      <button className="home-button" onClick={() => onNavigate('home')}>
        <Home size={24} />
        <span>Inicio</span>
      </button>

      <div className="reasons-container">
        <div className="reasons-header">
          <h1 className="reasons-main-title">If words aren't enough, look my eyes, look into my soul</h1>
          <p className="reasons-subtitle">
          Cada estrella es un Te amo, y es por eso que es eterno
          </p>
        </div>

        <div className="reasons-list">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div
                key={reason.id}
                ref={(el) => (reasonsRef.current[index] = el)}
                data-id={reason.id}
                className={`reason-card ${visibleReasons.includes(reason.id) ? 'visible' : ''}`}
              >
                <div className="reason-number">{reason.id}</div>
                <div className="reason-icon">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
                <div className="reason-decoration"></div>
              </div>
            )
          })}
        </div>

        <div className="reasons-footer">
          <p>Con todo mi amor para la señortia Fatima Ximena</p>
          <p style={{ fontSize: '1.2rem', marginTop: '1rem', fontStyle: 'italic' }}>
           Luz de luna<br />
            Sol fortuna<br />
            Solo eres, lo que crees,<br />
            Lo que quiero, por ti me muero
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyILoveYouPage