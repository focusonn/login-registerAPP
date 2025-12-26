"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Login from "../components/Login"
import Register from "../components/Register"
import Welcome from "../components/Welcome"

export default function AuthPage() {
  const [view, setView] = useState<"login" | "register" | "welcome">("login")
  const [users, setUsers] = useState<Record<string, { pass: string; name: string }>>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("v0_mock_db")
      return saved ? JSON.parse(saved) : {}
    }
    return {}
  })
  const [currentUser, setCurrentUser] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    localStorage.setItem("v0_mock_db", JSON.stringify(users))
  }, [users])

  const handleLogin = (email: string, pass: string) => {
    if (users[email] && users[email].pass === pass) {
      setError(null)
      setCurrentUser(users[email].name)
      setView("welcome")
    } else {
      setError("Hesap bulunamadı veya şifre yanlış. Lütfen kayıt olun.")
    }
  }

  const handleRegister = (email: string, pass: string, name: string) => {
    if (users[email]) {
      setError("Bu e-posta zaten kullanımda.")
      return
    }
    setUsers((prev) => ({ ...prev, [email]: { pass, name } }))
    setCurrentUser(name)
    setError(null)
    setView("welcome")
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(255,255,255,0.05)_0%,_transparent_50%),radial-gradient(circle_at_80%_70%,_rgba(255,255,255,0.05)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      </div>

      <div className="z-10 w-full px-4 sm:px-6 md:px-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <AnimatePresence mode="wait">
          {view === "login" && (
            <Login
              key="login"
              error={error}
              onLogin={handleLogin}
              onSwitch={() => {
                setError(null)
                setView("register")
              }}
            />
          )}
          {view === "register" && (
            <Register
              key="register"
              onRegister={handleRegister}
              onSwitch={() => {
                setError(null)
                setView("login")
              }}
            />
          )}
          {view === "welcome" && (
            <Welcome
              key="welcome"
              name={currentUser || "Kullanıcı"}
              onLogout={() => {
                setError(null)
                setCurrentUser(null)
                setView("login")
              }}
            />
          )}
        </AnimatePresence>
      </div>

      <footer className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 text-center px-4">
        <p className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase text-white/20 font-light">
          Creation Without Limitation
        </p>
      </footer>
    </main>
  )
}
