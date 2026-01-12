import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/estimates - List all estimates
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const projectId = searchParams.get('projectId')

    const where = projectId ? { projectId } : {}

    const estimates = await prisma.estimate.findMany({
      where,
      include: {
        project: {
          select: {
            id: true,
            name: true,
            clientName: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(estimates)
  } catch (error) {
    console.error('Error fetching estimates:', error)
    return NextResponse.json(
      { error: 'Failed to fetch estimates' },
      { status: 500 }
    )
  }
}

// POST /api/estimates - Create a new estimate
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      projectId,
      title,
      description,
      items,
      subtotal,
      tax,
      total,
      validUntil,
      status,
    } = body

    if (!projectId || !title || !items) {
      return NextResponse.json(
        { error: 'ProjectId, title, and items are required' },
        { status: 400 }
      )
    }

    const estimate = await prisma.estimate.create({
      data: {
        projectId,
        title,
        description,
        items: JSON.stringify(items),
        subtotal: parseFloat(subtotal),
        tax: tax ? parseFloat(tax) : 0,
        total: parseFloat(total),
        validUntil: validUntil ? new Date(validUntil) : null,
        status: status || 'DRAFT',
      },
      include: {
        project: {
          select: {
            id: true,
            name: true,
            clientName: true,
          },
        },
      },
    })

    return NextResponse.json(estimate, { status: 201 })
  } catch (error) {
    console.error('Error creating estimate:', error)
    return NextResponse.json(
      { error: 'Failed to create estimate' },
      { status: 500 }
    )
  }
}
