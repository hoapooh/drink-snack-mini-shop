import '../styles/loader.scss'

function Loader() {
  return (
    /* From Uiverse.io by Li-Deheng */
    <div
      className={'flex h-dvh bg-background w-full items-center justify-center'}
    >
      <div className="loader">
        <div className="circle">
          <div className="dot"></div>
          <div className="outline"></div>
        </div>
        <div className="circle">
          <div className="dot"></div>
          <div className="outline"></div>
        </div>
        <div className="circle">
          <div className="dot"></div>
          <div className="outline"></div>
        </div>
        <div className="circle">
          <div className="dot"></div>
          <div className="outline"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
