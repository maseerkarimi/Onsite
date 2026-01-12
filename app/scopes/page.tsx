'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Plus, Sparkles, AlertTriangle, FileCheck } from 'lucide-react'

interface Scope {
  id: string
  title: string
  description: string
  aiGenerated: boolean
  aiRiskLevel?: 'LOW' | 'MEDIUM' | 'HIGH'
}

export default function ScopesPage() {
  const [generating, setGenerating] = useState(false)
  const [showGenerator, setShowGenerator] = useState(false)

  const scopes: Scope[] = []

  const handleGenerateScope = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setGenerating(true)
    
    // Simulate API call
    setTimeout(() => {
      setGenerating(false)
      setShowGenerator(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Scopes of Work</h2>
            <p className="text-gray-600">AI-powered scope generation and risk detection</p>
          </div>
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" onClick={() => setShowGenerator(!showGenerator)}>
              <Sparkles className="h-5 w-5 mr-2" />
              AI Generate
            </Button>
            <Button>
              <Plus className="h-5 w-5 mr-2" />
              New Scope
            </Button>
          </div>
        </div>

        {/* AI Generator Form */}
        {showGenerator && (
          <Card className="mb-8 border-primary-200 bg-gradient-to-r from-primary-50 to-white">
            <CardHeader>
              <div className="flex items-center">
                <Sparkles className="h-6 w-6 text-primary-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">AI Scope Generator</h3>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Describe your project and let AI generate a comprehensive scope of work
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGenerateScope} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="e.g., Kitchen Renovation"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Description
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    rows={4}
                    placeholder="Describe the work to be performed, materials, and any specific requirements..."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="e.g., Residential, Commercial, Electrical"
                  />
                </div>
                <div className="flex space-x-3">
                  <Button type="submit" disabled={generating}>
                    {generating ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-5 w-5 mr-2" />
                        Generate Scope
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowGenerator(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Scopes List */}
        {scopes.length === 0 ? (
          <Card className="p-12 text-center">
            <FileCheck className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No scopes of work yet
            </h3>
            <p className="text-gray-600 mb-6">
              Create detailed scopes manually or use AI to generate them automatically
            </p>
            <div className="flex justify-center space-x-3">
              <Button variant="outline" onClick={() => setShowGenerator(true)}>
                <Sparkles className="h-5 w-5 mr-2" />
                AI Generate
              </Button>
              <Button>
                <Plus className="h-5 w-5 mr-2" />
                Create Manually
              </Button>
            </div>
          </Card>
        ) : (
          <div className="space-y-4">
            {scopes.map((scope) => (
              <Card key={scope.id} hover>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {scope.title}
                        </h3>
                        {scope.aiGenerated && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800">
                            <Sparkles className="h-3 w-3 mr-1" />
                            AI Generated
                          </span>
                        )}
                        {scope.aiRiskLevel && (
                          <span
                            className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                              scope.aiRiskLevel === 'HIGH'
                                ? 'bg-red-100 text-red-800'
                                : scope.aiRiskLevel === 'MEDIUM'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-green-100 text-green-800'
                            }`}
                          >
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            {scope.aiRiskLevel} Risk
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {scope.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
