/* ------------------------------------------------------------------
   ClientLayoutWrapper
   Handles all client-side interactivity for the responsive layout
------------------------------------------------------------------- */
"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

/** Wraps the entire page so that the sidebar can slide in/out on mobile */
export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  /* State to track whether the sidebar is open on small screens */
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /** Toggle sidebar open / closed */
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <>
      {/* Mobile hamburger / close button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-[#58A4B0] text-white px-3 py-1 rounded-lg shadow-md"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? "Close" : "Menu"}
      </button>
  
      {/* Background blur overlay (mobile only) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/50"
          onClick={toggleSidebar}
        />
      )}
      {/* Background blur overlay (mobile only) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/50"
          onClick={toggleSidebar}
        />
      )}

      {/* ───────────────────────────────────────────────────────────
          Layout grid:
          • Sidebar (slides in/out on mobile, fixed on desktop)
          • Header (always visible, adjusts width)
          • Main content (scrolls)
         ─────────────────────────────────────────────────────────── */}
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 z-50 h-screen w-72 bg-[#040F16] 
                      transition-transform duration-300 ease-in-out
                      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                      md:translate-x-0 md:static`}
        >
          <Sidebar />
        </aside>

        {/* Header */}
        <header
          className="fixed top-0 right-0 z-40 h-16 w-full
                     md:left-72 md:w-[calc(100%-18rem)]
                     transition-all duration-300"
        >
          <Header showMenuButton onMenuClick={toggleSidebar} />
        </header>

        {/* Main scrollable content */}
        <main
          className="flex-1 pt-16 pb-6 h-full overflow-y-auto
                     transition-all duration-300 md:ml-2"
        >
          {children}
        </main>
      </div>
    </>
  );
}