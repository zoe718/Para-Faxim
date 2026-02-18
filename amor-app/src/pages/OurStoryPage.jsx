import { useState } from 'react'
import { ChevronLeft, ChevronRight, Home, Camera } from 'lucide-react'
import './OurStoryPage.css'

const storySlides = [
  {
    id: 1,
    title: "¿Que darias por entregar un lirio?",
    description: "Hola amor, espero que estes bien, primero que nada, se que esta pagina salio despues de San Valentin y por si no lo dije, Feliz San Valentin, estoy muy contento de estar contigo, me alegra celebrar el amor que te tengo, aunque todos los dias, estoy amandote y eligiendote, te volviste para mi una persona tan esencial, siempre estoy pensando en ti, algunas veces sobre-pensando, escribiendo cosas sobre ti, espero que te guste, pedon por tardar tanto",
    emoji: "🌑",
     image: "/images/1.jpg"
  },
  {
    id: 2,
    title: "¿Amarias si duele?",
    description: "Yo Omar Zoe me empezaste a gustar desde que entre a tu mismo grupo, ese dia por la mañana sali a tomar sol, te vi salir con una de tus amigas, me puse nervioso y solo te veia desde lejos, esperando a que me devolvieras la mirada, ese dia me le quede viendo a tu sombra, vi que tenias una silueta que me llamo la antencion inmediatamente, parecia una silueta con la que ya habia soñado antes, siempre pense que contarte sobre eso, era demasiado cursi, y lo oculte, hasta ahora, entre mas veia tu sombra mas me hacia ilusiones, entre mas veia tus ojos, entre mas pensaba en eso, mas lo queria ocultar",
    emoji: "❀",
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
    description: "Recuerdo la primera vez que salimos, estabas en servicio social, yo estaba entrenando, te propuse rescatarte, aceptaste, me bañe, me puse mi sudadera favorita y fui por ti, jamas habia sentido que el metro fuera tan rapido como ese dia, te recogi y salimos a la plaza, recuerdo que entramos al IKEA y de ahi creo que quede mas que enamorado, ese momento es mas que especial, se volvio algo tan intimo, algo que me marco y jamas voy a olvidar, es un recuerdo que me encanta compartir contigo, ese dia recuerdo que no me supe despedir, solo te abraces y me fui, si te soy honesto ese dia no me queria despedir, me queria quedar 15 minutos mas...  ",
    emoji: "🛋️",
     image: "/images/4.jpg"
  },
  {
    id: 5,
    title: "666",
    description: "Pasaron los dias y en mi mente pasaban dos cosas, ¿Por qué nadie me llamaba la atencion tanto como tu?, y cual iba a ser la excusa perfecta para volver a salir contigo y no recuerdo pero por alguna razon dije que me debias un helado, ese dia que salimos por el helado, cuando te tomaste una foto con mi celular, era una foto de tus ojos, ver tus ojos siempre me han fasinado, asi estes enojada, feliz o triste siempre me va a gustar que me mires, y bueno de alguna forma esa fue mi llave para amarte incondionalmente",
    emoji: "🌔",
     image: "/images/5.jpg"
  },
  {
    id: 6,
    title: "¿Soy lo que mereces?",
    description: "Aqui quiero recordarte las cosas que han pasado entre nosotros, que para mi marcan el antes y el despues dentro de mi, y que para mi ya no solo eres una persona especial, eres unica, eres esencial para mi. Recuerdo la primera competencia de sumorobots, perdi ese dia, tenia muchos problemas encima y esa fue la gota que deeramo el vaso, recuerdo que me sonreiste y me dijiste que la proxima ves podria ganar, solo bastaron una cunatas palabras para salvarme. Recuerdo mi cumpleaños del 2023 cuando me entere que te gustaba, jamas pense en que alguien le gustaba por mi forma de ser. Recuerdo las veces que fui frio contigo, recuerdo tus errores, mis errores, cosas que a ti nunca se te escapan, a mi tampoco, recordar errores del pasado siempre a sido malo, pero se que gracias a eso estamos aqui, me ayudas a ser mejor, me ayudas a convertime en la persona que debo ser, esto siempre me va a hacer volver contigo, a extrañarte, a querer darte paz, a volver contigo, a ayudarte, a darte lo mejor que pueda, a volver contigo, a estar para ti, a ser tuyo, a volver contigo, a darte mi mano y tomes mi alma, a volver contigo, a que siempre este disponible, y a intentar ayudar aunque no tenga la respuesta, a romperme la cabeza contigo para solucionar, a dejar de ser todo lo malo que soy, a volver contigo, a estar simpre a un deseo tuyo, no te he dado ni la mitad de lo que mereces, pero prometo darte mucho de lo poco que tengo.",
    emoji: " ⭐",
     image: "/images/6.jpg"
  },
  {
    id: 7,
    title: "¿Que eres?",
    description: "23 de octubre del 2023, a las 9:43pm enfrente de tu casa, reucuerdo que en ese momento mientras intentaba ligar jaja, contaba algo sobre un loquito que estaba cerca de tu casa, un vagabundo que se habia enamorado y por fin se le habia declarado, ese dia fue la primera ves que nos besamos, fueron mis primeros 15 minutos mas que pedi para estar contigo, esos 15 minutitos mas que para mi no son suficientes, se que tengo problemas con mis limites, pero siempre voy a querer estar contigo, me encanta estar contigo, dormir contigo, vivir contigo, cuento los dias para ser tu novio, cuento los dias para ser tu esposo, cuento los dias para ser el padre de tu hijo, cuento los dias, no es facil, pero tampoco es imposible, perdon si abrumo con tanto, perdon si siento tanto, si he mentido tanto que ya es dificil de leer esto pensando que todo esto son simples palabras al aire, estoy comprometido, se que voy tarde, ¿es prudente decirte esto ahora?. ",
    emoji: "💜",
     image: "/images/7.jpg"
  },
  {
    id: 8,
    title: "¿A donde vas?",
    description: "Con su tiempo las cosas fueron avanzando, pasamos muchos problemas y errores, a veces pensaba en cuantos besos me faltaban para que me dejaras de amar, cuantos perdones me faltan para que te fueras, ¿llevas la cuenta?, a veces mis noches son dificiles, pensando en mis actitudes, le lloro a la luna para que seas feliz, ¿Qué tan prudente es decirte que me quiero comer tus problemas, si aun me tienes fe, si crees que estoy jugando contigo?, no te vallas aun, intento dar lo mejor, no quiero que te vayas, se que exite un limite, no te vayas, me siento correspondido, me siento amado, por favor no te vallas nunca, no dudo, espero algun dia despertar a tu lado, despertar contigo todos los dias.",
    emoji: "🌙",
     image: "/images/8.jpg"
  },
  {
    id: 9,
    title: "No puedes tenerlo sin hacer nada ",
    description: "Los recuerdos de nuestro 2024 solo me hacenr reflexionar, fue el año que mas aprendi de ti, fue el año que me enseñe a amarte en tu ausencia, aprendia a amarte por cada palabra que decias, de la nada nacio mi obsecion por entenderte, por conocerte mas, amo saber cosas de ti, amo saber cada detalle, desde la distancia me dedique a estudiar cada parte de ti, te volviste mi materia, mi pasión, me gusta escribir de ti, hablar de ti, quiero tener mi doctorado en ti, inmortalizarte. ",
    emoji: "🤍",
     image: "/images/9.jpg"
  },
  {
    id: 10,
    title: "No culpes al tiempo",
    description: "Llego 2025, aun te tenia cerca, me diste el mejor cuadro que pude haber querido, me senti perdido en mi vacio, azul, nadie me ama como tu, pasaron los meses, solo hablaba de ti, una funa de X, buscando Tweets que hablaran de mi, buscando el mejor ramo de lirios para volver, nadie me ama, nadie me hace sentir que merece lirios mas que tu, recorreria ciudades, morir por ti es poco, porque yo soy mas de vivir por ti, mentiria para estar contigo, escaparia de donde sea, para estar contigo, me quedaria sin un peso, mientras te vea sonreir, nadie me ama com tu, a mis amigos no les fastidio que hablara de ti, nadie me detuvo, las señales fueron claras, mande un mensaje y se volvio todo un 0, volvimos a comenzar, no se sentia raro, se sentia nuevo, una vez mas. Amo lo que somos, amo lo que podemos ser,  ",
    emoji: "✡",
     image: "/images/10.jpg"
  },
  {
    id: 11,
    title: "No eres lo que piensas",
    description: "A veces me gustaria hablar con Dios y preguntarle por que me hizo asi. A lo mejor te debo miles de disculpas, a veces quisiera arreglar mil errores que cometi contigo, pero se que sin ellos no estuviera contigo, tu leyendo esta carta y yo como menso viendote, posiblemente digas que no te debo nada a ti, que no me pides nada a mi, pero quiero darte todo, me gusta ver tu ojos, quiero verte sonreir todos los dias, hasta mi ultimo suspiro, abrazarte hace que no sienta frio, en este recorrido en todo lo que pasamos aprendi algo muy importante, que no basta con decirte cosas lindas y prometer mil cosas, es mas importante hacerte sentir amada todos los dias, a pesar de tener al diablo comiendo mi cabeza, a pesar de las circustancias lo seguire haciendo, aun si somos polvo, si somos estrellas, si no somos nada, si lo somos todo, si eres azul y yo rojo.",
    emoji: "🌖",
     image: "/images/11.jpg"
  },
  {
    id: 12,
    title: "Eres mucho mas",
    description: "Muchas gracias por todo, gracias por ser el amor que quiero en mi vida, gracias por el aguante, gracias y perdoname, perdoname, te amo y siempre voy a querer que estes bien, que logres ser feliz, que seas libre, tengas paz, que no te olvides de mi.",
    emoji: "⚝",
     image: "/images/12.jpg"
  },
  {
    id: 13,
    title: "Si me lo preguntas a mi, por ti, simpre estare dispuesto",
    description: "¿Haz amado tanto a alguien, incluso mas que a ti mismo?, ¿Lo volveria a hacer?, no te sientas triste, de todos las flores te traje un lirio amor",
    emoji: "🌕",
     image: "/images/13.jpg"
  },
  {
    id: 14,
    title: "Te amo",
    description: "Espero que te haya gustado, lo hice con mucho amor, disculpa la tardanza, pero espero lo estes viendo justo a tiempo",
    emoji: "❤️",
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
