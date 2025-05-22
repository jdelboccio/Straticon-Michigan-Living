# Next.js Admin Dashboard with Preview Mode

A modern Next.js application with an admin dashboard featuring preview mode functionality. Built with TypeScript, Tailwind CSS, and NextAuth.js for authentication.

## Features

- 🔐 Secure Admin Dashboard
- 👀 Live Preview Mode
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS
- 🔒 Authentication with NextAuth.js
- 📅 Booking Calendar
- 📧 Email Templates
- 🏠 Property Management

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nextjs-admin-dashboard.git
cd nextjs-admin-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Admin User Manual

### Accessing the Admin Dashboard

1. Navigate to `/login` and sign in with your admin credentials
2. Once authenticated, you'll be redirected to the admin dashboard at `/admin`

### Using Preview Mode

The Preview Mode feature allows administrators to view the site as it would appear with unpublished changes.

#### To Enter Preview Mode:

1. Log in to the admin dashboard
2. Look for the "Preview Site" button in the top navigation bar
3. Click "Preview Site" to enter preview mode
4. You'll be redirected to the public site with a yellow banner indicating "Preview Mode Active"

#### While in Preview Mode:

- A yellow banner appears at the top of every page indicating you're in preview mode
- You can view unpublished changes and draft content
- Navigate the site normally to preview all pages

#### To Exit Preview Mode:

Either:
- Click "Exit Preview" in the yellow banner at the top of any page
- Return to the admin dashboard and click "Exit Preview"
- Or navigate to `/api/exit-preview` directly

### Admin Features

1. **Property Management** (`/admin/properties`)
   - Add, edit, and delete properties
   - Manage property details, images, and availability

2. **User Management** (`/admin/users`)
   - View and manage user accounts
   - Set user roles and permissions

3. **Content Management** (`/admin/content`)
   - Edit site content and pages
   - Manage blog posts and announcements

4. **Calendar** (`/admin/calendar`)
   - View and manage bookings
   - Set property availability

5. **Email Templates** (`/admin/email-templates`)
   - Customize email notifications
   - Manage booking confirmations and reminders

## Project Structure

```
src/
├── app/                    # Next.js 13+ app directory
│   ├── admin/             # Admin dashboard pages
│   ├── dashboard/         # User dashboard
│   ├── login/            # Authentication pages
│   └── property/         # Property pages
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── ...               # Other components
├── lib/                  # Utilities and helpers
├── pages/                # API routes
└── types/                # TypeScript types
```

## Development

### Prerequisites

- Node.js 16.x or later
- npm or yarn
- Git

### Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
DATABASE_URL=your-database-url
```

### Available Scripts

```bash
# Development
npm run dev         # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
npm run type-check # Run TypeScript checks
```

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables
4. Deploy!

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Push to your fork and submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support, email support@yourdomain.com or open an issue on GitHub.
