import "react"
// import {useState, useEffect} from "react";
// import {supabase} from "../supabase/supabaseClient.ts";
// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'
// import type {Session} from '@supabase/supabase-js';
import {LoginForm} from "@/auth/login-form-component.tsx";

// export function AuthenticationPage() {
//     const [session, setSession] = useState<Session | null>(null);
//     useEffect(() => {
//       supabase.auth.getSession().then(({ data: { session } }) => {
//           setSession(session)
//       })
//       const {
//         data: { subscription },
//       } = supabase.auth.onAuthStateChange((_event, session) => {
//           setSession(session)
//       })
//       return () => subscription.unsubscribe()
//     }, [])
//     if (!session) {
//         return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
//     }
//     else {
//         return (<div>Logged in!</div>)
//     }
// }

export function AuthenticationPage() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    )
}