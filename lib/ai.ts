import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
})

export interface ScopeGenerationInput {
  projectName: string
  projectDescription: string
  category?: string
}

export interface RiskAnalysis {
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH'
  riskFactors: string[]
  recommendations: string[]
}

export async function generateScopeOfWork(
  input: ScopeGenerationInput
): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'You are an expert construction project manager. Generate clear, detailed scopes of work for construction projects. Be specific about tasks, deliverables, and standards.',
        },
        {
          role: 'user',
          content: `Generate a detailed scope of work for the following construction project:
Project Name: ${input.projectName}
Description: ${input.projectDescription}
${input.category ? `Category: ${input.category}` : ''}

Please provide a comprehensive scope of work that includes:
- Detailed description of work to be performed
- Specific deliverables
- Quality standards
- Timeline considerations
- Materials and equipment needed`,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    })

    return completion.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('Error generating scope of work:', error)
    throw new Error('Failed to generate scope of work')
  }
}

export async function analyzeRisk(scopeDescription: string): Promise<RiskAnalysis> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'You are an expert construction risk analyst. Analyze scopes of work and identify potential risks, disputes, and issues. Provide clear risk levels and actionable recommendations.',
        },
        {
          role: 'user',
          content: `Analyze the following construction scope of work for risks and potential disputes:

${scopeDescription}

Provide:
1. Overall risk level (LOW, MEDIUM, or HIGH)
2. List of specific risk factors
3. Recommendations to mitigate risks

Format your response as JSON with keys: riskLevel, riskFactors (array), recommendations (array)`,
        },
      ],
      temperature: 0.5,
      max_tokens: 800,
      response_format: { type: 'json_object' },
    })

    const content = completion.choices[0]?.message?.content || '{}'
    const analysis = JSON.parse(content)

    return {
      riskLevel: analysis.riskLevel || 'MEDIUM',
      riskFactors: analysis.riskFactors || [],
      recommendations: analysis.recommendations || [],
    }
  } catch (error) {
    console.error('Error analyzing risk:', error)
    return {
      riskLevel: 'MEDIUM',
      riskFactors: ['Unable to analyze risk'],
      recommendations: ['Manual review recommended'],
    }
  }
}

export async function detectDisputeRisk(description: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'You are an expert in construction contract disputes. Identify ambiguous language, unclear expectations, or potential areas of disagreement.',
        },
        {
          role: 'user',
          content: `Review this construction document for potential dispute risks:

${description}

Identify any:
- Ambiguous language
- Unclear expectations
- Missing specifications
- Potential areas of disagreement`,
        },
      ],
      temperature: 0.5,
      max_tokens: 500,
    })

    return completion.choices[0]?.message?.content || 'No analysis available'
  } catch (error) {
    console.error('Error detecting dispute risk:', error)
    return 'Unable to analyze dispute risk'
  }
}
