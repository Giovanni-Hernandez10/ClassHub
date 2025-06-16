import "react"
import {Outlet, Link} from "react-router-dom";

export function Layout() {
    return (
        <div className="app-layout">
            <header className="app-header">
                <div className="header-content">
                    <h1>ClassHub</h1>
                    <nav>
                        <Link to="/">ClassHub Landing</Link>
                    </nav>
                </div>
            </header>
            <main className="app-main">
                <Outlet/>
            </main>
        </div>
    )
}