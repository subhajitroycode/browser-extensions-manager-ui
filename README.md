# Frontend Mentor - Browser Extensions Manager UI Solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Frontend Mentor - Browser Extensions Manager UI Solution](#frontend-mentor---browser-extensions-manager-ui-solution)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [The Challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My Process](#my-process)
    - [Built With](#built-with)
    - [What I Learned](#what-i-learned)
    - [Continued Development](#continued-development)
  - [Author](#author)

## Overview

### The Challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme (light/dark mode)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/public/browser-extensions-managerui.netlify.app_.png)

### Links

- Live Site URL: [Click here](https://browser-extensions-managerui.netlify.app/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS v4](https://tailwindcss.com/) - For styling
- [React Router](https://reactrouter.com/) - For navigation and URL state management

### What I Learned

This project helped me strengthen several key concepts:

**State Management with URL Parameters**: I used React Router's `useSearchParams` to manage filter states in the URL, making the application shareable and bookmarkable:

```tsx
const [searchParams] = useSearchParams();
let activeState = searchParams.get("extensions");
```

**Dark Mode Implementation**: Implemented a persistent dark mode using localStorage and Tailwind's dark mode utilities:

```tsx
const toggleDarkMode = () => {
  const toggle = !darkMode;
  setDarkMode(toggle);
  localStorage.setItem("darkMode", toggle.toString());
  document.documentElement.classList.toggle("dark", toggle);
};
```

**Custom Toggle Component**: Built a reusable toggle button component with smooth animations and proper accessibility attributes:

```tsx
<button
  role="switch"
  aria-checked={toggle}
  className={`relative inline-flex h-[18px] w-[34px] items-center rounded-full
    transition-colors duration-200 ease-in-out`}
>
```

**Dynamic Filtering Logic**: Implemented filtering that maintains original indices when toggling or removing items:

```tsx
const originalIndex = extensions.findIndex(
  (ext) => ext.name === extension.name
);
```

### Continued Development

In future projects, I want to focus on:

- Implementing drag-and-drop functionality for reordering extensions
- Adding search functionality to filter extensions by name or description
- Exploring more advanced state management solutions like Zustand or Redux
- Improving accessibility with better keyboard navigation
- Adding animation libraries like Framer Motion for smoother transitions

## Author

- Frontend Mentor - [@subhajitroycode](https://www.frontendmentor.io/profile/subhajitroycode)
- Twitter - [@subhajitroycode](https://www.twitter.com/subhajitroycode)
- LinkedIn - [Subhajit Roy](https://www.linkedin.com/in/subhajitroycode)
- Instagram - [@subhajitroycode](https://www.instagram.com/subhajitroycode)
- GitHub - [@subhajitroycode](https://www.github.com/subhajitroycode)
