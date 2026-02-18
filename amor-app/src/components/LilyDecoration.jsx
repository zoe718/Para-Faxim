import './LilyDecoration.css'

const LilyDecoration = () => {
  return (
    <div className="lily-decoration-container">
      {/* Lirio superior izquierdo */}
      <div className="lily-corner lily-top-left">
        <div className="lily-petals">
          <div className="petal petal-1"></div>
          <div className="petal petal-2"></div>
          <div className="petal petal-3"></div>
          <div className="petal petal-4"></div>
          <div className="petal petal-5"></div>
          <div className="petal petal-6"></div>
        </div>
        <div className="lily-center"></div>
      </div>

      {/* Lirio inferior derecho */}
      <div className="lily-corner lily-bottom-right">
        <div className="lily-petals">
          <div className="petal petal-1"></div>
          <div className="petal petal-2"></div>
          <div className="petal petal-3"></div>
          <div className="petal petal-4"></div>
          <div className="petal petal-5"></div>
          <div className="petal petal-6"></div>
        </div>
        <div className="lily-center"></div>
      </div>

      {/* Pétalos flotando - efecto artístico */}
      <div className="floating-petal petal-float-1"></div>
      <div className="floating-petal petal-float-2"></div>
      <div className="floating-petal petal-float-3"></div>
    </div>
  )
}

export default LilyDecoration