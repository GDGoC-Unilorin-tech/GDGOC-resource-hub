# GDGOC Unilorin Resource Hub 🚀

[![Mintlify](https://img.shields.io/badge/Built%20with-Mintlify-blue)](https://mintlify.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> **Your comprehensive guide to career development, tech learning paths, and community resources for GDGOC Unilorin members.**

The GDGOC Unilorin Resource Hub is a Mintlify-powered documentation site designed to provide well-organized, accessible, and easily maintainable learning resources for the Google Developer Groups On Campus (GDGOC) community at the University of Ilorin.

📚 **[Visit the live page](https://gdgocunilorin.mintlify.app)** | 🌐 **[GDGOC Unilorin](https://gdg.community.dev/gdg-on-campus-university-of-ilorin-ilorin-nigeria/)**

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [How to Contribute](#-how-to-contribute)
- [Content Guidelines](#-content-guidelines)
- [Project Roadmap](#️-project-roadmap)
- [Support](#-support)
- [License](#-license)

---

## 🎯 About

The GDGOC Unilorin Resource Hub serves as a **single source of truth** for all GDGOC Unilorin learning paths, event resources, career development materials, and onboarding documentation. Built with Mintlify, it offers:

- 🌟 **Clean, searchable documentation** optimized for student learning
- 🚀 **Fast and responsive** interface with excellent navigation
- 🤝 **Community-driven** content that anyone can contribute to
- 📱 **Mobile-friendly** design for learning on the go
- 🎨 **Modern UI** with GDG-inspired branding

### Why Mintlify?

We chose Mintlify because it:

- ✅ Is extremely fast to build and easy to maintain
- ✅ Allows non-developers to contribute through Markdown and GitHub PRs
- ✅ Has excellent navigation, sidebar hierarchy, and auto-generated search
- ✅ Supports interactive components, embeds, and code blocks
- ✅ Is ideal for documentation-style learning hubs

---

## ✨ Features

### 📚 Learning Paths

Structured learning paths for students in:

- **Frontend Development** - HTML, CSS, JavaScript, React, and more
- **Backend Development** - Node.js, databases, APIs, and server-side programming
- **Cloud Computing** - Google Cloud Platform (GCP) fundamentals
- **Mobile Development** - Flutter and mobile app development
- **Machine Learning** - AI/ML basics and advanced topics
- **Non-technical Tracks** - Design, product management, and more

### 🎓 Career Development

- Resume templates and writing guides
- LinkedIn optimization strategies
- Portfolio building tips
- Interview preparation resources
- Job hunting strategies

### 🎉 Event Resources

- DevFest Ilorin materials
- Workshop resources
- Hackathon guides
- Info session recordings

### 🛠️ Tools & Platforms

Guides for essential developer tools:

- Firebase
- Flutter
- GitHub & Git
- Google Cloud Platform

### 🌐 Community

- Join links and community guidelines
- Contributor guide
- Code of conduct
- Community events and activities

---

## 📁 Project Structure

```text
GDGOC-resource-hub/
├── docs.json                    # Mintlify configuration
├── index.mdx                    # Home page
├── purpose-of-this-guide.mdx    # Introduction
├── how-to-contribute.mdx        # Contribution guide
├── quickstart.mdx               # Quick start guide
├── development.mdx              # Development setup
├── frontend-development.mdx     # Frontend learning path
├── backend-development.mdx      # Backend learning path
├── web-development.mdx          # Web dev resources
├── logo/                        # Brand assets
│   ├── light.png
│   └── dark.png
├── images/                      # Documentation images
├── style.css                    # Custom styles
├── favicon.svg                  # Site favicon
├── LICENSE                      # MIT License
└── README.md                    # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (a version supported by the current Mintlify CLI)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/GDGoC-Unilorin-tech/GDGOC-resource-hub.git
   cd GDGOC-resource-hub
   ```

2. **Install the Mint CLI**

   ```bash
   npm i -g mint
   ```

   Or using yarn:

   ```bash
   yarn global add mint
   ```

   Or using pnpm:

   ```bash
   pnpm add -g mint
   ```

3. **Verify installation**

   ```bash
   mint --version
   ```

---

## 💻 Development

### Running Locally

Start the local development server at the root of your documentation (where `docs.json` is located):

```bash
mint dev
```

Your local preview will be available at `http://localhost:3000`.

### Making Changes

1. Edit any `.mdx` file in the repository
2. Changes will automatically refresh in your browser
3. Review your changes in the local preview
4. Commit and push when satisfied

### Preview Builds

When you open a pull request, Mintlify automatically generates a preview deployment so you can review changes before merging.

---

## 🤝 How to Contribute

We welcome contributions from everyone in the GDGOC community! Whether you're fixing a typo, adding a new learning resource, or suggesting improvements, your input helps make this hub better for everyone.

### Quick Contribution Guide

1. **Fork the repository** to your GitHub account

2. **Clone your fork** to your local machine:

   ```bash
   git clone https://github.com/yourusername/GDGOC-resource-hub.git
   ```

3. **Create a new branch** for your changes:

   ```bash
   git checkout -b feat/your-feature-name
   ```

4. **Make your changes** following our [content guidelines](#-content-guidelines)

5. **Test locally** using `mint dev`

6. **Commit your changes** using [Conventional Commits](https://www.conventionalcommits.org/):

   ```bash
   git commit -m "feat: add machine learning resources"
   ```

7. **Push to your fork**:

   ```bash
   git push origin feat/your-feature-name
   ```

8. **Open a Pull Request** on the main repository

### Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/) for clear and structured commit history:

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New features or pages | `feat: add Flutter tutorial` |
| `fix` | Bug fixes or typo corrections | `fix: correct broken link in README` |
| `docs` | Documentation-only changes | `docs: update contribution guide` |
| `refactor` | Code refactoring without behavior changes | `refactor: reorganize career section` |
| `chore` | Routine tasks (config updates, etc.) | `chore: update Mintlify config` |
| `style` | Formatting, styling changes | `style: improve code block formatting` |

### What Can You Contribute?

- 📝 **New learning resources** - Add tutorials, guides, or curated content
- 🐛 **Bug fixes** - Fix typos, broken links, or formatting issues
- 💡 **Feature suggestions** - Propose new sections or improvements
- 🎨 **Design improvements** - Enhance UI/UX elements
- 📚 **Content updates** - Keep existing resources current and relevant
- 🌍 **Translations** - Help make resources accessible to more students

For detailed contribution guidelines, see [how-to-contribute.mdx](how-to-contribute.mdx).

---

## 📋 Content Guidelines

### File Naming Convention

- Use lowercase with dashes: `machine-learning-basics.mdx`
- Be descriptive but concise
- Use `.mdx` extension for content files

### Markdown Frontmatter

Every content file should start with frontmatter:

```mdx
---
title: "Your Page Title"
description: "Brief description of the page content"
---
```

### Writing Style

- ✍️ Use **clear, concise, and inclusive** language
- 🎯 Keep paragraphs **short** for better readability
- 🔗 Include **relevant links** to official documentation
- 💡 Use **callouts and info boxes** for important information
- 📷 Add **images and diagrams** where helpful
- 🧪 Provide **practical examples** and real-world use cases

### Using Mintlify Components

Enhance your content with Mintlify components:

**Callouts:**

```mdx
<Note>
  This is an important note for readers.
</Note>

<Warning>
  This is a warning about potential issues.
</Warning>

<Tip>
  This is a helpful tip or best practice.
</Tip>
```

**Cards:**

```mdx
<Card title="Card Title" icon="icon-name" href="/link">
  Card description
</Card>
```

**Tabs:**

```mdx
<Tabs>
  <Tab title="Option 1">
    Content for option 1
  </Tab>
  <Tab title="Option 2">
    Content for option 2
  </Tab>
</Tabs>
```

**Code Blocks:**

```mdx
```javascript
// Your code here
console.log("Hello, GDGOC!");
`` `
```

---

## 🗺️ Project Roadmap

### Phase 1: Setup ✅

- [x] Configure Mintlify
- [x] Build sidebar structure
- [x] Set up GitHub repo and contribution workflow

### Phase 2: Content Foundation 🚧

- [x] Upload initial learning paths
- [x] Add getting started guide
- [ ] Complete all learning path sections
- [ ] Add comprehensive event pages

### Phase 3: Career Section 📝

- [ ] Resume guide
- [ ] LinkedIn optimization guide
- [ ] Portfolio building guide
- [ ] Interview preparation resources

### Phase 4: Launch 🚀

- [ ] Test on mobile and desktop
- [ ] Finalize branding and design
- [ ] Create promotional materials
- [ ] Share with GDGOC Unilorin community

### Phase 5: Post-Launch 🌱

- [ ] Collect user feedback
- [ ] Add new learning tracks (AI, Cybersecurity, etc.)
- [ ] Enable student-contributed mini tutorials
- [ ] Implement community badges for contributors

### Future Enhancements 🔮

- AI-powered search via Mintlify AI
- Interactive roadmap visualizer
- Integration with Notion job board
- Interactive quizzes and assessments
- Embedded Google Codelabs
- Community badges and gamification

---

## 📞 Support

### Need Help?

- 📧 **Email**: [gdgocunilorin@gmail.com](mailto:gdgocunilorin@gmail.com)
- 🌐 **Community**: [GDGOC Unilorin](https://gdg.community.dev/gdg-on-campus-university-of-ilorin-ilorin-nigeria/)
- 🐛 **Issues**: [GitHub Issues](https://github.com/GDGoC-Unilorin-tech/GDGOC-resource-hub/issues)

### Troubleshooting

**Local development not running?**

```bash
# Update Mint CLI to latest version
npm update -g mint
# or with yarn
yarn global upgrade mint
# or with pnpm
pnpm add -g mint@latest
```

**Page loads as 404?**

- Ensure you're running `mint dev` in the folder with `docs.json`
- Check that the page is properly registered in `docs.json`

**Changes not showing?**

- Clear browser cache
- Restart the dev server
- Check for syntax errors in your MDX file

### Resources

- 📖 [Mintlify Documentation](https://mintlify.com/docs)
- 🎓 [Google Developer Resources](https://developers.google.com/)
- 🌍 [GDG Global Community](https://gdg.community.dev/)

---

## 🙏 Acknowledgments

- **Mintlify** for providing an excellent documentation platform
- **Google Developers** for supporting GDGOC communities worldwide
- **GDGOC Unilorin Team** for maintaining and contributing to this resource
- **All contributors** who help make this resource better for everyone

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

Copyright © 2024 GDGOC Unilorin

---

## 🌟 Star Us!

If you find this resource helpful, please consider giving us a star ⭐ on GitHub. It helps others discover this project!

---

<div align="center">

**Built with ❤️ by the GDGOC Unilorin Community**

</div>
