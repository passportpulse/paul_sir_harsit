'use client'

import { useState, useEffect } from 'react'
import { 
  Settings, 
  Save, 
  Bell, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Palette,
  Shield,
  Database,
  RefreshCw
} from 'lucide-react'
import AdminLayout from '@/components/AdminLayout'

interface SiteSettings {
  siteName: string
  siteDescription: string
  contactEmail: string
  contactPhone: string
  whatsappNumber: string
  address: string
  googleMapsUrl: string
  facebookUrl: string
  instagramUrl: string
  youtubeUrl: string
  primaryColor: string
  secondaryColor: string
  faviconUrl: string
  logoUrl: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
  enableNotifications: boolean
  enableEmailAlerts: boolean
  enableSmsAlerts: boolean
  maintenanceMode: boolean
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>({
    siteName: 'Paul Sir\'s Classes',
    siteDescription: 'Premier commerce coaching institute offering ICSE, ISC, CBSE, B.Com, BBA, MBA, CA, CMA, and CS courses',
    contactEmail: 'paulsirsclasses@gmail.com',
    contactPhone: '9007019442',
    whatsappNumber: '9007019442',
    address: '35B, South Sinthee Road, Kolkata – 700050',
    googleMapsUrl: 'https://maps.app.goo.gl/Q5C1JLrMGMvXAZYm7',
    facebookUrl: 'https://www.facebook.com/share/1Hm8WmUxWG/',
    instagramUrl: 'https://www.instagram.com/paul_sirs_classes?igsh=MWx0ZXFsdGh3Nm51Yw==',
    youtubeUrl: 'https://youtube.com/@paulsirscommerceclasses?si=rF4Rf_-Q5eCWwMki',
    primaryColor: '#0b1e6d',
    secondaryColor: '#f5c542',
    faviconUrl: '/favicon.ico',
    logoUrl: '/logo.png',
    metaTitle: 'Commerce tuition near Dum Dum - Best commerce coaching near Girish Park',
    metaDescription: 'Premier commerce coaching institute offering ICSE, ISC, CBSE, B.Com, BBA, MBA, CA, CMA, and CS courses',
    metaKeywords: 'commerce tuition, commerce classes, accountancy coaching, economics coaching',
    enableNotifications: true,
    enableEmailAlerts: true,
    enableSmsAlerts: false,
    maintenanceMode: false
  })

  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')
  const [activeTab, setActiveTab] = useState('general')

  const handleSave = async () => {
    setIsSaving(true)
    setSaveMessage('')

    try {
      // Simulate API call to save settings
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSaveMessage('Settings saved successfully!')
      setTimeout(() => setSaveMessage(''), 3000)
    } catch (error) {
      setSaveMessage('Failed to save settings. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all settings to default values?')) {
      // Reset to default values
      setSettings({
        siteName: 'Paul Sir\'s Classes',
        siteDescription: 'Premier commerce coaching institute',
        contactEmail: 'paulsirsclasses@gmail.com',
        contactPhone: '9007019442',
        whatsappNumber: '9007019442',
        address: '35B, South Sinthee Road, Kolkata – 700050',
        googleMapsUrl: '',
        facebookUrl: '',
        instagramUrl: '',
        youtubeUrl: '',
        primaryColor: '#0b1e6d',
        secondaryColor: '#f5c542',
        faviconUrl: '/favicon.ico',
        logoUrl: '/logo.png',
        metaTitle: 'Paul Sir\'s Classes - Commerce Excellence',
        metaDescription: 'Premier commerce coaching institute',
        metaKeywords: 'commerce, coaching, education',
        enableNotifications: true,
        enableEmailAlerts: true,
        enableSmsAlerts: false,
        maintenanceMode: false
      })
      setSaveMessage('Settings reset to default values!')
      setTimeout(() => setSaveMessage(''), 3000)
    }
  }

  const tabs = [
    { id: 'general', label: 'General', icon: <Settings className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Phone className="w-4 h-4" /> },
    { id: 'seo', label: 'SEO', icon: <Globe className="w-4 h-4" /> },
    { id: 'appearance', label: 'Appearance', icon: <Palette className="w-4 h-4" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> },
    { id: 'advanced', label: 'Advanced', icon: <Shield className="w-4 h-4" /> }
  ]

