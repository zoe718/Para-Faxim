import { useState } from 'react'
import { ChevronLeft, ChevronRight, Home, Camera } from 'lucide-react'
import './OurStoryPage.css'

const storySlides = [
  {
    id: 1,
    title: "¿Qué darias por entregar un lirio?",
    description: "Hola, amor, espero que estés bien. Primero que nada, sé que esta página salió después de San Valentín y, por si no lo dije, feliz San Valentín. Estoy muy contento de estar contigo, me alegra celebrar el amor que te tengo, aunque todos los días estoy amándote y eligiéndote. Te volviste para mí una persona tan esencial; siempre estoy pensando en ti, algunas veces sobrpensando, escribiendo cosas sobre ti espero que te guste, perdón por tardar tanto",
    emoji: "🌑",
     image: "/images/1.jpg"
  },
  {
    id: 2,
    title: "¿Amarias si duele?",
    description: "Yo, Omar Zoe, me empezaste a gustar desde que entré a tu mismo grupo, ese día por la mañana salí a tomar sol, te vi salir con una de tus amigas, me puse nervioso y solo te veía desde lejos, esperando a que me devolvieras la mirada, ese día me le quedé viendo a tu sombra, vi que tenías una silueta que me llamó la atención, inmediatamente parecía una silueta con la que ya había soñado antes, siempre pensé que contarte sobre eso, sentí que era demasiado cursi, y lo oculté, hasta ahora, cuanto más veía tu sombra, más me hacía ilusiones, entre más veía tus ojos, entre más pensaba en eso, más lo quería ocultar",    emoji: "❀",
     image: "/images/2.jpg"
  },
  {
    id: 3,
    title: "¿Dejarias todo solo para estar con esa persona?",
  description: "Con el tiempo fui interactuando un poco mas contigo, siempre me gustaba entrar a dibujo, pensaba en que dirias ese dia, que ibas a platicar, aunque no hablaras mucho, le ponia mas atencion cuando hablabas que a la maestra, ¿un poco tonto no?, pasaban los dias y de ves en cuando hablabas de como te trataban los hombres, los ligues, tomaba nota, buscaba la forma de que vieras que no era igual, creo el tiempo lo demostro, y bueno tambien me empezo a gustar que fuera tu amigo, me gustaba la idea de ser tu mejor amigo, alguien que estaria ahi para lo que sea, ahora mismo siento que tu eres mi mejor amiga y espero que jamas te canses de serlo, aunque tambien te amo y jamas quisiera que dejaras de ser mi chica, nadie me ama como solo tu sabes hacerlo.",
    emoji: "🌒",
      image: "/images/3.jpg"
  },
  {
    id: 4,
    title: "¿El lugar y el tiempo, importa?",
    description: "Recuerdo la primera vez que salimos, estabas en servicio social, yo estaba entrenando, te propuse rescatarte, aceptaste, me bañé, me puse mi sudadera favorita y fui por ti, jamas habia sentido que el metro fuera tan rápido como ese día, te recogi y salimos a la plaza, recuerdo que entramos al IKEA y de ahí creo que quedé más que enamorado, ese momento es más que especial, se volvió algo tan íntimo, algo que me marcó y jamás voy a olvidar, es un recuerdo que me encanta compartir contigo, ese dia recuerdo que no me supe despedir, solo te abracé y me fui, si te soy honesto, ese día no me quería despedir, me quería quedar 15 minutos más...",    emoji: "🛋️",
     image: "/images/4.jpg"
  },
  {
    id: 5,
    title: "666",
    description: "Pasaron los días y en mi mente pasaban dos cosas, ¿por qué nadie me llamaba la atención tanto como tú? ¿Y cuál iba a ser la excusa perfecta para volver a salir contigo? Y no recuerdo, pero por alguna razón dije que me debías un helado, ese dia que salimos por el helado, cuando te tomaste una foto con mi celular, era una foto de tus ojos, ver tus ojos siempre me ha fascinado, así estés enojada, feliz o triste, siempre me va a gustar que me mires, y bueno, de alguna forma esa fue mi llave para amarte incondicionalmente",    emoji: "🌔",
     image: "/images/5.jpg"
  },
  {
    id: 6,
    title: "¿Soy lo que mereces?",
    description: "Aquí quiero recordarte las cosas que han pasado entre nosotros, que para mí marcan el antes y el después dentro de mí, y que para mí ya no solo eres una persona especial, eres única, eres esencial para mí, recuerdo la primera competencia de sumorobots, perdí ese día, tenía muchos problemas encima y esa fue la gota que derramó el vaso, recuerdo que me sonreíste y me dijiste que la próxima vez podría ganar, solo bastaron unas cuantas palabras para salvarme, recuerdo mi cumpleaños del 2023 cuando me enteré de que te gustaba, jamás pensé que a alguien le gustaría por mi forma de ser, recuerdo las veces que fui frio contigo, recuerdo tus errores, mis errores, cosas que a ti nunca se te escapan, a mi tampoco, recordar errores del pasado siempre a sido malo, pero se que gracias a eso estamos aqui, me ayudas a ser mejor, me ayudas a convertime en la persona que debo ser, esto siempre me va a hacer volver contigo, a extrañarte, a querer darte paz, a volver contigo, a ayudarte, a darte lo mejor que pueda, a volver contigo, a estar para ti, a ser tuyo, a volver contigo, a darte mi mano y tomes mi alma, a volver contigo, a que siempre este disponible, y a intentar ayudar aunque no tenga la respuesta, a romperme la cabeza contigo para solucionar, a dejar de ser todo lo malo que soy, a volver contigo, a estar simpre a un deseo tuyo, no te he dado ni la mitad de lo que mereces, pero prometo darte mucho de lo poco que tengo",    emoji: " ⭐",
     image: "/images/6.jpg"
  },
  {
    id: 7,
    title: "¿Qué eres?",
    description: "23 de octubre del 2023, a las 9:43pm enfrente de tu casa, reucuerdo que en ese momento mientras intentaba ligar jaja, contaba algo sobre un loquito que estaba cerca de tu casa, un vagabundo que se habia enamorado y por fin se le habia declarado, ese dia fue la primera ves que nos besamos, fueron mis primeros 15 minutos mas que pedi para estar contigo, esos 15 minutitos mas que para mi no son suficientes, se que tengo problemas con mis limites, pero siempre voy a querer estar contigo, me encanta estar contigo, dormir contigo, vivir contigo, cuento los dias para ser tu novio, cuento los dias para ser tu esposo, cuento los dias para ser el padre de tu hijo, cuento los dias, no es facil, pero tampoco es imposible, perdon si abrumo con tanto, perdon si siento tanto, si he mentido tanto que ya es dificil de leer esto pensando que todo esto son simples palabras al aire, estoy comprometido, se que voy tarde, ¿es prudente decirte esto ahora?. ",
    emoji: "💜",
     image: "/images/7.jpg"
  },
  {
    id: 8,
    title: "¿A dónde vas?",
    description: "Con su tiempo las cosas fueron avanzando, pasamos muchos problemas y errores, a veces pensaba en cuántos besos me faltaban para que me dejaras de amar, cuántos perdones me faltan para que te fueras, ¿llevas la cuenta? A veces mis noches son difíciles, pensando en mis actitudes, le lloro a la luna para que seas feliz, ¿Qué tan prudente es decirte que me quiero comer tus problemas, si aún me tienes fe, si crees que estoy jugando contigo? No te vayas aún, intento dar lo mejor, no quiero que te vayas, sé que existe un límite, no te vayas, me siento correspondido, me siento amado, por favor, no te vayas nunca, No dudo, espero algún día despertar a tu lado, despertar contigo todos los días",    emoji: "🌙",
     image: "/images/8.jpg"
  },
  {
    id: 9,
    title: "No puedes tenerlo sin hacer nada ",
    description: "Los recuerdos de nuestro 2024 solo me hacen reflexionar, fue el año que más aprendí de ti, fue el año que me enseñé a amarte en tu ausencia, Aprendí a amarte por cada palabra que decías, de la nada nació mi obsesión por entenderte, por conocerte más, Amo saber cosas de ti, amo saber cada detalle, desde la distancia me dediqué a estudiar cada parte de ti, te volviste mi materia, mi pasión, me gusta escribir de ti, hablar de ti, quiero tener mi doctorado en ti, inmortalizarte",    emoji: "🤍",
     image: "/images/9.jpg"
  },
  {
    id: 10,
    title: "No culpes al tiempo",
    description: "Llego 2025, aun te tenia cerca, me diste el mejor cuadro que pude haber querido, me senti perdido en mi vacio, azul, nadie me ama como tu, pasaron los meses, solo hablaba de ti, una funa de X, buscando Tweets que hablaran de mi, buscando el mejor ramo de lirios para volver, nadie me ama, nadie me hace sentir que merece lirios mas que tu, recorreria ciudades, morir por ti es poco, porque yo soy mas de vivir por ti, mentiria para estar contigo, escaparia de donde sea, para estar contigo, me quedaria sin un peso, mientras te vea sonreir, nadie me ama com tu, a mis amigos no les fastidio que hablara de ti, nadie me detuvo, las señales fueron claras, mande un mensaje y se volvio todo un 0, volvimos a comenzar, no se sentia raro, se sentia nuevo, una vez mas. Amo lo que somos, amo lo que podemos ser",
    emoji: "✡",
     image: "/images/10.jpg"
  },
  {
    id: 11,
    title: "No eres lo que piensas",
 description: "A veces me gustaría hablar con Dios y preguntarle por qué me hizo asi, a lo mejor te debo miles de disculpas, a veces quisiera arreglar mil errores que cometi contigo, pero se que sin ellos no estuviera contigo, tu leyendo esta carta y yo como menso viendote, posiblemente digas que no te debo nada a ti, que no me pides nada a mi, pero quiero darte todo, me gusta ver tu ojos, quiero verte sonreir todos los dias, hasta mi ultimo suspiro, abrazarte hace que no sienta frio, en este recorrido en todo lo que pasamos aprendi algo muy importante, que no basta con decirte cosas lindas y prometer mil cosas, es mas importante hacerte sentir amada todos los dias, a pesar de tener al diablo comiendo mi cabeza, a pesar de las circustancias lo seguire haciendo, aun si somos polvo, si somos estrellas, si no somos nada, si lo somos todo, si eres azul y yo rojo",    emoji: "🌖",
     image: "/images/11.jpg"
  },
  {
    id: 12,
    title: "Eres mucho más", description: "Muchas gracias por todo, gracias por ser el amor que quiero en mi vida, gracias por el aguante, gracias y perdóname, perdóname, te amo y siempre voy a querer que estés bien, que logres ser feliz, que seas libre, tengas paz, que no te olvides de mí",    emoji: "⚝",
     image: "/images/12.jpg"
  },
  {
    id: 13,
 title: "Si me lo preguntas a mí, por ti, siempre estaré dispuesto",    description: "¿Has amado tanto a alguien, incluso más que a ti mismo? ¿Lo volverías a hacer? No te sientas triste, de todas las flores te traje un lirio, amor",    emoji: "🌕",
     image: "/images/13.jpg"
  },
  {
    id: 14,
    title: "Te amo",
description: "Espero que te haya gustado, lo hice con mucho amor, disculpa la tardanza, pero espero lo estés viendo justo a tiempo",    emoji: "❤️",
     image: "/images/16.jpg"
  }
]

