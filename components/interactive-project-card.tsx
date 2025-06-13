"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  stars?: number
  forks?: number
  image?: string
}

export function InteractiveProjectCard({
  title,
  description,
  longDescription,
  technologies,
  githubUrl,
  liveUrl,
  stars = 0,
  forks = 0,
  image,
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="group perspective-1000 h-80">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 backface-hidden hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-blue-50/30">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </div>
              <div className="flex space-x-2 text-sm text-gray-500">
                {stars > 0 && (
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {stars}
                  </div>
                )}
                {forks > 0 && (
                  <div className="flex items-center">
                    <GitFork className="w-4 h-4 mr-1" />
                    {forks}
                  </div>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                <div className="text-4xl opacity-20">🚀</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 3).map((tech, index) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </Badge>
                ))}
                {technologies.length > 3 && <Badge variant="outline">+{technologies.length - 3}</Badge>}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <CardHeader>
            <CardTitle className="text-white">{title}</CardTitle>
            <CardDescription className="text-blue-100">Detailed Information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-blue-50">{longDescription}</p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-white/20 text-white border-white/30">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex space-x-2 pt-2">
                {githubUrl && (
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                )}
                {liveUrl && (
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
