"use client"

import {useState, useEffect} from "react"
import {motion, AnimatePresence} from "framer-motion"

import {Menu, X, Home, User, Code, Trophy, Mail, Users, GraduationCap, Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"

type SectionId = "home" | "about" | "projects" | "achievements" | "profiles" | "contact" | "education"

interface MobileNavProps {
    currentSection: string
    onSectionChange: (section: SectionId) => void
}

const navItems: { id: SectionId; label: string; icon: typeof Home }[] = [
    {id: "home", label: "Home", icon: Home},
    {id: "about", label: "About", icon: User},
    {id: "achievements", label: "Achievements", icon: Trophy},
    {id: "profiles", label: "Social Profiles", icon: Users},
    {id: "education", label: "Education", icon: GraduationCap},
    {id: "projects", label: "Projects", icon: Code},
    {id: "contact", label: "Contact", icon: Mail},
]

export default function MobileNav({currentSection, onSectionChange}: MobileNavProps) {
    const [isOpen, setIsOpen] = useState(false)
    const {theme, setTheme} = useTheme()

    // lock body scroll while menu is open
    useEffect(() => {
        if (typeof window === "undefined") return
        const prev = document.body.style.overflow
        document.body.style.overflow = isOpen ? "hidden" : prev
        return () => {
            // restore on unmount/close
            document.body.style.overflow = prev
        }
    }, [isOpen])

    const handleSectionChange = (section: SectionId) => {
        onSectionChange(section)
        setIsOpen(false)
    }

    return (
        <>
            <motion.button
                whileTap={{scale: 0.95}}
                onClick={() => setIsOpen(true)}
                className="md:hidden p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
                <Menu size={24}/>
            </motion.button>
            {isOpen && (
                <div className="bg-slate-800 fixed w-full z-50 top-0 left-0">
                    <AnimatePresence>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className="md:hidden"
                        >
                            {/* content container: scrolls internally */}
                            <div className="flex flex-col min-h-screen overflow-y-auto">
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-slate-700">
                                    <motion.h2 initial={{x: -20, opacity: 0}} animate={{x: 0, opacity: 1}}
                                               className="text-2xl font-bold text-white">
                                        Navigation
                                    </motion.h2>

                                    <motion.button
                                        initial={{rotate: -90, opacity: 0}}
                                        animate={{rotate: 0, opacity: 1}}
                                        whileTap={{scale: 0.95}}
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors"
                                    >
                                        <X size={24}/>
                                    </motion.button>
                                </div>

                                {/* Nav items */}
                                <div className="flex-1 p-6">
                                    <div className="space-y-4">
                                        {navItems.map((item, index) => {
                                            const Icon = item.icon
                                            const isActive = currentSection === item.id

                                            return (
                                                <motion.button
                                                    key={item.id}
                                                    initial={{x: -50, opacity: 0}}
                                                    animate={{x: 0, opacity: 1}}
                                                    transition={{delay: index * 0.08}}
                                                    whileTap={{scale: 0.98}}
                                                    onClick={() => handleSectionChange(item.id)}
                                                    // NOTE: you can keep translucent cards, but because the overlay has a solid bg,
                                                    // translucency will reveal the green overlay (not the page beneath).
                                                    className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all ${
                                                        isActive
                                                            ? "bg-gradient-to-r from-slate-700 to-slate-600 text-white shadow-lg"
                                                            : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white"
                                                    }`}
                                                >
                                                    <div
                                                        className={`p-2 rounded-lg ${isActive ? "bg-white/20" : "bg-slate-700"}`}>
                                                        <Icon size={20}/>
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold">{item.label}</div>
                                                        <div className="text-sm opacity-70">{item.label}</div>
                                                    </div>

                                                    {isActive && <motion.div layoutId="activeIndicator"
                                                                             className="ml-auto w-2 h-2 bg-white rounded-full"/>}
                                                </motion.button>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="p-6 border-t border-slate-700">
                                    <motion.button
                                        initial={{y: 20, opacity: 0}}
                                        animate={{y: 0, opacity: 1}}
                                        transition={{delay: 0.6}}
                                        whileTap={{scale: 0.95}}
                                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                        className="w-full flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all"
                                    >
                                        <div className="p-2 rounded-lg bg-slate-700">{theme === "dark" ?
                                            <Sun size={20}/> : <Moon size={20}/>}</div>
                                        <div>
                                            <div className="font-semibold">Switch
                                                to {theme === "dark" ? "Light" : "Dark"} Mode
                                            </div>
                                            <div className="text-sm opacity-70">Change appearance theme</div>
                                        </div>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>

                    </AnimatePresence>
                </div>
            )}
        </>
    )
}
