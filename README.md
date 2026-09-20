# SIS Kamtaul

Create a premium, modern, responsive **single-page school website** for:

# Singapore International School

**Kamtaul, Bihar, India**

This is a **static informational website**. It is NOT a school management system.

The purpose of the website is to introduce the school to parents, students, and visitors and provide information about the school, its philosophy, facilities, activities, and contact details.

## IMPORTANT

Do NOT create:

* Database
* Backend
* Authentication
* Login
* Admin dashboard
* User accounts
* CMS
* Student registration system
* Data storage
* API
* Payment system

Everything should be static frontend content.

The website should be deployable directly to **Vercel** through GitHub.

---

# TECHNOLOGY

Use:

* React
* TypeScript
* Tailwind CSS
* Vite
* Lucide React icons

Keep the code clean, component-based, and easy to maintain.

Use reusable components instead of putting the entire website into one component.

---

# DESIGN

Create a sophisticated and premium school website.

Visual style:

* Modern
* Clean
* Professional
* Educational
* Trustworthy
* Welcoming
* Elegant

Use a primary color palette based around:

* Deep navy blue
* White
* Subtle gold/warm accent

Use generous whitespace, elegant typography, subtle shadows, rounded cards, and smooth transitions.

Avoid:

* Excessive gradients
* Excessive animations
* Neon colors
* Overly rounded childish UI
* Generic SaaS dashboard styling
* Excessive text
* Cluttered layouts

The design should feel like a **premium educational institution website**.

---

# NAVIGATION

Create a sticky navigation bar.

Left:

**School logo + Singapore International School**

Right:

* Home
* About
* Academics
* Facilities
* Activities
* Gallery
* Contact

Add a highlighted button:

**Admission Enquiry**

On mobile, convert the navigation into a hamburger menu.

Clicking navigation items should smoothly scroll to the relevant section.

---

# HERO SECTION

Create a large, visually impressive hero section.

Use a high-quality school/campus/student image.

Main heading:

**Singapore International School**

Supporting headline:

**Shaping Minds. Building Futures.**

Location:

**Kamtaul, Bihar**

Add a short introduction:

"Providing a nurturing environment where students learn, grow, discover their potential, and prepare for a successful future."

Buttons:

**Explore Our School**

**Admission Enquiry**

The hero should have a subtle dark overlay if using a background image so the text remains highly readable.

Add a subtle scroll indicator.

---

# ABOUT THE SCHOOL

Section title:

**About Singapore International School**

Create a two-column layout.

Left:
School image.

Right:
A concise introduction about the school's educational philosophy.

Focus on:

* Quality education
* Character development
* Discipline
* Creativity
* Confidence
* Holistic development
* Preparing students for the future

Add a small highlight such as:

**Education • Values • Excellence**

Do not invent the school's history, establishment year, affiliation, achievements, student count, or other factual information.

Use placeholders where official information is unavailable.

---

# OUR VISION

Create a visually distinctive section.

Title:

**Our Vision**

Example content:

"To create an inspiring learning environment where every student is encouraged to discover their potential, develop strong values, and become a confident and responsible individual."

Create a second block:

**Our Mission**

Use editable placeholder content if official wording is not provided.

---

# WHY CHOOSE US

Create six elegant feature cards.

### Quality Education

Focused on strong academic foundations and meaningful learning.

### Holistic Development

Supporting academic, physical, social, and creative development.

### Experienced Teachers

A supportive environment where teachers encourage curiosity and learning.

### Values & Discipline

Helping students develop responsibility, respect, integrity, and confidence.

### Co-Curricular Activities

Encouraging students to explore interests beyond the classroom.

### Supportive Environment

Creating a safe and welcoming environment for students.

Use appropriate Lucide icons.

---

# ACADEMICS

Create a modern section introducing the school's academic approach.

Title:

**Learning That Inspires**

Include content around:

* Student-focused learning
* Strong academic foundations
* Practical understanding
* Critical thinking
* Creativity
* Communication
* Collaboration

Create cards for academic stages, but use placeholders until the actual classes offered by the school are confirmed.

Example:

**Primary School**

[Add official information]

**Middle School**

[Add official information]

**Secondary School**

[Add official information]

Do not claim any specific educational board or curriculum unless officially provided.

---

# FACILITIES

Create an attractive image/card grid.

Potential sections:

* Smart Classrooms
* Computer Laboratory
* Science Laboratory
* Library
* Sports & Playground
* Transportation
* Campus
* Activity Areas

IMPORTANT:

These are placeholders.

Do not claim that a specific facility exists unless official information or photographs confirm it.

Make the facility cards easy to edit.

Use high-quality images.

---

# STUDENT LIFE

Create a section showing that school life includes learning beyond academics.

Include:

### Sports

Encouraging teamwork, discipline, fitness, and sportsmanship.

