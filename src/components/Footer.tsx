import { CopyrightIcon } from 'lucide-react'
import SparklesText from '@/components/magicui/sparkles-text.tsx'

function Footer() {
  return (
    <footer
      className={
        'pt-6 pb-6 mb-[65px] bg-background text-foreground text-center mt-5 md:mt-20'
      }
    >
      <div
        className={
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-left px-6 md:px-20'
        }
      >
        <div>
          <a href={'#'} className={'cursor-pointer'}>
            <SparklesText
              text={'Mễ'}
              className="font-semibold relative z-10 text-5xl before:content-['Mễ'] before:text-black before:absolute before:left-[-6px]"
            />
            <p className={"text-xl font-['Pecita'] relative z-10 mt-2"}>
              Drinks & Snacks
            </p>
          </a>
          <p className={'mt-2'}>Perfect Sips, Tasty Bites</p>
        </div>
        <div>
          <p className={'font-bold text-primary mt-4 xs:mt-0'}>Menu chính</p>
          <p className={'mt-2'}>
            <a href={'#'} className={'hover:text-primary transition-all'}>
              Về chúng tớ
            </a>
          </p>
          <p className={'mt-2'}>
            <a href={'#menu'} className={'hover:text-primary transition-all'}>
              Menu
            </a>
          </p>
        </div>
        <div>
          <p className={'font-bold text-primary mt-4 xs:mt-0'}>Liên hệ</p>
          <p className={'mt-2'}>
            Email:{' '}
            <a
              href={'mailto:test@gmail.com'}
              className={'hover:text-primary transition-all'}
            >
              test@gmail.com
            </a>
          </p>
          <p className={'mt-2'}>
            Số điện thoại:{' '}
            <a
              href={'tel:0376613165'}
              className={'hover:text-primary transition-all'}
            >
              0376-613-165
            </a>
          </p>
        </div>
        <div>
          <p className={'font-bold text-primary mt-4 xs:mt-0'}>Địa chỉ</p>
          <p className={'mt-2 font-normal pointer-events-none'}>
            6 Đường số 14, Linh Chiểu
          </p>
          <p className={'mt-2 font-normal pointer-events-none'}>
            TP. Thủ Đức, TP. Hồ Chí Minh
          </p>
        </div>
      </div>
      <div
        className={
          'text-center border-t border-solid border-foreground pt-6 mt-5'
        }
      >
        <p>
          <CopyrightIcon className={'size-4 inline'} /> 2024 Mễ. All rights
          reserved. | Design by{' '}
          <a
            href={'https://github.com/hoapooh'}
            target={'_blank'}
            rel={'noopener'}
            className={'underline hover:text-primary transition-all'}
          >
            Hoapooh
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
