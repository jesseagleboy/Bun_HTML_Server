# Bun_HTML_Server

A simple demonstration of Bun's HTML server capabilities with React and Svelte components integration.

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
bun dev
```

This command runs a script defined in `package.json` that locates all HTML files in the repository and generates links to them.

## 🎯 Project Goals

The main objectives of this project are:

1. **Test Bun's HTML Server Feature**: Explore the simplicity of creating a server using just HTML files with `bun index.html` as described in the [Bun HTML documentation](https://bun.sh/docs/bundler/html).

2. **Component Integration**: Test the integration of both React (already supported) and Svelte (newly supported in Bun 1.2.5) components.

3. **Shared State Management**: Experiment with using Preact's Signals (specifically `@preact/signals-react`) as a shared state management solution that works in both React and Svelte components:
   - Use a single signal instance as the source of truth across different component frameworks
   - Demonstrate that `@preact/signals-react` can be imported and used effectively in Svelte components
   - Achieve real-time synchronization between React and Svelte components using the same signal

4. **Persistence**: Implement local storage to maintain state between page navigations and browser sessions.

## 📝 Key Findings & Technical Details

- It's possible to use a single Preact Signal from the `@preact/signals-react` package as a source of truth between React and Svelte components, despite the React-specific package name.
- This approach provides an effective way to share state across different component frameworks.
- While this works well for simpler applications, it may not be ideal for complex data handling scenarios.
- Note: This implementation doesn't support Svelte 5.0's Runes feature.

## 🧩 Project Structure

All files are currently organized in the root directory of the project:

```
Bun_HTML_Server/
├── index.html          # Main entry point
├── *.html              # Additional HTML files served by Bun
├── *.jsx               # React component files
├── *.svelte            # Svelte component files
└── package.json        # Project dependencies and scripts
```

*Note: This is a simple demonstration project with a flat file structure.*

## 📚 Learn More

- [Bun Documentation](https://bun.sh/docs)
- [Bun HTML Server](https://bun.sh/docs/bundler/html) - Information about Bun's HTML server capabilities
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
