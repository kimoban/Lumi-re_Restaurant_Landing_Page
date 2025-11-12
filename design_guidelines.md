# Design Guidelines: Pop-Up Restaurant One-Pager

## Design Approach
**Reference-Based**: Drawing inspiration from high-end restaurant websites like Eleven Madison Park, Noma, and The French Laundry, emphasizing visual storytelling through food photography and elegant restraint.

## Core Design Principles
- **Visual-First Hospitality**: Large, immersive imagery that showcases culinary artistry
- **Sophisticated Simplicity**: Elegant typography and generous whitespace
- **Scarcity & Exclusivity**: Design elements that communicate limited-time nature

## Typography
- **Display Font**: Playfair Display (serif) for headings - conveys elegance and refinement
- **Body Font**: Inter (sans-serif) for descriptions and details - ensures readability
- **Hierarchy**:
  - Hero headline: text-6xl to text-7xl, font-light
  - Section headers: text-4xl to text-5xl
  - Menu item names: text-2xl to text-3xl, tracking-wide
  - Descriptions: text-lg, leading-relaxed
  - Event details: text-base to text-xl

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Content max-width: max-w-7xl for sections, max-w-4xl for text-focused areas
- Grid gaps: gap-8 to gap-12 for menu items

## Page Structure

### 1. Hero Section (100vh)
Full-viewport immersive introduction with AI-generated ambiance photo
- Large headline with restaurant/pop-up name
- Subtitle with tagline or culinary concept
- Dates and location prominently displayed
- "Reserve Your Spot" CTA button with blurred background overlay
- Subtle scroll indicator

### 2. Story Section
Single column, centered content (max-w-3xl)
- Brief narrative about the pop-up concept (2-3 paragraphs)
- Chef introduction or culinary philosophy
- py-24 spacing

### 3. Menu Highlights Section
**3-column grid** (desktop), single column (mobile)
- 6-9 signature dishes with AI-generated plating photos
- Each card: Large image (aspect-ratio-square), dish name, 2-line description, price
- Staggered image aspect ratios for visual interest (some portrait, some square)
- gap-8 between cards

### 4. Ambiance Gallery
**2-column asymmetric grid** 
- 4-6 AI-generated interior/ambiance photos
- Mix of full-width and half-width images
- Shows dining space, bar area, table settings, lighting details
- py-20 spacing

### 5. Event Details Section
**Split layout** (2 columns on desktop)
- Left: Embedded map showing location
- Right: Detailed information card with:
  - Full address
  - Operating dates/times
  - Seating information (limited seats messaging)
  - Parking/transit details
  - Contact info

### 6. Printable Mini-Menu
Dedicated section with download CTA
- Grid of all menu items (4 columns on desktop, 2 on tablet, 1 on mobile)
- "Download Menu PDF" button
- Print-optimized version triggers when user clicks

### 7. Reservation Footer
Full-width section with final CTA
- Large "Make Your Reservation" button
- Social media links
- Email signup for updates
- Copyright and basic legal info

## Component Library

### Navigation
Fixed header on scroll with blur backdrop
- Restaurant name/logo (left)
- Menu links: About, Menu, Details, Reserve (right)
- Mobile: Hamburger menu

### Menu Cards
- Image: Full-bleed, aspect-ratio-[4/3]
- Overlay gradient on hover (subtle)
- Content: Dish name, short description, price aligned right

### CTA Buttons
Two styles:
- Primary: Large, elegant serif typography, subtle border, py-4 px-8
- Secondary: Outlined style with transparent background
- Both use backdrop-blur-md when over images

### Information Cards
- Subtle border or shadow
- p-8 to p-12 padding
- Rounded corners (rounded-lg)

### Print Menu Layout
- Clean, organized format with dish categories
- Generated dish thumbnails alongside descriptions
- Restaurant info header and footer
- Black and white optimized

## Images

**Hero Image**: AI-generated full-viewport background
- Prompt suggestion: "Elegant restaurant interior, soft ambient lighting, intimate dining atmosphere, shallow depth of field, warm tones, professional photography"

**Menu Dish Photos** (6-9 images): AI-generated plating shots
- Prompt suggestions: 
  - "Gourmet plated dish, fine dining presentation, artistic plating, shallow depth, professional food photography"
  - "Signature entree, elegant plating, moody lighting, restaurant quality"
  - "Artisanal dessert, beautiful presentation, soft natural light"

**Ambiance Gallery** (4-6 images): AI-generated interior/setting photos
- Prompt suggestions:
  - "Moody bistro interior, candlelit tables, intimate atmosphere"
  - "Sunlit restaurant dining room, natural light, modern minimal"
  - "Restaurant bar area, craft cocktails, ambient lighting"
  - "Table setting detail, wine glasses, elegant flatware"

All images should be high-resolution, professionally styled, and convey upscale dining experience.

## Special Features
- Smooth scroll behavior throughout
- Lazy loading for images below fold
- Print stylesheet for mini-menu with proper breaks and formatting
- Responsive images with art direction (different crops for mobile/desktop)

## Accessibility
- High contrast text over images using overlays or blur backgrounds
- Semantic HTML for menu structure
- Focus states for all interactive elements
- Alt text for all food and ambiance photography