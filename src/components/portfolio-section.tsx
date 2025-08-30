"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Mail, Phone, MapPin, Code, Trophy, Users, Linkedin, Twitter, Edit } from "lucide-react"

interface PortfolioSectionProps {
    section: string
    data: any
}

export default function PortfolioSection({ section, data }: PortfolioSectionProps) {
    const renderContent = () => {
        switch (section) {
            case "home":
                return <HomeSection data={data} />
            case "about":
                return <AboutSection data={data} />
            case "projects":
                return <ProjectsSection data={data} />
            case "achievements":
                return <AchievementsSection data={data} />
            case "profiles":
                return <ProfilesSection data={data} />
            case "education":
                return <EducationSection data={data} />
            case "contact":
                return <ContactSection data={data} />
            default:
                return <div>Section not found</div>
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
        >
            {renderContent()}
        </motion.div>
    )
}

const colors = [
    "bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200",
    "bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200",
    "bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200",
    "bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200",
    "bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200",
    "bg-pink-200 text-pink-800 dark:bg-pink-800 dark:text-pink-200",
    "bg-indigo-200 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-200",
    "bg-orange-200 text-orange-800 dark:bg-orange-800 dark:text-orange-200",
    "bg-teal-200 text-teal-800 dark:bg-teal-800 dark:text-teal-200",
    "bg-cyan-200 text-cyan-800 dark:bg-cyan-800 dark:text-cyan-200",
    "bg-lime-200 text-lime-800 dark:bg-lime-800 dark:text-lime-200",
    "bg-rose-200 text-rose-800 dark:bg-rose-800 dark:text-rose-200",
];


function HomeSection({ data }: { data: any }) {
    return (
        <div className="text-center space-y-8">
            <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}>
                <h1 className="text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4">{data.name}</h1>
                <p className="text-2xl text-slate-700 dark:text-slate-300 mb-6">{data.title}</p>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    {data.description}
                </p>
            </motion.div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4"
            >
                {data.skills.map((skill: string, index: number) => (
                    <Badge
                        key={index}
                        variant="secondary"
                        className={`text-sm py-2 px-4 ${colors[index % colors.length]}`}
                    >
                        {skill}
                    </Badge>
                ))}
            </motion.div>
        </div>
    )
}

