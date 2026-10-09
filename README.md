# Patel Baby Shower Invitation

A mobile-friendly Next.js invitation for Priyanka Patel & Darshit Patel's baby shower on **Sunday, December 13, 2026, 9:00 AM–1:00 PM Eastern**. Built with Next.js App Router, TypeScript, Supabase, and plain CSS.

## Included
- Invitation page, countdown, venue directions, Google Calendar and downloadable `.ics` invite
- Public household RSVP form with server-side Zod validation, duplicate-email guard, honeypot, and database-backed rate limiting
- Guestbook messages held for host approval before appearing publicly
- Admin sign-in, private RSVP overview, and CSV export
- Optional Resend notification email (no email is sent unless configured)
- Supabase migration with RLS enabled and no direct guest table access
- Unit tests for form validation

The page follows a 12-screen design: tap-to-open envelope, welcome, countdown, Our Story, details, map, RSVP, gallery, guest messages, thank-you, plus an admin dashboard. Story and gallery photos are illustrated placeholders until you add real ones: put image files in `public/photos/` and list their paths in `src/lib/event.ts` (`photos`). Only add photos you have permission to publish.

## Requirements
- Node.js 20.9+ (Node 22 LTS recommended)
- Git and VS Code
- A separate Supabase project for this event (do not reuse a personal finance app database)
- GitHub account and Vercel account for deployment

## Run locally
1. Copy `.env.example` to `.env.local` and fill in the Supabase URL, publishable/anon key, service-role key, and admin email. **Never commit `.env.local`.**
2. In Supabase SQL Editor, run `supabase/migrations/202610090001_initial_schema.sql` against the dedicated baby-shower project.
3. In Supabase Authentication, create the admin user `darsh2122@gmail.com` with a strong password. Set `ADMIN_EMAIL` to the same address. Enable email confirmation or password recovery according to your preference.
4. In a terminal: `npm install`, `npm run dev`. Open `http://localhost:3000`.
5. Run checks: `npm test`, `npm run typecheck`, `npm run build`.

## Automated checks

A GitHub Actions workflow runs tests, TypeScript checks, and a production build on pushes to `main` and pull requests. Run `npm install` once to create `package-lock.json` before the first push; then commit that lockfile so `npm ci` works in CI.

## Deploy with GitHub + Vercel
1. Create a **private** GitHub repository named `patel-baby-shower-invitation`. In VS Code, open this folder, then run:
   ```bash
   git init
   git add .
   git commit -m "Build Patel baby shower invitation"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/patel-baby-shower-invitation.git
   git push -u origin main
   ```
2. Import the repository into Vercel and select the Next.js framework preset.
3. Add all environment variables from `.env.example` in Vercel Project Settings for Production and Preview as appropriate. Set `NEXT_PUBLIC_SITE_URL` to the deployed URL. Keep `SUPABASE_SERVICE_ROLE_KEY` server-only.
4. Deploy, then test the public page, submit one test RSVP, verify it appears in `/admin`, download the CSV, submit a guestbook message, and approve it in Supabase Table Editor. Delete test data after validation.
5. Configure a custom domain only if desired; the Vercel-provided URL is sufficient for a free launch.

## Optional email notifications
To receive an email for each RSVP, configure a Resend account, verify a sender domain/address with that provider, then set `RESEND_API_KEY` and `NOTIFICATION_FROM_EMAIL`. Without those variables the site still works; email notifications are skipped. Provider/domain verification and sending limits may vary.

## Security and operations checklist
- Use a dedicated Supabase project and restrict dashboard access to the configured admin email.
- Do not commit `.env.local` or paste service-role keys into client code, GitHub, screenshots, or chat. Rotate any key accidentally exposed.
- This starter allows one RSVP per email address. A duplicate receives a helpful conflict response; corrections currently require contacting the hosts and editing the row in the protected Supabase dashboard.
- RSVP cutoff is enforced server-side at the end of November 22, 2026, Eastern time.
- The rate limiter hashes the forwarded IP and keeps only rolling buckets; proxy headers are expected to be set by the hosting platform. Review abuse controls before promoting the URL widely.
- The public RSVP endpoint deliberately does not allow reading or editing RSVP records. Admin data is fetched with a server-only service-role client after an email allowlist check. Supabase RLS remains enabled and client roles have no table privileges.
- The site uses Google Fonts via CSS; if you prefer no third-party font request, remove the `@import` and use system font fallbacks.
- Run the test/build commands locally and on CI before launch. Test email notifications with a verified sender.

## Project layout
```text
src/app/page.tsx                    Public invitation
src/app/api/rsvp/route.ts           Validated RSVP submission
src/app/api/messages/route.ts       Guestbook submission
src/app/api/admin/export/route.ts   Admin-only CSV export
src/app/admin/                      Protected admin dashboard/login
src/components/                     Countdown and client forms
src/lib/                            Event settings, validation, Supabase, email
supabase/migrations/                SQL schema, rate limiter, privileges
```

## Notes
- Date/time are set to Eastern Standard Time (UTC−5) for December 13, 2026.
- Optional: set `INVITED_HOUSEHOLDS` (a number) to show Invited and Awaiting-reply cards on the admin dashboard.
- Guest messages are approved or deleted from the admin dashboard (no need to use the Supabase table editor).
- Hosting, Supabase, and email-provider quotas/policies can change. Verify current plan terms before public launch; free tiers are not a guarantee of unlimited capacity.
