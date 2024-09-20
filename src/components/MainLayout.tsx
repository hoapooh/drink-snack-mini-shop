import Header from "@/components/Header.tsx";
import DockNav from "@/components/DockNav.tsx";
import Feedback from "@/components/Feedback.tsx";

// This is for dark mode if needed
// import {ModeToggle} from "@/components/mode-toggle";


export function MainLayout() {
    return (
        <>
            <div className="h-dvh w-full items-center justify-center">
                <Header/>
            </div>

            <DockNav/>
            <Feedback/>
        </>
    );
}
