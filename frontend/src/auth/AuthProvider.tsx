import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {supabase} from "@/supabase/supabaseClient.ts";
import {setAuth, clearAuth} from "@/redux/authSlice.ts";
import * as React from "react";

export function AuthProvider({children}:{children: React.ReactNode}) {
    const dispatch = useDispatch();

    useEffect(() => {
        // function to check the current status of the user and update state accordingly
        const initAuth = async() => {
            const {data: {session}} = await supabase.auth.getSession();
            if (session) {
                dispatch(setAuth({user: session.user, session}))
            } else {
                dispatch(clearAuth())
            }
        };

        // checking to see if there is an active session
        initAuth();

        const {data: subscription} = supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                dispatch(setAuth({user: session.user, session}));
            } else {
                dispatch(clearAuth());
            }
        });

        return () => {
            subscription?.subscription.unsubscribe();
        };
    }, [dispatch]);

    return <>{children}</>
}