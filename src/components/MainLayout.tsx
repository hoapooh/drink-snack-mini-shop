import Header from '@/components/Header.tsx'
import DockNav from '@/components/DockNav.tsx'
import Feedback from '@/components/Feedback.tsx'
import Footer from '@/components/Footer.tsx'
import Menu from '@/components/Menu.tsx'

// This is for dark mode if needed
// import {ModeToggle} from "@/components/mode-toggle";

export function MainLayout() {
  return (
    // [calc(100vh_-_74px)]: 100% of the viewport height minus the height of the DockNav
    <>
      <div className="h-dvh bg-background w-full items-center justify-center">
        <Header />
      </div>

      <main>
        <Menu />
        <Feedback />
      </main>

      <DockNav />
      <Footer />
    </>
  )
}
