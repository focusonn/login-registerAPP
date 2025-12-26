"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"

interface LoginProps {
  onLogin: (email: string, pass: string) => void
  onSwitch: () => void
  error: string | null
}

export default function Login({ onLogin, onSwitch, error }: LoginProps) {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      onLogin(email, pass)
      setIsLoading(false)
    }, 800)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full p-6 sm:p-8 md:p-10 lg:p-14 bg-neutral-950/40 backdrop-blur-3xl border border-white/5 rounded-2xl sm:rounded-3xl md:rounded-[3.5rem] shadow-[0_0_100px_-20px_rgba(255,255,255,0.03)]"
    >
      <div className="mb-8 sm:mb-10 md:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-tighter text-white mb-3 sm:mb-4">
          Giriş
        </h2>
        <div className="h-[1px] w-12 sm:w-14 md:w-16 bg-gradient-to-r from-white/40 to-transparent mb-4 sm:mb-5 md:mb-6" />
        <p className="text-white/20 text-[10px] sm:text-xs md:text-sm font-light tracking-[0.08em] sm:tracking-[0.09em] md:tracking-[0.1em] uppercase">
          Yetkili personel erişimi.
        </p>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-red-500/10 border border-red-500/20 p-3 sm:p-4 rounded-lg sm:rounded-xl mb-4 sm:mb-5 md:mb-6"
        >
          <p className="text-red-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider">{error}</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 md:space-y-10">
        <div className="space-y-3 sm:space-y-4">
          <label className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] font-bold text-white/15 ml-2 sm:ml-3">
            İdentifikasyon
          </label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="email@access.net"
            className="bg-white/[0.02] border-white/5 focus:border-white/10 h-12 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl transition-all duration-700 focus:bg-white/[0.05] focus:ring-0 placeholder:text-white/10 text-sm sm:text-base"
          />
        </div>
        <div className="space-y-3 sm:space-y-4">
          <label className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] font-bold text-white/15 ml-2 sm:ml-3">
            Güvenlik Anahtarı
          </label>
          <Input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            required
            placeholder="••••••••"
            className="bg-white/[0.02] border-white/5 focus:border-white/10 h-12 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl transition-all duration-700 focus:bg-white/[0.05] focus:ring-0 placeholder:text-white/10 text-sm sm:text-base"
          />
        </div>
        <Button 
          disabled={isLoading} 
          type="submit" 
          className="w-full relative overflow-hidden h-12 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl text-xs sm:text-sm md:text-base font-medium"
        >
          <span className="relative z-10">{isLoading ? "Doğrulanıyor..." : "Erişim Sağla"}</span>
          <motion.div className="absolute inset-0 bg-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Button>
      </form>
      <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center space-y-3 sm:space-y-4">
        <p className="text-[10px] sm:text-xs text-white/30 tracking-wide font-light text-center px-2">
          Kimliğiniz yok mu?{" "}
          <button
            onClick={onSwitch}
            className="text-white/60 hover:text-white transition-all font-semibold underline underline-offset-4 sm:underline-offset-8 decoration-white/10 hover:decoration-white/30"
          >
            Kayıt Oluştur
          </button>
        </p>
      </div>
    </motion.div>
  )
}
