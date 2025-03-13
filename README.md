# Bun_HTML_Server

A simple demonstration of Bun's HTML server capabilities with React and Svelte components integration.

[![Netlify Status](https://api.netlify.com/api/v1/badges/6e653192-72af-4565-ad0a-f7992e88cdde/deploy-status)](https://app.netlify.com/sites/bun-html-server/deploys)

## 📋 Overview

This project demonstrates Bun's ability to serve HTML files directly as a server using the command `bun index.html`. It explores the integration of both React and Svelte components within this simple server setup, along with state management using Preact's Signals.

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed (v1.2.5+)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/Bun_HTML_Server.git
cd Bun_HTML_Server

# Install dependencies
bun install
```

### Running the Server

```bash
# Development mode
bun dev

# Build for production
bun build

# Preview production build
bun preview
```

## 🎯 Project Goals

The main objectives of this project are:

1. **Test Bun's HTML Server Feature**: Explore the simplicity of creating a server using just HTML files with `bun index.html` as described in the [Bun HTML documentation](https://bun.sh/docs/bundler/html).

2. **Component Integration**: Test the integration of both React (already supported) and Svelte (newly supported in Bun 1.2.5) components.

3. **Shared State Management**: Experiment with using Preact's Signals (specifically `@preact/signals-react`) as a shared state management solution that works in both React and Svelte components:
   - Use a single signal instance as the source of truth across different component frameworks
   - Demonstrate that `@preact/signals-react` can be imported and used effectively in Svelte components
   - Achieve real-time synchronization between React and Svelte components using the same signal

4. **Persistence**: Implement local storage to maintain state between page navigations and browser sessions.

## 📝 Key Features

- **Multi-framework Integration**: Seamlessly integrates React and Svelte components in the same application
- **Shared State**: Uses Preact's Signals for state management across different component frameworks
- **Modern Styling**: Implements Tailwind CSS with plugins for forms, typography, and DaisyUI components
- **Optimized Build Process**: Configured for development and production builds
- **Local Storage Persistence**: Maintains state between page navigations

## 🧩 Project Structure

```
Bun_HTML_Server/
├── src/                        # Source code directory
│   ├── react/                  # React components
│   │   ├── index.tsx           # Main React component
│   │   └── another.tsx         # Secondary page React component
│   ├── svelte/                 # Svelte components
│   │   ├── App.svelte          # Main Svelte component
│   │   └── svelte.ts           # Svelte mounting code
│   ├── stylesheet/             # CSS styles
│   │   └── styles.css          # Main stylesheet with Tailwind imports
│   ├── store.ts                # Shared state management
│   ├── index.html              # Main HTML entry point
│   └── another-page.html       # Secondary page HTML
├── build.ts                    # Build configuration
├── bunfig.toml                 # Bun configuration
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## 🛠️ Technologies Used

- **[Bun](https://bun.sh/)**: All-in-one JavaScript runtime and toolkit
- **[React 19](https://react.dev/)**: Library for building user interfaces
- **[Svelte 5](https://svelte.dev/)**: Component framework with a new reactive primitive ($state)
- **[Preact Signals](https://preactjs.com/guide/v10/signals)**: Fine-grained reactivity system
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[DaisyUI](https://daisyui.com/)**: Component library for Tailwind CSS
- **[TypeScript](https://www.typescriptlang.org/)**: Typed JavaScript

## 🔍 Implementation Details

### State Management

The application uses Preact's Signals from the `@preact/signals-react` package to maintain state between React and Svelte components:

```typescript
// src/store.ts
import {signal} from "@preact/signals-react";

export const count = signal(Number(localStorage.getItem("count") || 0));
```

### Local Storage Persistence

The counter value is persisted in localStorage, allowing the state to be maintained between page navigations and browser refreshes:

```typescript
// Example from React component
onClick={() => {
  localStorage.setItem("count", `${count.value + 1}`);
  count.value = Number(localStorage.getItem("count") || 0);
}}
```

### Build Configuration

The project is configured for development and production builds using Bun's build API with plugins for Tailwind and Svelte:

```typescript
// build.ts
import bunPluginTailwind from "bun-plugin-tailwind"
import bunPluginSvelte from "bun-plugin-svelte"

Bun.build({
  entrypoints: ["src/index.html", "src/another-page.html"],
  outdir: "./dist",
  minify: true,
  splitting: true,
  sourcemap: "linked",
  // ...other options
  plugins: [bunPluginTailwind, bunPluginSvelte],
});
```

## 📚 Learn More

- [Bun Documentation](https://bun.sh/docs)
- [Bun HTML Server](https://bun.sh/docs/bundler/html) - Information about Bun's HTML server capabilities
- [React Documentation](https://react.dev/learn) - Official React documentation
- [React 19 Release Notes](https://react.dev/blog/2024/03/06/react-19) - Information about the latest React version
- [Preact Signals](https://preactjs.com/guide/v10/signals)
- [Svelte Documentation](https://svelte.dev/docs)

## 🙏 Acknowledgements

Thanks to the following tools and libraries that made this project possible:

- [Bun](https://bun.sh/) - The all-in-one JavaScript runtime and toolkit
- [React](https://react.dev/) - The library for web and native user interfaces
- [Svelte](https://svelte.dev/) - Cybernetically enhanced web apps
- [Preact](https://preactjs.com/) - Fast 3kB alternative to React with the same modern API
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - The most popular component library for Tailwind CSS

## 📄 License

[MIT](LICENSE)

---

*This README was written with assistance from Claude, Anthropic's AI assistant.*