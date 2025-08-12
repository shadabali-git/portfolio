"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full border border-slate-300 dark:border-slate-600 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {theme === "dark" ? (
                <Sun className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            ) : (
                <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            )}
        </motion.button>
    )
}
