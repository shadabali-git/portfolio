"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import BinaryTreeNav from "@/components/binary-tree-nav"
import MobileNav from "@/components/mobile-nav"
import PortfolioSection from "@/components/portfolio-section"
import ThemeToggle from "@/components/theme-toggle"
import { portfolioData } from "@/lib/portfolio-data"

export default function Home() {
  const [currentSection, setCurrentSection] = useState<"home"|"about"|"contact"|"projects"|"achievements"|"profiles"|"education">("home");
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
            <div className="w-16 h-16 border-4 border-slate-600 dark:border-slate-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold mb-2">Loading Portfolio</h2>
            <p className="text-slate-600 dark:text-slate-400">Initializing binary tree navigation...</p>
          </motion.div>
        </div>
    )
  }

  return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
        {/* Header */}
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700"
        >
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <motion.h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100" whileHover={{ scale: 1.05 }}>
              Shady
            </motion.h1>
              <div className="flex items-center gap-4">

                  <div className="text-sm text-slate-600 dark:text-slate-400 hidden md:block">Software Engineer • Full Stack
                      Developer
                  </div>
                  <div className="flex md:block">
                      <ThemeToggle/>
                  </div>



                  {/* Mobile navigation */}
                  <MobileNav currentSection={currentSection} onSectionChange={setCurrentSection}/>
              </div>
          </div>
        </motion.header>

          <div className="pt-20 flex">
              {/* Binary Tree Navigation */}
              <div className="hidden md:block">
              <BinaryTreeNav currentSection={currentSection} onSectionChange={setCurrentSection}/>
              </div>

              {/* Main Content */}
              <main className="flex-1 p-4 md:p-6">
                  <AnimatePresence mode="wait">
                      <PortfolioSection key={currentSection} section={currentSection}
                                        data={portfolioData[currentSection]}/>
                  </AnimatePresence>
              </main>
          </div>
      </div>
  )
}
