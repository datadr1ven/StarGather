# StarGather 🌌

**Shared observation log with interactive sky map viewer for local astronomy clubs**

A weekend prototype built for the DEV.to Weekend Challenge: Community-focused applications.  
Live demo: https://star-gather.vercel.app

### Overview

StarGather is a simple web application designed for amateur astronomy clubs, such as those in Albuquerque, New Mexico, where members frequently gather for star parties and dark-sky observing sessions.

It allows club members to:
- Quickly log celestial observations (object name and notes)
- View a shared feed of recent sightings from the group
- Click any observation to open an interactive, professional-grade sky map centered on the exact object

The sky map is powered by **Aladin Lite** (developed by the Centre de Données astronomiques de Strasbourg), the same lightweight viewer used by professional astronomers. It automatically resolves common object names (M42, Jupiter, M31, Betelgeuse, etc.) and provides smooth panning, zooming, and coordinate grid overlays.

### Why this project

Astronomy clubs thrive on shared excitement and collective discovery, but observation notes are often scattered across group chats, personal notes, or emails. Visualizing what another member saw typically requires switching to a separate planetarium app.

StarGather brings logging and visualization together in one minimal, browser-based tool—ideal for use on phones or tablets during observing sessions.

### Key Features

- Clean, dark-themed interface optimized for night-time use
- Instant logging of observations with automatic date stamping
- Shared feed of group sightings
- One-click access to a real astronomical sky viewer (Aladin Lite) for any logged object
- Fully client-side for this MVP (no backend required)

### Technologies Used

- Next.js 14 (App Router) + Tailwind CSS
- Aladin Lite v3 (loaded via official CDN — no additional packages)
- React state management (`useState` only — no database for the prototype)
- Deployed on Vercel

### Screenshots

<image-card alt="Observation feed and logging form" src="images/log-screencap.png" ></image-card>
*Shared feed with quick-log form*

<image-card alt="Observation feed and logging form" src="images/aladin-view-screencap.png" ></image-card>
*Clicking an observation opens the interactive sky map*

### Try it out

1. Visit https://star-gather.vercel.app
2. Enter an object name (e.g., "M42", "Jupiter", "M31")
3. Add optional notes and click "Log It"
4. Click any observation card to view it in the sky map

### Future Ideas

- Add Supabase or Firebase for real shared data across users
- Simple club/group codes or authentication
- Photo uploads linked to observations
- Moon phase, weather, and dark-sky site suggestions
- Export to citizen science platforms (e.g., AAVSO)

Built in under 2 hours as a focused prototype for the DEV Weekend Challenge.  
Feedback, issues, and pull requests are very welcome!
