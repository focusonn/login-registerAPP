"use client"

import { motion } from "framer-motion"
import { Button } from "../components/ui/button"

interface WelcomeProps {
  onLogout: () => void
  name: string
}

export default function Welcome({ onLogout, name }: WelcomeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center space-y-8 sm:space-y-10 md:space-y-12 px-4"
    >
      <div className="space-y-3 sm:space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full mx-auto mb-6 sm:mb-7 md:mb-8 flex items-center justify-center"
        >
          <span className="text-black text-2xl sm:text-3xl md:text-4xl font-light">{name.charAt(0)}</span>
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extralight tracking-tighter italic text-white leading-tight"
        >
          Hoş Geldin, <br className="sm:hidden" />
          <span className="sm:block">{name}</span>
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-white/40 max-w-xs sm:max-w-sm md:max-w-md mx-auto text-sm sm:text-base font-light leading-relaxed tracking-wide px-2"
      >
        Sizin için özel olarak tasarlanmış bu karanlık evrende her şey kontrolünüz altında.
      </motion.p>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
        <Button
          onClick={onLogout}
          variant="outline"
          className="border-white/10 hover:bg-white hover:text-black transition-all duration-1000 px-8 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8 text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] bg-transparent rounded-full"
        >
          Oturumu Kapat
        </Button>
      </motion.div>
    </motion.div>
  )
}
