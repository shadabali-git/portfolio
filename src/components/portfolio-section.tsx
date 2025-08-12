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
                        className="text-sm py-2 px-4 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
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

            <Card className="bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
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
                                                    className="text-xs border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
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
                        <Card className="bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-slate-900 dark:text-slate-100 text-xl">{project.name}</CardTitle>
                                        <p className="text-slate-600 dark:text-slate-400 mt-2">{project.description}</p>
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
                        <Card className="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 border-slate-300 dark:border-slate-600">
                            <CardHeader>
                                <CardTitle className="text-slate-900 dark:text-slate-100 flex items-center gap-2">
                                    <span className="text-2xl">{achievement.icon}</span>
                                    {achievement.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-700 dark:text-slate-300 mb-2">{achievement.description}</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{achievement.date}</p>
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
                        <Card className="bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 group">
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
                        <Card className="bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300">
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