function AboutSection({ data }: { data: any }) {
    return (
        <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">About Me</h2>

            <Card className="bg-gradient-to-tl hover:from-slate-400 via-slate-200 to-white dark:from-slate-700 dark:via-slate-800 dark:to-slate-600 dark:bg-slate-800 border-slate-200 dark:border-slate-700 transition-all duration-300">
                <CardContent className="p-8">
                    <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">{data.bio}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Experience</h3>
                            <div className="space-y-4">
                                {data.experience.map((exp: any, index: number) => (
                                    <div key={index} className="border-l-2 border-slate-500 dark:border-slate-400 pl-4">
                                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">{exp.role}</h4>
                                        <p className="text-slate-700 dark:text-slate-300">{exp.company}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{exp.period}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Skills</h3>
                            <div className="space-y-3">
                                {data.skillCategories.map((category: any, index: number) => (
                                    <div key={index}>
                                        <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-2">{category.name}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill: string, skillIndex: number) => (
                                                <Badge
                                                    key={skillIndex}
                                                    variant="outline"
                                                    className={`text-sm py-2 px-4 ${colors[index % colors.length]}`}
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

function ProjectsSection({ data }: { data: any }) {
    return (
        <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">Projects</h2>

            <div className="grid gap-6">
                {data.projects.map((project: any, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="bg-gradient-to-tl hover:from-purple-200 via-white to-white dark:from-slate-700 dark:via-slate-800 dark:to-slate-600 dark:bg-slate-800 border-slate-200 dark:border-slate-700 transition-all duration-300">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-slate-900 dark:text-slate-100 text-xl">{project.name}</CardTitle>
                                        <p className="text-slate-600 dark:text-slate-100/50 mt-2">{project.description}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        {project.github && (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                asChild
                                                className="border-slate-300 dark:border-slate-600 bg-transparent"
                                            >
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            </Button>
                                        )}
                                        {project.demo && (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                asChild
                                                className="border-slate-300 dark:border-slate-600 bg-transparent"
                                            >
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech: string, techIndex: number) => (
                                        <Badge
                                            key={techIndex}
                                            variant="secondary"
                                            className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

function AchievementsSection({ data }: { data: any }) {
    return (
        <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">Achievements</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {data.achievements.map((achievement: any, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="bg-gradient-to-tl hover:from-orange-200 via-white to-white dark:from-slate-700 dark:via-slate-800 dark:to-slate-600 dark:bg-slate-800 border-slate-200 dark:border-slate-700 cursor-pointer">
                            <CardHeader>
                                <CardTitle className="text-slate-900 dark:text-slate-100 flex items-center gap-2">
                                    <span className="text-2xl">{achievement.icon}</span>
                                    {achievement.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    {achievement.description}
                                </p>

                                <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                                    <span className="italic">{achievement.date}</span>
                                    {achievement.link && (
                                        <a
                                            href={achievement.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                        >
                                            View
                                        </a>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

function ProfilesSection({ data }: { data: any }) {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "github":
                return <Github className="w-6 h-6" />
            case "linkedin":
                return <Linkedin className="w-6 h-6" />
            case "twitter":
                return <Twitter className="w-6 h-6" />
            case "code":
                return <Code className="w-6 h-6" />
            case "trophy":
                return <Trophy className="w-6 h-6" />
            case "edit":
                return <Edit className="w-6 h-6" />
            case "users":
                return <Users className="w-6 h-6" />
            default:
                return <Code className="w-6 h-6" />
        }
    }

    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">{data.title}</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">{data.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.platforms.map((platform: any, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className={`${platform.color} border-slate-200 dark:from-slate-700 dark:to-slate-600 dark:bg-slate-800 dark:border-slate-700 transition-all duration-300 group`}>
                            <CardHeader className="pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-slate-200 dark:bg-slate-700 rounded-lg group-hover:bg-slate-300 dark:group-hover:bg-slate-600 transition-colors">
                                        {getIcon(platform.icon)}
                                    </div>
                                    <CardTitle className="text-slate-900 dark:text-slate-100 text-lg">{platform.name}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{platform.description}</p>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full border-slate-300 dark:border-slate-600 bg-transparent"
                                >
                                    <a href={platform.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <ExternalLink className="w-4 h-4" />
                                        Visit Profile
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

function EducationSection({ data }: { data: any }) {
    return (
        <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">Education</h2>

            <div className="grid gap-6">
                {data.education.map((edu: any, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="bg-gradient-to-tl hover:from-green-200 via-white to-white border-slate-200 dark:from-slate-700 dark:to-slate-600 dark:via-slate-800 dark:bg-slate-800 dark:border-slate-700 transition-all transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="text-slate-900 dark:text-slate-100 text-xl">{edu.institution}</CardTitle>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">{edu.period}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="font-semibold text-slate-900 dark:text-slate-100">{edu.degree}</p>
                                {edu.cgpa && <p className="text-slate-700 dark:text-slate-300 mb-2">CGPA: {edu.cgpa}</p>}
                                {edu.coursework && (
                                    <>
                                        <h4 className="font-semibold mt-2 mb-1">Relevant Coursework:</h4>
                                        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 text-sm">
                                            {edu.coursework.map((course: string, idx: number) => (
                                                <li key={idx}>{course}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}


function ContactSection({ data }: { data: any }) {
    return (
        <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">Get In Touch</h2>

            <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                    <CardHeader>
                        <CardTitle className="text-slate-900 dark:text-slate-100">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                            <Mail className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                            <span>{data.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                            <Phone className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                            <span>{data.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                            <MapPin className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                            <span>{data.location}</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                    <CardHeader>
                        <CardTitle className="text-slate-900 dark:text-slate-100">Let's Connect</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-slate-700 dark:text-slate-300 mb-6">
                            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
                            discuss a project or just say hello!
                        </p>
                        <div className="flex gap-4">
                            {data.social.map((link: any, index: number) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    asChild
                                    className="border-slate-300 dark:border-slate-600 bg-transparent"
                                >
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.name}
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
