"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"

interface RegisterProps {
  onRegister: (email: string, pass: string, name: string) => void
  onSwitch: () => void
}

export default function Register({ onRegister, onSwitch }: RegisterProps) {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [name, setName] = useState("")

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
          Kayıt
        </h2>
        <div className="h-[1px] w-12 sm:w-14 md:w-16 bg-gradient-to-r from-white/40 to-transparent mb-4 sm:mb-5 md:mb-6" />
        <p className="text-white/20 text-[10px] sm:text-xs md:text-sm font-light tracking-[0.08em] sm:tracking-[0.09em] md:tracking-[0.1em] uppercase">
          Yeni bir veri profili tanımlayın.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8 md:space-y-10">
        <div className="space-y-3 sm:space-y-4">
          <label className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] font-bold text-white/15 ml-2 sm:ml-3">
            Kullanıcı Adı
          </label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Kayıtlı İsim"
            className="bg-white/[0.02] border-white/5 focus:border-white/10 h-12 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl transition-all duration-700 focus:bg-white/[0.05] focus:ring-0 text-sm sm:text-base"
          />
        </div>
        <div className="space-y-3 sm:space-y-4">
          <label className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] font-bold text-white/15 ml-2 sm:ml-3">
            E-posta Adresi
          </label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="name@nexus.com"
            className="bg-white/[0.02] border-white/5 focus:border-white/10 h-12 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl transition-all duration-700 focus:bg-white/[0.05] focus:ring-0 text-sm sm:text-base"
          />
        </div>
        <div className="space-y-3 sm:space-y-4">
          <label className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] font-bold text-white/15 ml-2 sm:ml-3">
            Güvenlik Kodu
          </label>
          <Input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="••••••••"
            className="bg-white/[0.02] border-white/5 focus:border-white/10 h-12 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl transition-all duration-700 focus:bg-white/[0.05] focus:ring-0 text-sm sm:text-base"
          />
        </div>
        <Button
          onClick={() => onRegister(email, pass, name)}
          className="w-full bg-white text-black hover:bg-neutral-300 transition-all duration-1000 h-12 sm:h-14 md:h-16 lg:h-18 rounded-xl sm:rounded-2xl text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] shadow-2xl shadow-white/5 overflow-hidden relative group"
        >
          <span className="relative z-10">Profil Oluştur</span>
          <motion.div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </Button>
      </div>
      <p className="mt-6 sm:mt-7 md:mt-8 text-center text-xs sm:text-sm text-white/40 px-2">
        Zaten bir hesabın var mı?{" "}
        <button onClick={onSwitch} className="text-white hover:text-white/80 transition-colors font-medium">
          Giriş Yap
        </button>
      </p>
    </motion.div>
  )
}
