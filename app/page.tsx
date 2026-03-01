"use client";

import { useState } from "react";
import Script from "next/script";

interface Observation {
  id: number;
  object: string;
  notes: string;
  date: string;
}

export default function StarGatherDemo() {
  const [observations, setObservations] = useState<Observation[]>([
    {
      id: 1,
      object: "M42",
      notes: "Orion Nebula looked amazing tonight!",
      date: "Feb 28, 2026",
    },
    {
      id: 2,
      object: "Jupiter",
      notes: '4 moons visible with 8" scope',
      date: "Feb 27, 2026",
    },
    {
      id: 3,
      object: "M31",
      notes: "Andromeda Galaxy - great in binoculars",
      date: "Feb 26, 2026",
    },
    {
      id: 4,
      object: "Saturn",
      notes: "Rings tilted nicely",
      date: "Feb 25, 2026",
    },
    {
      id: 5,
      object: "Betelgeuse",
      notes: "Dimmer than usual?",
      date: "Feb 24, 2026",
    },
  ]);

  const [newObject, setNewObject] = useState("");
  const [newNotes, setNewNotes] = useState("");
  const [selectedObject, setSelectedObject] = useState<string | null>(null);

  const addObservation = () => {
    if (!newObject.trim()) return;
    setObservations([
      ...observations,
      {
        id: Date.now(),
        object: newObject.trim(),
        notes: newNotes.trim() || "No notes",
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      },
    ]);
    setNewObject("");
    setNewNotes("");
  };

  return (
    <>
      <Script
        src="https://aladin.cds.unistra.fr/AladinLite/api/v3/latest/aladin.js"
        strategy="afterInteractive"
      />

      <div className="min-h-screen bg-zinc-950 text-white p-8 font-sans">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-2 text-center tracking-tighter">
            🌌 StarGather
          </h1>
          <p className="text-center text-zinc-400 mb-8 text-xl">
            Albuquerque Night Sky Club • Live Observation Log
          </p>

          {/* Form */}
          <div className="bg-zinc-900 p-6 rounded-3xl mb-10">
            <h2 className="text-2xl mb-4">Log a new sighting</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Object name (M42, Jupiter...)"
                value={newObject}
                onChange={(e) => setNewObject(e.target.value)}
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-lg focus:outline-none focus:border-violet-500"
              />
              <input
                type="text"
                placeholder="Quick notes"
                value={newNotes}
                onChange={(e) => setNewNotes(e.target.value)}
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-lg focus:outline-none focus:border-violet-500"
              />
              <button
                onClick={addObservation}
                className="bg-violet-600 hover:bg-violet-700 px-10 py-4 rounded-2xl font-medium text-lg whitespace-nowrap"
              >
                Log It
              </button>
            </div>
          </div>

          {/* Feed */}
          <div className="grid gap-6">
            {observations.map((obs) => (
              <div
                key={obs.id}
                className="bg-zinc-900 p-8 rounded-3xl hover:ring-2 hover:ring-violet-500 transition-all cursor-pointer group"
                onClick={() => setSelectedObject(obs.object)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-4xl font-mono font-bold text-violet-400 mb-1">
                      {obs.object}
                    </div>
                    <div className="text-sm text-zinc-500">{obs.date}</div>
                  </div>
                  <button
                    className="bg-white/10 group-hover:bg-white/20 px-6 py-2 rounded-2xl text-sm transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedObject(obs.object);
                    }}
                  >
                    View in Sky →
                  </button>
                </div>
                <p className="mt-6 text-lg text-zinc-300">{obs.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aladin Modal */}
      {selectedObject && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedObject(null)}
        >
          <div
            className="bg-zinc-900 rounded-3xl w-full max-w-5xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-zinc-700 flex justify-between items-center">
              <h2 className="text-3xl font-medium">
                Sky Map — {selectedObject}
              </h2>
              <button
                onClick={() => setSelectedObject(null)}
                className="text-4xl leading-none text-zinc-400 hover:text-white"
              >
                ×
              </button>
            </div>

            <div id="aladin-container" className="w-full h-[620px] bg-black" />

            <div className="p-4 text-center text-xs text-zinc-500">
              Real Aladin Lite • Drag to pan • Scroll or pinch to zoom
            </div>
          </div>
        </div>
      )}

      {/* Initialize Aladin */}
      {selectedObject && (
        <Script
          id="aladin-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              A.init.then(() => {
                const container = document.getElementById('aladin-container');
                if (container) {
                  container.innerHTML = '';
                  window.currentAladin = A.aladin('#aladin-container', {
                    target: '${selectedObject}',
                    fov: 25,
                    showReticle: true,
                    showZoomControl: true,
                    showFullscreenControl: true,
                    showCooGridControl: true,
                  });
                }
              });
            `,
          }}
        />
      )}
    </>
  );
}
