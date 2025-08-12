"use client"

import {motion} from "framer-motion"
import {Home, User, Code, Trophy, Mail, Users, Zap ,GraduationCap} from "lucide-react"

import {useTheme} from "next-themes"
import {useEffect, useState} from "react"


type SectionId = "home" | "about" | "projects" | "achievements" | "profiles" | "contact"|"education";
interface BinaryTreeNavProps {
    currentSection: string
    onSectionChange: (section: SectionId) => void
}

const treeStructure:Record<SectionId, {icon: typeof Home; label: string; level: number; x: number; y: number; color: string}> = {
    "home": {icon: Home, label: "Home", level: 0, x: 50, y: 10, color: "from-blue-500 to-cyan-500"},
    "about": {icon: User, label: "About", level: 1, x: 25, y: 35, color: "from-green-500 to-emerald-500"},
    "projects": {icon: Code, label: "Projects", level: 1, x: 75, y: 35, color: "from-purple-500 to-violet-500"},
    "achievements": {icon: Trophy, label: "Achievements", level: 2, x: 12.5, y: 80, color: "from-yellow-500 to-orange-500",},
    "profiles": {icon: Users, label: "Social Profiles", level: 2, x: 37.5, y: 80, color: "from-pink-500 to-rose-500"},
    "education":{icon: GraduationCap, label: "Education", level: 2, x: 62.4, y: 80, color: "from-emerald-800 to-emerald-500"},
    "contact": {icon: Mail, label: "Contact", level: 2, x: 89.4, y: 80, color: "from-indigo-500 to-blue-500"},
}

const connections = [
    {from: "home", to: "about"},
    {from: "home", to: "projects"},
    {from: "about", to: "achievements"},
    {from: "about", to: "profiles"},
    {from: "projects", to:"education"},
    {from: "projects", to: "contact"},
]

