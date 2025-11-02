"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import MainContent from "@/components/main-content"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"

export default function Home() {
  const [selectedItem, setSelectedItem] = useState("what-is-css")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"
    setIsDarkMode(savedTheme === "dark")
    document.documentElement.classList.toggle("dark", savedTheme === "dark")

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setSidebarOpen(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark"
    setIsDarkMode(!isDarkMode)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const handleSelectItem = (item: string) => {
    setSelectedItem(item)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Mobile Menu */}
      {isMobile && <MobileMenu isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}

      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <div className={`${isMobile ? "hidden" : "block"}`}>
        <Sidebar onSelectItem={handleSelectItem} selectedItem={selectedItem} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          isMobile={isMobile}
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
        />
        <MainContent selectedItem={selectedItem} />
      </div>
    </div>
  )
}
