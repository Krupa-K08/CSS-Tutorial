"use client"

import { useState } from "react"

interface CodeExampleProps {
  code: string
}

export default function CodeExample({ code }: CodeExampleProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center px-6 py-4 bg-muted border-b border-border">
        <span className="text-sm font-mono text-secondary">CSS Code</span>
        <button
          onClick={handleCopy}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
            copied
              ? "bg-teal-600 text-foreground"
              : "bg-accent hover:bg-cyan-400 text-primary-foreground hover:shadow-md"
          }`}
        >
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-6 md:p-8 overflow-x-auto">
        <code className="text-sm md:text-base text-foreground font-mono leading-relaxed">{code}</code>
      </pre>
    </div>
  )
}
