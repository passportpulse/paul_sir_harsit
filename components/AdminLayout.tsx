'use client'

import { ReactNode } from 'react'
import AdminSidebar from './AdminSidebar'

interface AdminLayoutProps {
  children: ReactNode
  title?: string
  subtitle?: string
}

export default function AdminLayout({ 
  children, 
  title = 'Admin Dashboard', 
  subtitle = 'Manage your content and users' 
}: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <AdminSidebar />
      
      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 lg:pl-0 pl-16">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                {subtitle && (
                  <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
                )}
              </div>
              
              {/* Admin Info */}
              <div className="flex items-center space-x-4">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-600">admin@paulsirsclasses.com</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-[#0b1e6d] to-[#f5c542] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}
