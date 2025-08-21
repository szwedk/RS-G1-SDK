# RS-G1-SDK

This is a personal side project built for Robostore, focused on delivering a web-based SDK guide and interface for the Unitree G1 humanoid robot. The goal is to make it easier for developers, researchers, and early adopters to explore the G1’s capabilities through clear documentation, UI components, video walkthroughs, and interactive examples.

---

## 🚀 What It Is

- **Next.js (App Router)** frontend project
- Written in **TypeScript**
- Structured to support modular SDK sections, how-tos, tutorials, and API walkthroughs
- Meant to scale into a developer-friendly knowledge hub for the Unitree G1 platform

---

## 🧱 Project Structure

```
/robostore-g1/
├── public/                 # Static assets (images, fonts, icons)
├── src/
│   ├── app/                # App Router pages (g1-tutorial, g1-operation, etc.)
│   ├── components/         # UI components
│   ├── styles/             # CSS/SCSS modules
│   └── pages/api/          # API routes (e.g. contact form)
├── .gitignore
├── .env.local              # Environment variables (not committed)
├── next.config.js
├── tsconfig.json
└── README.md
```

---

## 🛠 Getting Started

```bash
# clone the repo
git clone https://github.com/szwedk/RS-G1-SDK.git

# move into the project folder
cd RS-G1-SDK

# install dependencies
npm install

# start local dev server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🌐 Deployment

Optimized for **Vercel** or any modern static host.

```bash
npm run build
npm start
```

You can export static pages using `next export` if needed.

---

## 🧠 Notes

- This repo is not officially tied to Robostore or Unitree Robotics
- Built independently for internal use, education, demos, and experimentation
- External `.mp4` assets have been removed due to GitHub size limits — video content should be embedded via external host (e.g. YouTube, Drive, S3)

---

## 📄 License

MIT (or private — define based on your future usage)

---

Built and maintained by [Kamil Szwed](https://github.com/szwedk)  
For Robostore R&D and developer onboarding experiments.
