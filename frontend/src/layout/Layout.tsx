import "react"
import {useSelector} from "react-redux";
import {Outlet, Link} from "react-router-dom";
import { cn } from "@/lib/utils"
import {Button} from "@/components/ui/button"

export function Layout() {
    const session = useSelector((state: any) => state.auth.session);
    console.log("This is the current session", session);
    return (
        <div className="app-layout">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="w-full flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center">
                            <span className="text-xl font-bold">ClassHub</span>
                        </Link>
                    </div>
                    <nav className="flex items-center gap-6">
                        <Link
                            to={session? "/groupChats": "/sign-up"}
                            className={cn(
                "text-sm font-medium transition-colors hover:text-primary")}
                        >
                            Group Chats
                        </Link>
                        <Link
                            to={session? "/uploadSyllabus": "/sign-up"}
                            className={cn(
                "text-sm font-medium transition-colors hover:text-primary")}
                        >
                            Upload Syllabus
                        </Link>
                        <Button variant="default">
                            {session ? "Sign Out" : "Sign In"}
                        </Button>
                    </nav>
                </div>
            </header>
            <main className="app-main">
                <Outlet/>
            </main>
        </div>
    )
}