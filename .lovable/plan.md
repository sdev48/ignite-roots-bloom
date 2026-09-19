# Singapore International School website

## Goal
Build a polished, static, single-page website for Singapore International School, Kamtaul. It will use the requested deep navy, white, and restrained gold visual language, work across mobile and desktop, and contain no backend, accounts, forms that submit data, or invented school facts.

## What I’ll build
- A sticky header with a school crest-style placeholder, desktop navigation, mobile menu, smooth section links, and an Admission Enquiry action.
- A full-bleed campus hero with the supplied school name, location, introduction, two actions, and a subtle scroll cue.
- Dedicated sections for About, Vision and Mission, Why Choose Us, Academics, Facilities, Student Life, Gallery, School Highlights, Principal’s Message, call to action, Contact, and Footer.
- A responsive, filterable gallery with a keyboard-accessible lightbox.
- Static enquiry/contact actions that scroll to the contact details rather than collecting or storing personal data.
- Clear placeholders for every unconfirmed fact, facility, class range, contact detail, statistic, principal detail, map, and social account.

## Visual direction
- Deep navy foundations, crisp white surfaces, and sparing warm-gold accents.
- Editorial school typography with an elegant display face and highly readable body face.
- Strong photography, generous spacing, squared-to-soft card corners, fine borders, and restrained shadows.
- Lightweight reveal and image interactions, disabled when reduced motion is preferred.
- A custom image set showing a premium Indian school environment while clearly treating the photos as replaceable placeholders, not documentary claims about the actual campus.

## Structure and maintainability
- Keep `/` as the single page and split each major section into a focused reusable component.
- Store navigation, cards, stages, facilities, activities, gallery images, highlights, and contact placeholders in structured school data.
- Define the full semantic design system in the global stylesheet and reuse the existing button and dialog primitives where appropriate.
- Keep all visual assets local to the project and lazy-load imagery below the first screen.

## SEO, accessibility, and verification
- Add the requested title and description, matching Open Graph metadata, semantic heading order, useful image descriptions, and a canonical home link.
- Preserve visible focus states, menu/lightbox keyboard behavior, readable contrast, and non-overlapping layouts.
- Verify the finished page in the live preview at desktop and mobile widths, exercise navigation and gallery interactions, and confirm the build diagnostics are clean.

## Technical notes
- The existing project uses React 19, TypeScript, Tailwind CSS 4, Vite, TanStack Start routing, and Lucide React. I’ll retain that supported foundation rather than replace its router/bootstrap.
- The site remains frontend-only and statically deployable through GitHub to Vercel.