const OurStoryPage = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % storySlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + storySlides.length) % storySlides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const slide = storySlides[currentSlide]

  return (
    <div className="story-page">
      <button className="home-button" onClick={() => onNavigate('home')}>
        <Home size={24} />
        <span>Inicio</span>
      </button>

      <div className="story-container">
        <h1 className="story-main-title">My page obsession</h1>
        
        <div className="carousel">
          <div className="slide" key={slide.id}>
            <div className="slide-content">
              <div className="slide-emoji">{slide.emoji}</div>
              
              <div className="slide-image-container">
                {slide.image ? (
                  <img src={slide.image} alt={slide.title} className="slide-image" />
                ) : (
                  <div className="slide-placeholder">
                    <Camera size={64} strokeWidth={1} />
                    <p>Agrega tu foto especial aquí</p>
                  </div>
                )}
              </div>

              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-description">{slide.description}</p>
            </div>
          </div>

          <button className="nav-button prev-button" onClick={prevSlide}>
            <ChevronLeft size={32} strokeWidth={2.5} />
          </button>

          <button className="nav-button next-button" onClick={nextSlide}>
            <ChevronRight size={32} strokeWidth={2.5} />
          </button>
        </div>

        <div className="dots-container">
          {storySlides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="slide-counter">
          {currentSlide + 1} de {storySlides.length}
        </div>
      </div>
    </div>
  )
}

export default OurStoryPage
