'use client'

import { Header } from '@/components/Header'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Plus, Building2, MapPin, Calendar, DollarSign } from 'lucide-react'
import Link from 'next/link'

interface Project {
  id: string
  name: string
  address: string
  status: string
  startDate?: string
  budget?: number
}

export default function ProjectsPage() {
  // This would normally fetch from API
  const projects: Project[] = []

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Projects</h2>
            <p className="text-gray-600">Manage all your construction projects</p>
          </div>
          <Button className="mt-4 sm:mt-0">
            <Plus className="h-5 w-5 mr-2" />
            New Project
          </Button>
        </div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <Card className="p-12 text-center">
            <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No projects yet
            </h3>
            <p className="text-gray-600 mb-6">
              Get started by creating your first construction project
            </p>
            <Button>
              <Plus className="h-5 w-5 mr-2" />
              Create Project
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card hover className="h-full">
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.name}
                    </h3>
                    <span
                      className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-2 ${
                        project.status === 'IN_PROGRESS'
                          ? 'bg-green-100 text-green-800'
                          : project.status === 'PLANNING'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {project.status}
                    </span>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {project.address}
                      </div>
                      {project.startDate && (
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(project.startDate).toLocaleDateString()}
                        </div>
                      )}
                      {project.budget && (
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-2" />
                          ${project.budget.toLocaleString()}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
