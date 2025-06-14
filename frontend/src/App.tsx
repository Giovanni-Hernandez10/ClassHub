import './App.css'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import {Layout} from "./layout/Layout.tsx"
import {AuthenticationPage} from "./auth/AuthenticationPage.tsx";
// import {LoginForm} from "@/auth/login-form-component.tsx";
import {HomePage} from "./layout/HomePage.tsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path={"/sign-in/*"} element={<AuthenticationPage/>}/>
            <Route path={"/sign-up"} element={<AuthenticationPage/>}/>
            <Route element={<Layout/>}>
                <Route path={"/"} element={<HomePage/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
