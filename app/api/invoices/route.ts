import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateInvoiceNumber } from '@/lib/utils'

// GET /api/invoices - List all invoices
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const projectId = searchParams.get('projectId')

    const where = projectId ? { projectId } : {}

    const invoices = await prisma.invoice.findMany({
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

    return NextResponse.json(invoices)
  } catch (error) {
    console.error('Error fetching invoices:', error)
    return NextResponse.json(
      { error: 'Failed to fetch invoices' },
      { status: 500 }
    )
  }
}

// POST /api/invoices - Create a new invoice
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
      dueDate,
      status,
    } = body

    if (!projectId || !title || !items) {
      return NextResponse.json(
        { error: 'ProjectId, title, and items are required' },
        { status: 400 }
      )
    }

    const invoice = await prisma.invoice.create({
      data: {
        projectId,
        invoiceNumber: generateInvoiceNumber(),
        title,
        description,
        items: JSON.stringify(items),
        subtotal: parseFloat(subtotal),
        tax: tax ? parseFloat(tax) : 0,
        total: parseFloat(total),
        paidAmount: 0,
        dueDate: dueDate ? new Date(dueDate) : null,
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

    return NextResponse.json(invoice, { status: 201 })
  } catch (error) {
    console.error('Error creating invoice:', error)
    return NextResponse.json(
      { error: 'Failed to create invoice' },
      { status: 500 }
    )
  }
}
