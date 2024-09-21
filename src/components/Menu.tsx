import MyFigure from '@/components/MyFigure.tsx'

function Menu() {
  return (
    <div id={'menu'} className={'bg-white pt-24 pb-3'}>
      <h2 className={'text-3xl text-primary text-center'}>Menu của chúng tớ</h2>
      <div
        className={
          'flex flex-col md:flex-row items-center justify-between gap-5 mx-auto mt-5 w-4/5 md:w-3/5'
        }
      >
        <MyFigure
          imgSource={'/images/drinks.png'}
          imgAlt={
            'Menu về thức uống của chúng tớ gồm Matcha và Dalgona' + ' coffee'
          }
          imgCaption={'Menu đồ uống'}
        />

        <MyFigure
          imgSource={'/images/snacks.png'}
          imgAlt={
            'Menu về những món ăn vặt của chúng tớ gồm khoai tây que lắc phô mai và tóp mỡ chiên mắm tỏi'
          }
          imgCaption={'Menu món ăn vặt'}
        />
      </div>
    </div>
  )
}

export default Menu
