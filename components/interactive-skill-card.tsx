"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface Skill {
  name: string
  level: number
}

interface InteractiveSkillCardProps {
  title: string
  icon: React.ReactNode
  skills: Skill[]
  badges: string[]
}

export function InteractiveSkillCard({ title, icon, skills, badges }: InteractiveSkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <CardHeader className="relative z-10">
        <CardTitle className="flex items-center group-hover:text-blue-600 transition-colors duration-300">
          <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
            {icon}
          </div>
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10">
        {/* Animated skill bars */}
        <div className="space-y-3 mb-4">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isHovered ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 100}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge
              key={badge}
              variant="secondary"
              className="transform hover:scale-105 transition-transform duration-200 hover:bg-blue-100"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {badge}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
