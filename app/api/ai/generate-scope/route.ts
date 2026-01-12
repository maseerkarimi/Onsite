import { NextRequest, NextResponse } from 'next/server'
import { generateScopeOfWork, analyzeRisk } from '@/lib/ai'

// POST /api/ai/generate-scope - Generate scope of work
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { projectName, projectDescription, category } = body

    if (!projectName || !projectDescription) {
      return NextResponse.json(
        { error: 'Project name and description are required' },
        { status: 400 }
      )
    }

    // Generate scope using AI
    const scopeDescription = await generateScopeOfWork({
      projectName,
      projectDescription,
      category,
    })

    // Analyze risks
    const riskAnalysis = await analyzeRisk(scopeDescription)

    return NextResponse.json({
      description: scopeDescription,
      riskLevel: riskAnalysis.riskLevel,
      riskFactors: riskAnalysis.riskFactors,
      recommendations: riskAnalysis.recommendations,
    })
  } catch (error) {
    console.error('Error generating scope:', error)
    return NextResponse.json(
      { error: 'Failed to generate scope of work' },
      { status: 500 }
    )
  }
}
