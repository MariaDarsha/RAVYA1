'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, Zap, Users, User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: null,
    },
    {
      href: '/dashboard/learn',
      label: 'Learn',
      icon: BookOpen,
    },
    {
      href: '/dashboard/build',
      label: 'Build',
      icon: Zap,
    },
    {
      href: '/dashboard/connect',
      label: 'Connect',
      icon: Users,
    },
    {
      href: '/dashboard/profile',
      label: 'Profile',
      icon: User,
    },
  ]

  return (
    <>
      {/* Mobile Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-sidebar-border transform transition-transform md:relative md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 pt-16 md:pt-6">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="text-2xl font-bold text-sidebar-primary">RAVYA</div>
          </Link>

          <nav className="space-y-2">
            {routes.map((route) => {
              const Icon = route.icon
              const isActive = pathname === route.href || pathname.startsWith(route.href + '/')

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent'
                  }`}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  <span className="font-medium">{route.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Sign Out Button */}
        <div className="absolute bottom-6 left-0 right-0 px-6">
          <Button variant="outline" className="w-full">
            Sign Out
          </Button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
