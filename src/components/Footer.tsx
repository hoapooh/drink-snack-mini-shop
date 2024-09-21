import { CopyrightIcon } from 'lucide-react'

function Footer() {
  return (
    <footer
      className={
        'pt-24 pb-6 mb-[65px] bg-background text-foreground text-center mt-20'
      }
    >
      <div
        className={
          'text-center w-full border-t border-solid border-foreground pt-6'
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
