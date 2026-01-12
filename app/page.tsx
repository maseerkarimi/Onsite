import Link from 'next/link'
import { 
  Building2, 
  Users, 
  FileText, 
  Image, 
  ClipboardList, 
  FileCheck, 
  DollarSign, 
  FileEdit, 
  Shield,
  Smartphone,
  Zap,
  Cloud
} from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary-600" />
              <h1 className="text-2xl font-bold text-gray-900">Onsite</h1>
            </div>
            <Link
              href="/dashboard"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Construction Management
            <span className="block text-primary-600">Made Simple</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            Mobile-first app built for builders. Manage projects, crews, documents, and more. 
            AI-powered insights help reduce disputes and keep projects on track.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 shadow-lg"
            >
              Start Building
            </Link>
            <Link
              href="/portal"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Client Portal
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-lg shadow-xl mb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need</h3>
          <p className="text-lg text-gray-600">Comprehensive tools designed for non-technical users</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Building2 className="h-8 w-8" />}
            title="Project Management"
            description="Track projects from planning to completion with intuitive dashboards"
          />
          <FeatureCard
            icon={<Users className="h-8 w-8" />}
            title="Crew Management"
            description="Organize teams, assign tasks, and track labor costs"
          />
          <FeatureCard
            icon={<FileText className="h-8 w-8" />}
            title="Documents & Plans"
            description="Store contracts, permits, drawings, and specifications securely"
          />
          <FeatureCard
            icon={<Image className="h-8 w-8" />}
            title="Photo Management"
            description="Document progress with photos, location tags, and captions"
          />
          <FeatureCard
            icon={<ClipboardList className="h-8 w-8" />}
            title="Daily Logs"
            description="Record daily activities, weather, safety, and issues"
          />
          <FeatureCard
            icon={<FileCheck className="h-8 w-8" />}
            title="Scopes of Work"
            description="AI-generated scopes with risk detection and dispute prevention"
          />
          <FeatureCard
            icon={<DollarSign className="h-8 w-8" />}
            title="Estimates & Invoices"
            description="Create professional estimates and track payments"
          />
          <FeatureCard
            icon={<FileEdit className="h-8 w-8" />}
            title="Change Orders"
            description="Manage project changes with approvals and cost tracking"
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8" />}
            title="Warranty Tracking"
            description="Never miss warranty expiration dates on materials and work"
          />
        </div>
      </section>

      {/* AI Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg shadow-xl p-8 sm:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">AI-Powered Intelligence</h3>
            <p className="text-lg text-primary-100">Smart features that help you avoid problems before they happen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AIFeature
              icon={<Zap className="h-10 w-10" />}
              title="Auto-Generate Scopes"
              description="AI creates clear, detailed scopes of work from project descriptions"
            />
            <AIFeature
              icon={<Shield className="h-10 w-10" />}
              title="Risk Detection"
              description="Identify potential issues and disputes before they become problems"
            />
            <AIFeature
              icon={<FileCheck className="h-10 w-10" />}
              title="Dispute Prevention"
              description="Detect ambiguous language and unclear expectations in contracts"
            />
          </div>
        </div>
      </section>

      {/* Mobile-First Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Built for the Field</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Smartphone className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Mobile-First Design</h4>
                  <p className="text-gray-600">Optimized for phones and tablets, perfect for job sites</p>
                </div>
              </li>
              <li className="flex items-start">
                <Cloud className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Offline Support</h4>
                  <p className="text-gray-600">Work without internet, sync when you&apos;re back online</p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Fast & Simple</h4>
                  <p className="text-gray-600">No training needed - intuitive interface for everyone</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <div className="bg-white rounded-lg shadow-lg p-6 inline-block">
              <Smartphone className="h-48 w-48 text-primary-600 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary-400" />
              <h1 className="text-2xl font-bold">Onsite</h1>
            </div>
            <p className="text-gray-400">
              Construction management made simple for builders everywhere
            </p>
            <div className="mt-6 text-gray-500 text-sm">
              © {new Date().getFullYear()} Onsite. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
      <div className="text-primary-600 mb-4">{icon}</div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function AIFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-lg mb-4">
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-primary-100">{description}</p>
    </div>
  )
}
