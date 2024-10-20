# CHANGELOG

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
