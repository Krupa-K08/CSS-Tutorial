"use client"

import { useState } from "react"

interface ProjectViewProps {
  section: string
}

const projects: Record<string, { title: string; description: string; tasks: string[] }> = {
  introduction: {
    title: "Personal Portfolio Starter",
    description: "Create a basic personal portfolio page with proper CSS styling",
    tasks: [
      "Create an HTML page with header, main content, and footer",
      "Add navigation menu with links",
      "Style the layout using CSS selectors",
      "Use different colors for different sections",
      "Add proper spacing with margins and padding",
    ],
  },
  properties: {
    title: "Styled Card Collection",
    description: "Create multiple styled cards showcasing CSS properties",
    tasks: [
      "Create 3-4 card components",
      "Use different background colors for each card",
      "Add borders with different styles",
      "Use various fonts and font sizes",
      "Adjust margins and padding for spacing",
    ],
  },
  intermediate: {
    title: "Multi-Section Layout",
    description: "Build a website with multiple sections using selectors and positioning",
    tasks: [
      "Create a layout with multiple sections",
      "Use selectors to target specific elements",
      "Apply positioning to elements",
      "Create a sidebar and main content area",
      "Use specificity rules effectively",
    ],
  },
  advanced: {
    title: "Responsive Website",
    description: "Build a fully responsive website that works on all devices",
    tasks: [
      "Create a responsive header with navigation",
      "Build a flexible grid layout",
      "Add media queries for different screen sizes",
      "Test on mobile, tablet, and desktop sizes",
      "Implement flexible images and fonts",
    ],
  },
}

export default function ProjectView({ section }: ProjectViewProps) {
  const sectionKey = section as keyof typeof projects
  const project = projects[sectionKey]
  const [completedTasks, setCompletedTasks] = useState<Set<number>>(new Set())

  if (!project) {
    return <div className="p-8 text-foreground">Project not found</div>
  }

  const toggleTask = (index: number) => {
    const newCompleted = new Set(completedTasks)
    if (newCompleted.has(index)) {
      newCompleted.delete(index)
    } else {
      newCompleted.add(index)
    }
    setCompletedTasks(newCompleted)
  }

  const progress = (completedTasks.size / project.tasks.length) * 100

  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto">
      <div className="bg-card border border-border rounded-xl shadow-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">{project.title}</h1>

        <p className="text-lg text-secondary mb-10">{project.description}</p>

        <div className="mb-12 bg-muted rounded-lg p-6 border border-border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-foreground">Progress</h2>
            <span className="text-2xl font-bold text-accent">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-teal-500 to-accent h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">Tasks</h2>
          <div className="space-y-3">
            {project.tasks.map((task, index) => (
              <label
                key={index}
                className="flex items-start p-4 md:p-5 bg-muted border border-border rounded-lg cursor-pointer hover:bg-slate-800 hover:border-accent transition-all duration-300 group"
              >
                <input
                  type="checkbox"
                  checked={completedTasks.has(index)}
                  onChange={() => toggleTask(index)}
                  className="w-5 h-5 mt-1 cursor-pointer accent-accent"
                />
                <span
                  className={`ml-4 text-base font-medium leading-relaxed transition-all duration-300 ${
                    completedTasks.has(index) ? "line-through text-secondary" : "text-foreground"
                  }`}
                >
                  {task}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-muted to-slate-800 border-2 border-accent rounded-lg p-6 md:p-8">
          <h3 className="font-bold text-accent mb-4 text-lg">Tips for Success</h3>
          <ul className="text-foreground list-disc list-inside space-y-3">
            <li>Start with HTML structure first</li>
            <li>Use external CSS file for better organization</li>
            <li>Test in browser developer tools (F12)</li>
            <li>Make it responsive with media queries</li>
            <li>Validate your HTML and CSS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
