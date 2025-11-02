"use client"

import { useState } from "react"

interface SidebarProps {
  onSelectItem: (item: string) => void
  selectedItem: string
}

const sections = [
  {
    title: "Introduction",
    id: "introduction",
    items: [
      { label: "What is CSS?", id: "what-is-css" },
      { label: "Why do we need CSS?", id: "why-css" },
      { label: "How to add CSS?", id: "how-to-add-css" },
      { label: "Selectors", id: "selectors" },
    ],
  },
  {
    title: "Properties",
    id: "properties",
    items: [
      { label: "Colors", id: "colors" },
      { label: "Borders", id: "borders" },
      { label: "Font", id: "font" },
      { label: "Margins and Paddings", id: "margins-paddings" },
      { label: "CSS Inspection", id: "css-inspection" },
    ],
  },
  {
    title: "Intermediate",
    id: "intermediate",
    items: [
      { label: "Specificity and Inheritance", id: "specificity" },
      { label: "Advanced Selectors", id: "intermediate-selectors" },
      { label: "Position", id: "position" },
    ],
  },
  {
    title: "Advanced",
    id: "advanced",
    items: [
      { label: "Display", id: "display" },
      { label: "Float", id: "float" },
      { label: "Responsiveness", id: "responsiveness" },
      { label: "Media Queries", id: "media-queries" },
    ],
  },
]

export default function Sidebar({ onSelectItem, selectedItem }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState(new Set(["introduction"]))

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  return (
    <aside className="w-72 bg-gradient-to-b from-slate-900 to-slate-950 text-foreground overflow-y-auto flex flex-col h-screen border-r border-border">
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold text-accent">CSS Course</h1>
        <p className="text-secondary text-sm mt-1">Master Modern Styling</p>
      </div>

      <div className="flex-1 py-4 px-3 space-y-2">
        {sections.map((section) => (
          <div key={section.id}>
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-slate-800 transition-all duration-300 ease-in-out group"
            >
              <span className="text-xs font-semibold text-secondary uppercase tracking-wide">{section.title}</span>
              <span
                className={`text-accent transition-transform duration-300 ${expandedSections.has(section.id) ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>

            {expandedSections.has(section.id) && (
              <div className="py-2 pl-4 space-y-1">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onSelectItem(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-0.95rem transition-all duration-300 ${
                      selectedItem === item.id
                        ? "bg-accent text-primary-foreground font-semibold border-l-2 border-l-accent pl-2"
                        : "text-secondary hover:text-foreground hover:bg-slate-800"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                <div className="flex gap-2 px-2 py-4 pt-4 border-t border-border mt-4">
                  <button
                    onClick={() => onSelectItem(`${section.id}-quiz`)}
                    className="flex-1 bg-teal-600 hover:bg-teal-700 text-foreground text-sm font-semibold py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Quiz
                  </button>
                  <button
                    onClick={() => onSelectItem(`${section.id}-project`)}
                    className="flex-1 bg-accent hover:bg-cyan-400 text-primary-foreground text-sm font-semibold py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Project
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-border p-4 mt-auto">
        <p className="text-xs text-secondary text-center">Keep learning every day</p>
      </div>
    </aside>
  )
}
