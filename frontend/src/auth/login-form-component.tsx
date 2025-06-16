import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {supabase} from "@/supabase/supabaseClient.ts";
import {useState} from "react";
import * as React from "react"

// Function used to sign-in users with their email and passowrd
async function emailLogin(email: string, password: string) {

    try {
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
    } catch (error) {
        console.error("There was an error logging in with email", error);
    }
}

// function used to sign-in users with their google accounts
async function googleLogin() {
    try {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider: 'google'
        });
    } catch (error) {
        console.error("There was an error logging in with google", error);
    }
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // used to pass in the fields to emailLogin function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-10 inline-block text-sm underline-offset-4 hover:underline pl-19"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" onClick={() => emailLogin(email, password)}>
                  Login
                </Button>
                <Button variant="default" className="w-full" onClick={googleLogin}>
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}