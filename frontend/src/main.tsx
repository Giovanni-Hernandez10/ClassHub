import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {AuthProvider} from "@/auth/AuthProvider.tsx";
import store from "@/redux/store.ts"
import {Provider} from "react-redux";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
        <AuthProvider>
            <App />
        </AuthProvider>
    </Provider>
  </StrictMode>,
)