### Cultural Activities

Encouraging creativity and cultural expression.

### Competitions

Providing opportunities for students to challenge themselves and grow.

### Celebrations & Events

Creating memorable experiences and a sense of community.

Use a visually rich layout with images.

---

# IMAGE GALLERY

Create a beautiful responsive gallery.

Use a masonry/grid-style layout.

Include categories:

* Campus
* Classrooms
* Activities
* Sports
* Events

Clicking an image should open a lightbox.

Use placeholder images initially.

Structure the image data in a simple array so the school photographs can easily be replaced later.

Example structure:

```typescript
const galleryImages = [
  {
    src: "...",
    title: "School Campus",
    category: "Campus"
  }
]
```

Do not use copyrighted images without appropriate permission.

---

# SCHOOL HIGHLIGHTS

Create a visually attractive horizontal section.

Use placeholders for official statistics:

**[XX]+**
Students

**[XX]+**
Teachers

**[XX]+**
Classes

**[XXXX]**
Established

Do not invent these values.

Keep the values easy to replace.

---

# PRINCIPAL'S MESSAGE

Create an elegant section with:

* Principal photograph placeholder
* Principal's name placeholder
* Message

Heading:

**Message from the Principal**

Use:

**[Principal Name]**

**[Principal's Message]**

Do not fabricate a principal's identity or message.

---

# CALL TO ACTION

Create a strong full-width CTA section.

Heading:

**Give Your Child a Place to Learn, Grow & Shine**

Supporting text:

"Discover the learning environment at Singapore International School."

Buttons:

**Admission Enquiry**

**Contact Us**

---

# CONTACT SECTION

Create a clean contact section.

Display:

**Singapore International School**

**Kamtaul, Bihar, India**

Use placeholders:

**Address:** [Complete School Address]

**Phone:** [Official Phone Number]

**Email:** [Official Email Address]

Create a contact information layout with icons.

Also include a Google Maps placeholder.

Do not invent coordinates.

---

# FOOTER

Create a premium footer.

Include:

Singapore International School

Kamtaul, Bihar, India

Quick Links:

* Home
* About
* Academics
* Facilities
* Activities
* Gallery
* Contact

Social icons:

* Facebook
* Instagram
* YouTube

Use placeholders for social links until official accounts are provided.

Copyright:

**© 2026 Singapore International School. All Rights Reserved.**

---

# RESPONSIVENESS

The website must look excellent on:

* Desktop
* Laptop
* Tablet
* Mobile

Pay particular attention to:

* Hero section
* Navigation
* Gallery
* Cards
* Typography
* Buttons
* Images

Do not allow horizontal scrolling on mobile.

---

# ANIMATIONS

Use subtle animations:

* Fade-in sections
* Slight slide-up animations
* Image hover effects
* Smooth scrolling
* Button hover transitions

Keep animations professional and lightweight.

Respect `prefers-reduced-motion`.

---

# SEO

Optimize the website for search engines.

Page title:

**Singapore International School | Kamtaul, Bihar**

Meta description:

**Singapore International School, Kamtaul, Bihar — a modern learning environment focused on education, values, character development, and holistic growth.**

Include:

* Proper H1
* H2 hierarchy
* Image alt text
* Open Graph metadata
* Favicon
* Semantic HTML

Do not make unsupported claims in SEO content.

---

# PERFORMANCE

Optimize for fast loading.

Use:

* Lazy-loaded images
* Responsive image sizes
* Optimized assets
* Minimal JavaScript
* Efficient React components

Target excellent Lighthouse performance.

---

# PROJECT STRUCTURE

Keep the project organized similar to:

src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Vision.tsx
│   ├── WhyChooseUs.tsx
│   ├── Academics.tsx
│   ├── Facilities.tsx
│   ├── StudentLife.tsx
│   ├── Gallery.tsx
│   ├── PrincipalMessage.tsx
│   ├── CTA.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
│
├── data/
│   └── schoolData.ts
│
├── assets/
│   └── images/
│
├── App.tsx
└── main.tsx

Keep school-specific content in structured data where practical so it is easy to update later.

---

# CONTENT ACCURACY

This is extremely important.

Do NOT invent:

* School history
* Establishment year
* Board affiliation
* Awards
* Rankings
* Accreditation
* Student numbers
* Faculty numbers
* Facilities
* Principal name
* Testimonials
* Phone numbers
* Email addresses
* Social media accounts
* Fees
* Admission requirements

Use placeholders such as:

[Official Information]

until the real information is supplied.

---

# FINAL REQUIREMENT

Build the complete polished single-page website.

The final result should feel like a real professional school website rather than an AI-generated template.

The project must remain a **frontend-only static website** and should be ready to push to GitHub and deploy on Vercel.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0264490b-5d54-4e31-ad45-ccb6ef467ab9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
