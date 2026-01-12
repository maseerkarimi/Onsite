import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/scopes - List all scopes
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const projectId = searchParams.get('projectId')

    const where = projectId ? { projectId } : {}

    const scopes = await prisma.scopeOfWork.findMany({
      where,
      include: {
        project: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(scopes)
  } catch (error) {
    console.error('Error fetching scopes:', error)
    return NextResponse.json(
      { error: 'Failed to fetch scopes' },
      { status: 500 }
    )
  }
}

// POST /api/scopes - Create a new scope
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      projectId,
      title,
      description,
      category,
      aiGenerated,
      aiRiskLevel,
      aiRiskFactors,
      status,
    } = body

    if (!projectId || !title || !description) {
      return NextResponse.json(
        { error: 'ProjectId, title, and description are required' },
        { status: 400 }
      )
    }

    const scope = await prisma.scopeOfWork.create({
      data: {
        projectId,
        title,
        description,
        category,
        aiGenerated: aiGenerated || false,
        aiRiskLevel,
        aiRiskFactors: aiRiskFactors ? JSON.stringify(aiRiskFactors) : null,
        status: status || 'DRAFT',
      },
      include: {
        project: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })

    return NextResponse.json(scope, { status: 201 })
  } catch (error) {
    console.error('Error creating scope:', error)
    return NextResponse.json(
      { error: 'Failed to create scope' },
      { status: 500 }
    )
  }
}
