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
  Home,
  Plus,
  Activity,
} from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary-600" />
              <h1 className="text-2xl font-bold text-gray-900">Onsite</h1>
            </div>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              <Home className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
          <p className="text-gray-600">Manage your construction projects efficiently</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Active Projects"
            value="0"
            icon={<Building2 className="h-6 w-6" />}
            color="primary"
          />
          <StatCard
            title="Crew Members"
            value="0"
            icon={<Users className="h-6 w-6" />}
            color="primary"
          />
          <StatCard
            title="Pending Invoices"
            value="$0"
            icon={<DollarSign className="h-6 w-6" />}
            color="primary"
          />
          <StatCard
            title="Open Tasks"
            value="0"
            icon={<Activity className="h-6 w-6" />}
            color="primary"
          />
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <QuickActionButton
              href="/projects"
              icon={<Plus className="h-5 w-5" />}
              label="New Project"
            />
            <QuickActionButton
              href="/daily-logs"
              icon={<ClipboardList className="h-5 w-5" />}
              label="Daily Log"
            />
            <QuickActionButton
              href="/photos"
              icon={<Image className="h-5 w-5" />}
              label="Add Photo"
            />
            <QuickActionButton
              href="/scopes"
              icon={<FileCheck className="h-5 w-5" />}
              label="Create Scope"
            />
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard
            href="/projects"
            icon={<Building2 className="h-8 w-8" />}
            title="Projects"
            description="Manage all your construction projects"
            color="primary"
          />
          <DashboardCard
            href="/crews"
            icon={<Users className="h-8 w-8" />}
            title="Crews"
            description="Organize teams and track hours"
            color="primary"
          />
          <DashboardCard
            href="/documents"
            icon={<FileText className="h-8 w-8" />}
            title="Documents"
            description="Store and manage project files"
            color="primary"
          />
          <DashboardCard
            href="/photos"
            icon={<Image className="h-8 w-8" />}
            title="Photos"
            description="Document progress with photos"
            color="primary"
          />
          <DashboardCard
            href="/daily-logs"
            icon={<ClipboardList className="h-8 w-8" />}
            title="Daily Logs"
            description="Record daily activities and notes"
            color="primary"
          />
          <DashboardCard
            href="/scopes"
            icon={<FileCheck className="h-8 w-8" />}
            title="Scopes of Work"
            description="AI-powered scope generation"
            color="primary"
          />
          <DashboardCard
            href="/estimates"
            icon={<DollarSign className="h-8 w-8" />}
            title="Estimates"
            description="Create and send estimates"
            color="primary"
          />
          <DashboardCard
            href="/invoices"
            icon={<DollarSign className="h-8 w-8" />}
            title="Invoices"
            description="Invoice clients and track payments"
            color="primary"
          />
          <DashboardCard
            href="/change-orders"
            icon={<FileEdit className="h-8 w-8" />}
            title="Change Orders"
            description="Manage project changes"
            color="primary"
          />
        </div>

        {/* Recent Activity Section */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="text-center py-8 text-gray-500">
            <Activity className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p>No recent activity</p>
            <p className="text-sm mt-1">Get started by creating your first project</p>
          </div>
        </div>
      </main>
    </div>
  )
}

function StatCard({
  title,
  value,
  icon,
  color,
}: {
  title: string
  value: string
  icon: React.ReactNode
  color: string
}) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-2">
        <div className={`text-${color}-600`}>{icon}</div>
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{title}</div>
    </div>
  )
}

function QuickActionButton({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 hover:border-primary-300"
    >
      <div className="text-primary-600 mb-2">{icon}</div>
      <span className="text-sm font-medium text-gray-900">{label}</span>
    </Link>
  )
}

function DashboardCard({
  href,
  icon,
  title,
  description,
  color,
}: {
  href: string
  icon: React.ReactNode
  title: string
  description: string
  color: string
}) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border border-gray-200 hover:border-primary-300"
    >
      <div className={`text-${color}-600 mb-4`}>{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  )
}
