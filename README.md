1. npx create-vite@latest --template typescript-react-tailwind-vite my-project
   chọn react -> typescript
2. cd my-project
3. npm install

- - - Cài tailwindcss **************\*\*\*\***************

1. npm install -D tailwindcss postcss autoprefixer
2. Create Init
   npx tailwindcss init -p
3. Update index.css
   @tailwind base; @tailwind components; @tailwind utilities;
4. Update tailwind.config.js
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   cài npm i react-router-dom để cài routes
   npm i axios
   npm install react-hook-form
