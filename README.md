# Onsite - Construction Management App

A mobile-first construction management application built for builders. Manage projects, crews, documents, photos, daily logs, scopes of work, estimates, invoices, and change orders. Includes AI-powered features to generate clear scopes, detect risks, and reduce disputes.

## Features

### Core Management
- **Project Management** - Track projects from planning to completion with status tracking, budgets, and timelines
- **Crew Management** - Organize teams, assign members, and manage labor
- **Document Management** - Store contracts, permits, plans, specifications, and drawings
- **Photo Management** - Document progress with photos, captions, and location tags
- **Daily Logs** - Record daily activities, weather, safety notes, and issues

### Financial Management
- **Estimates** - Create detailed estimates with line items and send to clients
- **Invoices** - Generate professional invoices with automatic numbering and payment tracking
- **Change Orders** - Manage project changes with approval workflows and cost tracking

### Advanced Features
- **Scopes of Work** - Create detailed scopes with AI generation capability
- **AI Risk Detection** - Automatically analyze scopes for potential risks and disputes
- **AI Scope Generation** - Generate clear, comprehensive scopes from project descriptions
- **Client Portal** - Secure portal for clients to view project progress and approve documents
- **Warranty Tracking** - Never miss warranty expiration dates
- **Offline Support** - Work without internet, sync when back online

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS (mobile-first design)
- **Database**: Prisma ORM with SQLite (easily swappable to PostgreSQL)
- **AI**: OpenAI GPT-4 for scope generation and risk analysis
- **PWA**: Service Workers for offline capability
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- OpenAI API key (for AI features)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/maseerkarimi/Onsite.git
cd Onsite
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key-change-in-production"
NEXTAUTH_URL="http://localhost:3000"
OPENAI_API_KEY="your-openai-api-key"
```

4. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The application uses the following main entities:

- **User** - System users (builders, clients, crew members)
- **Project** - Construction projects with client info and budget
- **Crew** - Teams working on projects
- **CrewMember** - Individual crew members
- **Document** - Project files (contracts, permits, plans)
- **Photo** - Progress photos with location data
- **DailyLog** - Daily activity logs
- **ScopeOfWork** - Project scopes with AI analysis
- **Estimate** - Cost estimates for clients
- **Invoice** - Invoices with payment tracking
- **ChangeOrder** - Project change requests
- **Warranty** - Warranty information tracking

## API Routes

### Projects
- `GET /api/projects` - List all projects
- `POST /api/projects` - Create new project

### Scopes of Work
- `GET /api/scopes` - List scopes (optional: ?projectId=xxx)
- `POST /api/scopes` - Create new scope

### AI Features
- `POST /api/ai/generate-scope` - Generate scope using AI

### Estimates
- `GET /api/estimates` - List estimates (optional: ?projectId=xxx)
- `POST /api/estimates` - Create new estimate

### Invoices
- `GET /api/invoices` - List invoices (optional: ?projectId=xxx)
- `POST /api/invoices` - Create new invoice

## AI Features

### Scope Generation
The app uses OpenAI GPT-4 to generate detailed scopes of work from simple project descriptions. The AI creates comprehensive scopes including:
- Detailed work descriptions
- Specific deliverables
- Quality standards
- Timeline considerations
- Materials and equipment

### Risk Analysis
AI analyzes scopes of work to identify:
- Potential risks (LOW, MEDIUM, HIGH)
- Specific risk factors
- Actionable recommendations
- Dispute prevention strategies

### Dispute Detection
The system reviews documents for:
- Ambiguous language
- Unclear expectations
- Missing specifications
- Potential areas of disagreement

## Mobile-First Design

The application is designed mobile-first with:
- Responsive layouts that work on all screen sizes
- Touch-friendly interfaces
- Optimized for field use
- Fast loading times
- Offline capability with service workers

## Offline Support

The app includes Progressive Web App (PWA) features:
- Service worker for offline caching
- Network-first strategy for API requests
- Cache-first strategy for static assets
- Automatic sync when connection is restored
- Add to home screen capability

## User Roles

- **ADMIN** - Full system access
- **BUILDER** - Project owners and managers
- **CLIENT** - Project clients with portal access
- **CREW_MEMBER** - Field workers and team members

## Security Features

- Password hashing with bcryptjs
- Environment variable protection
- API request validation
- Role-based access control

## Production Deployment

1. Set up a production database (PostgreSQL recommended)
2. Update `DATABASE_URL` in `.env`
3. Set secure `NEXTAUTH_SECRET`
4. Run migrations: `npx prisma migrate deploy`
5. Build: `npm run build`
6. Start: `npm start`

## Future Enhancements

- Real-time notifications
- Mobile apps (iOS/Android)
- Advanced reporting and analytics
- Time tracking integration
- Equipment management
- Subcontractor management
- RFI (Request for Information) tracking
- Punch list management
- Budget vs actual tracking

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ for builders who need simple, powerful project management tools.