  return (
    <AdminLayout title="Settings" subtitle="Configure your website settings and preferences">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Save Message */}
        {saveMessage && (
          <div className={`mb-6 p-4 rounded-lg border ${
            saveMessage.includes('success') 
              ? 'bg-green-50 border-green-200 text-green-700' 
              : 'bg-red-50 border-red-200 text-red-700'
          }`}>
            <p className="font-medium">{saveMessage}</p>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site Name
                    </label>
                    <input
                      type="text"
                      value={settings.siteName}
                      onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site Description
                    </label>
                    <textarea
                      value={settings.siteDescription}
                      onChange={(e) => setSettings({...settings, siteDescription: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Contact Settings */}
            {activeTab === 'contact' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      value={settings.contactEmail}
                      onChange={(e) => setSettings({...settings, contactEmail: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      value={settings.contactPhone}
                      onChange={(e) => setSettings({...settings, contactPhone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={settings.whatsappNumber}
                      onChange={(e) => setSettings({...settings, whatsappNumber: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      value={settings.address}
                      onChange={(e) => setSettings({...settings, address: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Facebook URL
                    </label>
                    <input
                      type="url"
                      value={settings.facebookUrl}
                      onChange={(e) => setSettings({...settings, facebookUrl: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Instagram URL
                    </label>
                    <input
                      type="url"
                      value={settings.instagramUrl}
                      onChange={(e) => setSettings({...settings, instagramUrl: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      YouTube URL
                    </label>
                    <input
                      type="url"
                      value={settings.youtubeUrl}
                      onChange={(e) => setSettings({...settings, youtubeUrl: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Google Maps URL
                    </label>
                    <input
                      type="url"
                      value={settings.googleMapsUrl}
                      onChange={(e) => setSettings({...settings, googleMapsUrl: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* SEO Settings */}
            {activeTab === 'seo' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Settings</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Title
                    </label>
                    <input
                      type="text"
                      value={settings.metaTitle}
                      onChange={(e) => setSettings({...settings, metaTitle: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-sm text-gray-500 mt-1">Recommended: 50-60 characters</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Description
                    </label>
                    <textarea
                      value={settings.metaDescription}
                      onChange={(e) => setSettings({...settings, metaDescription: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-sm text-gray-500 mt-1">Recommended: 150-160 characters</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Keywords
                    </label>
                    <input
                      type="text"
                      value={settings.metaKeywords}
                      onChange={(e) => setSettings({...settings, metaKeywords: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-sm text-gray-500 mt-1">Separate keywords with commas</p>
                  </div>
                </div>
              </div>
            )}

            {/* Appearance Settings */}
            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Appearance</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Color
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={settings.primaryColor}
                        onChange={(e) => setSettings({...settings, primaryColor: e.target.value})}
                        className="h-10 w-20 border border-gray-300 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={settings.primaryColor}
                        onChange={(e) => setSettings({...settings, primaryColor: e.target.value})}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Secondary Color
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={settings.secondaryColor}
                        onChange={(e) => setSettings({...settings, secondaryColor: e.target.value})}
                        className="h-10 w-20 border border-gray-300 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={settings.secondaryColor}
                        onChange={(e) => setSettings({...settings, secondaryColor: e.target.value})}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Logo URL
                    </label>
                    <input
                      type="text"
                      value={settings.logoUrl}
                      onChange={(e) => setSettings({...settings, logoUrl: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Favicon URL
                    </label>
                    <input
                      type="text"
                      value={settings.faviconUrl}
                      onChange={(e) => setSettings({...settings, faviconUrl: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h3>
                
                <div className="space-y-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.enableNotifications}
                      onChange={(e) => setSettings({...settings, enableNotifications: e.target.checked})}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Enable browser notifications</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.enableEmailAlerts}
                      onChange={(e) => setSettings({...settings, enableEmailAlerts: e.target.checked})}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Enable email alerts</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.enableSmsAlerts}
                      onChange={(e) => setSettings({...settings, enableSmsAlerts: e.target.checked})}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Enable SMS alerts</span>
                  </label>
                </div>
              </div>
            )}

            {/* Advanced Settings */}
            {activeTab === 'advanced' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Settings</h3>
                
                <div className="space-y-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.maintenanceMode}
                      onChange={(e) => setSettings({...settings, maintenanceMode: e.target.checked})}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Enable maintenance mode</span>
                  </label>
                  <p className="text-sm text-gray-500">When enabled, visitors will see a maintenance page</p>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-md font-semibold text-gray-900 mb-4">Database Operations</h4>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
                      <Database className="w-4 h-4" />
                      Backup Database
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                      <RefreshCw className="w-4 h-4" />
                      Clear Cache
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-6 border-t">
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition"
              >
                <RefreshCw className="w-4 h-4" />
                Reset to Default
              </button>
              
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent border-r-transparent animate-spin rounded-full"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save Settings
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
