# StarGather 🌌

**Live shared observation log + instant professional sky map viewer for local astronomy clubs**

A quick weekend prototype built for the DEV.to Weekend Challenge ("build something community-focused").  
Live demo: https://star-gather.vercel.app

### What it does

StarGather lets astronomy club members (e.g., the Albuquerque Night Sky Club) quickly log what they saw under the night sky and instantly view any sighting in a real interactive planetarium-style map — powered by **Aladin Lite** from CDS.

- Log sightings in seconds (object name + notes)
- See a shared feed of recent observations from the group
- Click any entry → full-screen Aladin sky map centers **exactly** on that object (M42, Jupiter, Betelgeuse, etc.)
- All in the browser, no install, mobile-friendly, dark theme

### Why I built it

Local astronomy clubs thrive on shared excitement — "Hey, did you see that?" — but sightings are often scattered across texts, WhatsApp, or notebooks.  
This tiny tool makes it trivial to log + visualize together, especially useful before/after star parties in dark-sky areas around Albuquerque.

### The party trick 🪄

The magic is **Aladin Lite v3**[](https://aladin.cds.unistra.fr/AladinLite/), a lightweight embed used by professional astronomers.  
It resolves common object names automatically and gives smooth panning/zooming.  
Watching the map snap to exactly what someone just logged feels like having a mini planetarium in your pocket.

### Tech stack (built in <2 hours)

- Next.js 14 (App Router) + Tailwind CSS
- Aladin Lite (vanilla JS embed via CDN — no npm!)
- React state only (no backend/database for this MVP — everything local to the browser)
- Deployed on Vercel

### Screenshots

![Log form and feed](https://via.placeholder.com/800x450/111/eee?text=Feed+%26+Log+Form)  
*Observation feed + quick-log form*

![Aladin sky map modal](https://via.placeholder.com/800x450/000/fff?text=Aladin+Sky+Map+Modal)  
*Click → real interactive sky map centered on the object*

(Replace placeholders with actual screenshots once you take them!)

### Try it yourself

1. Visit https://star-gather.vercel.app
2. Type an object name (e.g. "M42", "Jupiter", "M31 Andromeda")
3. Add notes → Log It
4. Click any card → watch the sky map appear!

### Future ideas (if I keep going)

- Supabase backend → real shared data across club members
- Club invite codes / simple auth
- Photo uploads tied to observations
- Weather + moon phase hints for star party planning
- Export logs to citizen science projects (AAVSO, etc.)

Built for fun and the DEV Weekend Challenge — feedback / stars / forks very welcome!

Made with ❤️ in Albuquerque, NM  
Nick (@datadr1ven)
