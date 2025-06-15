"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Coins,
  Shield,
  Zap,
  Globe,
  Users,
  TrendingUp,
  Calendar,
  MapPin,
  ChevronDown,
  Menu,
  X, // <-- FIX: Add Menu import
} from "lucide-react"
import Link from "next/link"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingElements } from "@/components/floating-elements"
import { AnimatedCounter } from "@/components/animated-counter"
import { InteractiveSkillCard } from "@/components/interactive-skill-card"
import { InteractiveProjectCard } from "@/components/interactive-project-card"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("About")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Section refs
  const sectionIds = ["about", "skills", "projects", "experience", "contact"]
  const sectionRefs = useRef(sectionIds.map(() => null))

  useEffect(() => {
    const handleScroll = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const ref = document.getElementById(sectionIds[i])
        if (ref && window.scrollY + 80 >= ref.offsetTop) {
          setActiveSection(sectionIds[i].charAt(0).toUpperCase() + sectionIds[i].slice(1))
          break
        }
      }
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        setActiveSection("Contact");
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-x-hidden">
      <AnimatedBackground />
      <FloatingElements />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50 transition-all duration-300">
        <div className="flex justify-between items-center h-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-bold text-xl gradient-text">Adebanjo Abraham</div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative
                  ${activeSection === item ? "text-blue-800 font-bold" : ""}
                `}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white/80 backdrop-blur-md md:hidden p-4 border-b">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-gray-600 hover:text-blue-600 transition-all duration-300
                  ${activeSection === item ? "text-blue-800 font-bold" : ""}
                `}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div
              className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse-glow transform hover:scale-110 transition-transform duration-500"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <Image
                src="/cat.png"
                alt="Profile Picture"
                width={64}
                height={64}
                className="rounded-full w-16 h-16 object-cover"
              />
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up gradient-text">Adebanjo Abraham</h1>
            <h2 className="text-3xl text-gray-600 mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Blockchain Developer & Web3 Engineer
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Focused on building decentralized applications with passion and expertise in blockchain development,
              smart contracts, and emerging Web3 technologies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <a href="mailto:Navigatorabraham@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg glow-border"
              >
                <Link
                  href="https://github.com/16navigabraham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center whitespace-nowrap"
                >
                  <Github className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">View GitHub</span>
                  <span className="sm:hidden">GitHub</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg glow-border"
              >
                <a
                  href="/Adebanjo_Abraham_CV.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center whitespace-nowrap"
                >
                  <span className="w-4 h-4 mr-2">📄</span>
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed animate-fade-in-up">
                I'm a passionate blockchain developer with expertise in building scalable decentralized applications and
                smart contracts. My journey in Web3 began in 2023, and since then, I've contributed to various DeFi
                protocols, NFT marketplaces, and blockchain infrastructure projects.
              </p>
              <p
                className="text-gray-600 text-lg leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                I specialize in Ethereum development using Solidity, but I'm also experienced with other blockchain
                networks including Polygon, Base, and Layer 2 solutions. I believe in the transformative
                power of blockchain technology and its potential to create a more decentralized and equitable digital
                economy.
              </p>
              <div className="flex space-x-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <Button variant="outline" size="sm" className="transform hover:scale-105 transition-all duration-300">
                  <Link
                    href="https://www.linkedin.com/in/adebanjo-abraham/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="transform hover:scale-105 transition-all duration-300">
                  <Link
                    href="https://github.com/16navigabraham"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
                <CardContent className="p-6 text-center">
                  <Coins className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <AnimatedCounter end={5} suffix="+" />
                  <div className="text-sm text-gray-600">Smart Contracts</div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <AnimatedCounter end={5} suffix="+" />
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
                <CardContent className="p-6 text-center">
                  <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <AnimatedCounter end={100} suffix="%" />
                  <div className="text-sm text-gray-600">Security Record</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <InteractiveSkillCard
              title="Blockchain Development"
              icon={<Code className="w-5 h-5 text-blue-600" />}
              skills={[
                { name: "Solidity", level: 95 },
                { name: "Ethereum", level: 90 },
                { name: "Foundry", level: 45 },
              ]}
              badges={["Solidity", "Ethereum", "Polygon", "Base", "Arbitrum", "Optimism","ZkSync"]}
            />

            <InteractiveSkillCard
              title="Web3 Technologies"
              icon={<Globe className="w-5 h-5 text-green-600" />}
              skills={[
                { name: "Web3.js", level: 88 },
                { name: "Ethers.js", level: 90 },
                { name: "DeFi Protocols", level: 85 },
              ]}
              badges={["Web3.js", "Ethers.js", "Foundry", "Chainlink", "OpenZeppelin", "IPFS"]}
            />

            <InteractiveSkillCard
              title="Frontend & Tools"
              icon={<Zap className="w-5 h-5 text-purple-600" />}
              skills={[
                { name: "javascript", level: 45 },
                { name: "TypeScript", level: 45 },
                { name: "Next.js", level: 85 },
                { name: "CSS", level: 85 },
                { name: "HTML", level: 85 },
              ]}
              badges={["HTML", "Next.js", "TypeScript", "Node.js", "CSS", "javascript"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InteractiveProjectCard
              title="Meme Vibe"
              description="Farcaster Mini-app"
              longDescription="Developed a decentralized mini application that allows users to easily create, share, and mint memes on Farcaster. Integrated a meme battle feature to drive user engagement and added NFT minting functionality for onchain ownership."
              technologies={["Solidity", "Typescript", "Pinata", "javascript", "OpenZeppelin","CSS","Node.js","Farcaster Mini-App Framework"]}
              liveUrl="https://farcaster.xyz/miniapps/SE50u1CWD5fB/memevibe"
              stars={5}
              forks={5}
              image="/MV.png"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: "Developer",
                company: "Base Batches",
                period: "2025 - Present",
                description:
                  "Lead development of a farcaster mini-app for meme creation and sharing. Implemented NFT minting and meme battle features to enhance user engagement.",
                badges: ["Solidity", "DeFi", "Smart Contracts", "Team Leadership"],
              },
            ].map((job, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">
                        {job.title}
                      </h3>
                      <p className="text-blue-600 font-medium">{job.company}</p>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {job.period}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badge}
                        variant="secondary"
                        className="transform hover:scale-105 transition-transform duration-200"
                        style={{ animationDelay: `${badgeIndex * 100}ms` }}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative z-10"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Build the Future Together</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Currently seeking opportunities to leverage my expertise in smart contract development, DeFi protocols, and Web3 infrastructure. Open to discussing technical collaborations and innovative blockchain solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-6">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <a href="mailto:Navigatorabraham@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <a
                href="https://github.com/16navigabraham"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <a
                href="https://www.linkedin.com/in/adebanjo-abraham/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <a
              href="https://x.com/AbrahamNAVIG1"
              target="_blank"
              rel="noopener noreferrer"
              >
              <X className="w-4 h-4 mr-2" />
             X (formerly Twitter)
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Adebanjo Abraham. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
