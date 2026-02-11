# Specification

## Summary
**Goal:** Build a “Chapter One” online bookstore homepage UI with a warm bookstore aesthetic, featuring a hero section, a trending books grid, and a client-side cart with a dynamic item count.

**Planned changes:**
- Create a React + TypeScript homepage matching the provided structure: header with “Chapter One 📚”, nav links (Home, Categories, Bestsellers), and a cart button with a dynamic count.
- Implement the hero section with the exact headline, description, and “Browse Collection” CTA (with hover/focus styles).
- Render a responsive “Trending Books” grid with 4 book cards (title, author, cover image, Add to Cart).
- Add client-side cart state: Add to Cart updates header count immediately; provide a cart view (drawer/modal/section) to see items and adjust quantities/remove.
- Add the footer with the exact copyright text.
- Apply consistent Tailwind styling using a warm paper-and-ink palette (not blue/purple).
- Add and use generated static images for the hero visual and book cover placeholders under `frontend/public/assets/generated`.

**User-visible outcome:** Users can view a styled bookstore landing page, browse a trending books section, add books to a cart with a live-updating count, open the cart to review and adjust items, and see the complete page with hero and footer.