export default function BinaryTreeNav({currentSection, onSectionChange}: BinaryTreeNavProps) {
    const {theme} = useTheme()
    const [hoveredNode, setHoveredNode] = useState<string | null>(null)
    const [particles, setParticles] = useState<Array<{ id:string; x: number; y: number }>>([])

    useEffect(() => {
        const interval = setInterval(() => {
            setParticles((prev) => [...prev.slice(-20), {
                id:crypto.randomUUID(),
                x: Math.random() * 100,
                y: Math.random() * 100
            }])
        }, 200)
        return () => clearInterval(interval)
    }, [])

    const getNodePath = (nodeId: string): string[] => {
        const paths: { [key: string]: string[] } = {
            home: ["home"],
            about: ["home", "about"],
            projects: ["home", "projects"],
            achievements: ["home", "about", "achievements"],
            profiles: ["home", "about", "profiles"],
            education: ["home", "projects", "education"],
            contact: ["home", "projects", "contact"],

        }
        return paths[nodeId] || ["home"]
    }

    return (
        <div
            className="w-96 p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-r border-slate-200 dark:border-slate-700 min-h-screen relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: [0, 1, 0], scale: [0, 1, 0]}}
                        transition={{duration: 2}}
                        className="absolute w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full"
                        style={{left: `${particle.x}%`, top: `${particle.y}%`}}
                    />
                ))}
            </div>

            <motion.div
                initial={{x: -100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}
                className="relative z-10"
            >
                <div className="text-center mb-8">
                    <motion.div
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition={{delay: 0.3, type: "spring"}}
                        className="inline-flex items-center gap-2 mb-3"
                    >
                        <Zap className="w-6 h-6 text-yellow-500"/>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
                            Portfolio Tree
                        </h2>
                    </motion.div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Navigate through my journey</p>
                </div>

                <div className="relative h-80 mb-8 ">
                    {/* Animated connection lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <defs>
                                <linearGradient id="connectionGradient"  x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="red"/>
                                    <stop offset="100%" stopColor="blue"/>
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                        </defs>

                        {connections.map((connection, index) => {
                            const fromNode = treeStructure[connection.from as keyof typeof treeStructure]
                            const toNode = treeStructure[connection.to as keyof typeof treeStructure]
                            const isActive =
                                getNodePath(currentSection).includes(connection.from) &&
                                getNodePath(currentSection).includes(connection.to)

                            return (
                                <motion.line
                                    key={`${connection.from}-${connection.to}`}
                                    x1={`${fromNode.x}%`}
                                    y1={`${fromNode.y}%`}
                                    x2={`${toNode.x}%`}
                                    y2={`${toNode.y}%`}
                                    fill="none"
                                    stroke={isActive ? "url(#connectionGradient)" : "rgb(148 163 184)"}
                                    strokeWidth={isActive ? "3" : "2"}
                                    filter={isActive ? "url(#glow)" : "none"}
                                    initial={{pathLength: 0}}
                                    animate={{pathLength: 1}}
                                    transition={{delay: index * 0.2, duration: 0.8}}
                                    className="drop-shadow-sm"
                                />
                            )
                        })}
                    </svg>

                    {/* Enhanced nodes */}
                    {Object.entries(treeStructure).map(([id, node]) => {
                        const sectionId = id as SectionId;
                        const isActive = currentSection === sectionId
                        const isInPath = getNodePath(currentSection).includes(sectionId)

                        return (
                            <motion.div
                                key={sectionId}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                                style={{left: `${node.x}%`, top: `${node.y}%`}}
                                initial={{scale: 0, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                transition={{delay: node.level * 0.3, type: "spring", stiffness: 200}}
                            >
                                <motion.button
                                    onClick={() => onSectionChange(sectionId)}
                                    onHoverStart={() => setHoveredNode(id)}
                                    onHoverEnd={() => setHoveredNode(null)}
                                    className={`relative p-4 rounded-2xl border-2 transition-all duration-500 group ${
                                        isActive
                                            ? `bg-gradient-to-br ${node.color} border-white/20 shadow-2xl shadow-black/25`
                                            : isInPath
                                                ? "bg-slate-200 dark:bg-slate-700 border-slate-400 dark:border-slate-500 shadow-lg"
                                                : "bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:shadow-xl"
                                    }`}
                                    whileHover={{scale: 1.15, rotate: [0, -5, 5, 0]}}
                                    whileTap={{scale: 0.9}}
                                >
                                    {isActive && (
                                        <motion.div
                                            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"
                                            animate={{scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5]}}
                                            transition={{duration: 2, repeat: Number.POSITIVE_INFINITY}}
                                        />
                                    )}

                                    <node.icon
                                        className={`w-7 h-7 transition-colors duration-300 ${
                                            isActive
                                                ? "text-white drop-shadow-lg"
                                                : isInPath
                                                    ? "text-slate-700 dark:text-slate-300"
                                                    : "text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200"
                                        }`}
                                    />

                                    <motion.div
                                        className={`absolute top-full mt-3 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap px-2 py-1 rounded-lg ${
                                            isActive
                                                ? "text-slate-900 dark:text-slate-100 bg-white/90 dark:bg-slate-800/90 shadow-lg"
                                                : "text-slate-600 dark:text-slate-400"
                                        }`}
                                        initial={{opacity: 0, y: -10}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{delay: node.level * 0.3 + 0.2}}
                                    >
                                        {node.label}
                                    </motion.div>
                                </motion.button>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                    className="p-5 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-slate-200 dark:border-slate-600 shadow-inner"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.8}}
                >
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        Navigation Path
                    </h3>

                    <div className="flex items-center gap-2 flex-wrap">
                        {getNodePath(currentSection).map((nodeId, index) => (
                            <motion.div
                                key={nodeId}
                                className="flex items-center gap-2"
                                initial={{opacity: 0, x: -10}}
                                animate={{opacity: 1, x: 0}}
                                transition={{delay: index * 0.1}}
                            >
                <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                        nodeId === currentSection
                            ? "bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 text-white dark:text-slate-900"
                            : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                    }`}
                >
                  {treeStructure[nodeId as keyof typeof treeStructure]?.label}
                </span>
                                {index < getNodePath(currentSection).length - 1 && (
                                    <span className="text-slate-400 dark:text-slate-500">→</span>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                        <span className="font-medium">Level:</span>{" "}
                        {treeStructure[currentSection as keyof typeof treeStructure]?.level} •
                        <span className="font-medium ml-2">Depth:</span> {getNodePath(currentSection).length - 1}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
