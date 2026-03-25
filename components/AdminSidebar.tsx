'use client'

import { useRouter, usePathname } from 'next/navigation'
import { 
  Home,
  Bell,
  Users,
  Mail,
  GraduationCap,
  LogOut,
  Settings,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

interface SidebarItem {
  label: string
  href: string
  icon: React.ReactNode
  color: string
}

export default function AdminSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST'
      })
      
      if (response.ok) {
        router.push('/admin/login')
      }
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const sidebarItems: SidebarItem[] = [
    {
      label: 'Dashboard',
      href: '/admin/dashboard',
      icon: <Home className="w-5 h-5" />,
      color: 'text-gray-600 hover:text-blue-600'
    },
    {
      label: 'Notices',
      href: '/admin/dashboard',
      icon: <Bell className="w-5 h-5" />,
      color: 'text-gray-600 hover:text-blue-600'
    },
    // {
    //   label: 'Users',
    //   href: '/admin/users',
    //   icon: <Users className="w-5 h-5" />,
    //   color: 'text-gray-600 hover:text-green-600'
    // },
    {
      label: 'Contact Submissions',
      href: '/admin/contact-submissions',
      icon: <Mail className="w-5 h-5" />,
      color: 'text-gray-600 hover:text-blue-600'
    },
    {
      label: 'Student Enrollments',
      href: '/admin/enrollments',
      icon: <GraduationCap className="w-5 h-5" />,
      color: 'text-gray-600 hover:text-purple-600'
    },
    {
      label: 'Settings',
      href: '/admin/settings',
      icon: <Settings className="w-5 h-5" />,
      color: 'text-gray-600 hover:text-gray-800'
    }
  ]

  const isActive = (href: string) => {
    if (href === '/admin/dashboard') {
      return pathname === '/admin/dashboard' || pathname.startsWith('/admin/dashboard')
    }
    return pathname === href
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-white rounded-lg shadow-lg border border-gray-200"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#0b1e6d] to-[#f5c542] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Admin Panel</h1>
                <p className="text-sm text-gray-600">Paul Sir's Classes</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  router.push(item.href)
                  setIsSidebarOpen(false)
                }}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left
                  transition-all duration-200
                  ${isActive(item.href)
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                    : item.color
                  }
                `}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left
                text-red-600 hover:bg-red-50 transition-all duration-200"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
