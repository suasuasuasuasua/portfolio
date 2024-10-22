# CHANGELOG

## 0.3.0 (2024-10-22)

### Feat

- **app/about/page.tsx**: updated the about page route
- **app/about/emails.tsx**: added email hardcoded data
- **types/email.tsx**: added basic email interface for contact
- **app/about/page.tsx**: filled out the about page route
- **app/about/faq.tsx**: added initial write up for the about faq content
- **components/about/faq.tsx**: added basic typing for the about page
- **app/tech/page.tsx**: added general software that i use
- **app/tech/computers.tsx**: added all the descriptions for the main machines
- **app/tech/page.tsx**: added basic setup for the tech page
- **app/tech/computers.tsx**: added first draft writeup for the computers
- **types/computer.tsx**: added a typing system for computers
- **components/link.tsx**: added a unified highlighted link object
- **app/page.tsx**: added a basic home page with a "now" section
- **components/now**: added a few basic components for "now" page
- **app/page.tsx**: added spotify widget component

### Fix

- **components/tech/software.tsx**: added the icon wrapping for the CLI software
- **components/header.tsx**: using the pathname instead of a state hook
- **components/tech/software.tsx**: added dynamic shifting of icons
- **app/tech/software.tsx**: fixed safari link reference
- **app/tech/page.tsx**: added dynamic spacing, margins, and widths
- **components/placeholder.tsx**: deleted the layout prop
- **app/page.tsx**: fixed the books using the album component
- **components/footer.tsx**: changed anchor tags to Link component

### Refactor

- **components/tech/computer.tsx**: disabling the description for now
- **components/tech/computer.tsx**: destructured the parameters further
- **components/header.tsx**: made the activate indicator more obvious
- **app/page.tsx**: removed the placeholder for the home page

## 0.2.0 (2024-10-20)

### Feat

- **components/placeholder.tsx**: added a placeholder component
- **components/header.tsx**: added an indicator for the currently opened page
- **app/ui/header.tsx**: moved the penguin icon and right aligned pages

### Fix

- **component/placeholder.tsx**: added more responsive design for the plink
- **components/header.tsx**: spaced out the header elements much cleaner
- **devenv.nix**: fixed eslint filetype checker
- **app/layout.tsx**: fixed header and pushed the footer component to the bottom

### Refactor

- **app/**: added the placeholder component to all existing pages
- **app/ui/footer.tsx**: refactored social icons to be in a dictionary
- **package.json**: added autoprefixer as per tailwindcss docs

## 0.1.0 (2024-10-16)

### Feat

- **app/\*/page.tsx**: Added dummy pages
- **cliff.toml**: added git-cliff to devenv and github action
- **app/page.tsx**: added a second row to the footer
- **app/page.tsx**: added font awesome icons
- **README.md**: Added notes about the project
- **all**: added skeleton for next.js web app
- **devenv.nix**: added yarn and remove just
- **package.json**: added prettier import sort
- **all**: initial commit!

### Fix

- **app/ui**: merged icons into footer file
- **all**: added readme and fixed missing image
- **src**: moved penguin to public
- **src/**: reverted last change!

### Refactor

- **app/ui/footer/icon.tsx**: moved the footer icon to a dedicated file
- **styles/globals.css**: moved the global.css to an outer styles folder
- **app/layout.tsx**: moved the fonts to the public folder
