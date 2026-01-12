import { Header } from '@/components/Header'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { 
  FileText, 
  Image as ImageIcon, 
  DollarSign, 
  Shield, 
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react'

export default function ClientPortal() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Client Portal" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Your Project Portal</h2>
          <p className="text-gray-600">View project progress, documents, and pending approvals</p>
        </div>

        {/* Project Overview */}
        <Card className="mb-8">
          <CardHeader>
            <h3 className="text-xl font-semibold text-gray-900">Project Overview</h3>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-gray-500">
              <AlertCircle className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p>No active projects found</p>
              <p className="text-sm mt-1">Your contractor will share project access with you</p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <PortalCard
            icon={<FileText className="h-8 w-8" />}
            title="Documents"
            description="View project documents"
            count={0}
          />
          <PortalCard
            icon={<ImageIcon className="h-8 w-8" />}
            title="Progress Photos"
            description="Latest site photos"
            count={0}
          />
          <PortalCard
            icon={<DollarSign className="h-8 w-8" />}
            title="Invoices"
            description="Payment history"
            count={0}
          />
          <PortalCard
            icon={<CheckCircle className="h-8 w-8" />}
            title="Approvals"
            description="Pending approvals"
            count={0}
            highlight
          />
        </div>

        {/* Pending Approvals Section */}
        <Card className="mb-8">
          <CardHeader>
            <h3 className="text-xl font-semibold text-gray-900">Pending Approvals</h3>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-gray-500">
              <Clock className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p>No pending approvals</p>
              <p className="text-sm mt-1">You&apos;ll be notified when action is needed</p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold text-gray-900">Recent Activity</h3>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-gray-500">
              <Shield className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p>No recent activity</p>
              <p className="text-sm mt-1">Project updates will appear here</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

function PortalCard({
  icon,
  title,
  description,
  count,
  highlight = false,
}: {
  icon: React.ReactNode
  title: string
  description: string
  count: number
  highlight?: boolean
}) {
  return (
    <Card hover className={highlight ? 'border-primary-300 bg-primary-50' : ''}>
      <CardContent className="p-6">
        <div className={`mb-4 ${highlight ? 'text-primary-600' : 'text-gray-600'}`}>
          {icon}
        </div>
        <div className="text-2xl font-bold text-gray-900 mb-1">{count}</div>
        <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
