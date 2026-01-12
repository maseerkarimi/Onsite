import Link from 'next/link'
import { Building2, Home } from 'lucide-react'

interface HeaderProps {
  title?: string
  showHomeLink?: boolean
}

export function Header({ title = 'Onsite', showHomeLink = true }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Building2 className="h-8 w-8 text-primary-600" />
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          </Link>
          {showHomeLink && (
            <div className="flex items-center space-x-4">
              <Link
                href="/dashboard"
                className="text-gray-600 hover:text-gray-900 flex items-center space-x-1"
              >
                <Home className="h-5 w-5" />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
