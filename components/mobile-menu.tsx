"use client"

import Sidebar from "./sidebar"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} aria-hidden="true" />

      {/* Sidebar */}
      <div className="fixed left-0 top-16 bottom-0 w-72 bg-gradient-to-b from-slate-900 to-slate-950 z-50 overflow-y-auto shadow-xl">
        <Sidebar onSelectItem={onClose} selectedItem="" />
      </div>
    </>
  )
}
