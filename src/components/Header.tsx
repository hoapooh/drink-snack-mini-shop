import SparklesText from '@/components/magicui/sparkles-text.tsx'

function Header() {
  return (
    <header
      className={
        'px-6 py-1 flex items-center justify-center md:justify-between'
      }
    >
      <a href={'#'} className={'cursor-pointer'}>
        <SparklesText
          text={'Mễ'}
          className="m-2 text-center font-semibold relative z-10 text-5xl before:content-['Mễ'] before:text-black before:absolute before:-z-10 before:left-7"
        />

        <p className={"text-xl font-['Pecita'] relative z-10 mt-2 "}>
          Drinks & Snacks
        </p>
      </a>
      <nav className={'hidden md:flex md:items-center'}>
        {/*<a href="#"*/}
        {/*   className="relative px-4 mx-2 hover:border-b-0 duration-200 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-foreground  before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full">*/}
        {/*    Trang chủ*/}
        {/*</a>*/}
        <a
          href="#"
          className="relative px-4 hover:border-b-0 duration-200 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-foreground  before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
        >
          Menu
        </a>
        <a
          href="#feedback"
          className="relative px-4 mx-2 mr-4 hover:border-b-0 duration-200 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-foreground  before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
        >
          Feedback
        </a>
        <button
          className={
            'px-4 py-2 border-2 border-solid border-black rounded-lg' +
            ' bg-foreground' +
            ' text-background transition-all duration-200 shadow-[4px_6px_0_rgb(0,0,0)]' +
            ' hover:shadow-[2px_3px_0_rgb(0,0,0)] hover:translate-x-0.5 hover:translate-y-0.5' +
            ' active:saturate-50'
          }
        >
          Đặt hàng ngay
        </button>
      </nav>
    </header>
  )
}

export default Header
