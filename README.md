# Simple Landing Page with Payload CMS

A modern, component-based landing page built with Next.js and Payload CMS. This project demonstrates the implementation of a flexible, block-based content management system that allows for dynamic page construction.

## Features

- **Component-Based Architecture**: Modular design using React components
- **Dynamic Block System**: Support for multiple content block types:
  - Hero sections with images and CTAs
  - Rich text content blocks
  - Newsletter subscription forms
- **Form Builder Integration**: Built-in form handling with Payload's form builder plugin
- **TypeScript Support**: Full type safety across the application
- **Modern Styling**: Clean, responsive design with modern CSS

## Technical Stack

### Frontend

- Next.js 14 (App Router)
- React
- TypeScript
- CSS Modules

### Backend

- Payload CMS
- SQLite Database
- Form Builder Plugin
- Rich Text Editor (Lexical)

### Development Tools

- ESLint
- Prettier
- TypeScript

## Project Structure

```
src/
├── app/
│   └── (frontend)/
│       ├── components/
│       │   ├── HeroBlock.tsx
│       │   ├── ContentBlock.tsx
│       │   └── NewsletterBlock.tsx
│       └── page.tsx
├── blocks/
│   ├── HeroBlock.ts
│   ├── ContentBlock.ts
│   └── NewsletterFormBlock.ts
├── collections/
│   ├── Pages.tsx
│   ├── Media.ts
│   └── Users.ts
└── payload.config.ts
```

## Block Types

### Hero Block

- Main heading
- Rich text subheading
- Featured image
- Call-to-action button

### Content Block

- Heading
- Rich text content area

### Newsletter Form Block

- Form title
- Dynamic form fields
- Success/error handling
- Submission confirmation

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```env
   PAYLOAD_SECRET=your-secret-key
   DATABASE_URI=your-database-uri
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Configuration

### Database

- Using SQLite for data storage
- Configured in `payload.config.ts`

### CMS Configuration

- Admin panel customization
- Collection definitions
- Block type configurations
- Form builder setup

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - feel free to use this project for your own purposes.
