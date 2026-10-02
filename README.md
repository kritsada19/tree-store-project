This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, create a local environment file from the example:

```bash
cp .env.example .env.local
```

Then fill in your Google OAuth credentials and a secure secret:

```env
AUTH_SECRET=replace-with-a-long-random-secret
AUTH_GOOGLE_ID=your-google-client-id.apps.googleusercontent.com
AUTH_GOOGLE_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Google OAuth setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a project or select an existing one.
3. Enable the Google OAuth consent screen.
4. Create OAuth 2.0 Client ID credentials.
5. Add `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI.
6. Copy the Client ID and Client Secret into `.env.local`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
