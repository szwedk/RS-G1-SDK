"use client";

import React from "react";

// Replace with actual logo image import if available
// import LogoImage from "../public/logo.png";

const MENU = [
  {
    section: "G1",
    items: [
      { label: "G1 Tutorial", href: "/g1-tutorial#tutorial" },
      { label: "G1 Overview", href: "/g1-tutorial#overview" },
      { label: "G1-Edu Overview", href: "/g1-tutorial#edu-overview" },
      { label: "G1 Dex 3-1 Hand", href: "/g1-tutorial#three-fingered" },
      { label: "G1 Dex 5-1 Hand", href: "/g1-tutorial#five-fingered" },
      // { label: "G1 Radar and Camera FOV", href: "/g1-tutorial#radar-camera-fov" },
      // { label: "G1 Installation Holes", href: "/g1-tutorial#installation-holes" },
      { label: "G1 Electrical Interface", href: "/g1-tutorial#electrical-interface" },
      { label: "G1 On-Board Computer", href: "/g1-tutorial#on-board-computer" },
      { label: "G1 Joint Motor", href: "/g1-tutorial#joint-motor" },
    ],
  },
  {
    section: "OPERATION",
    items: [
      { label: "G1 Manuals", href: "/g1-operation#manuals" },
      { label: "G1 Mobile Apps", href: "/g1-operation#mobile-apps" },
      // { label: "G1 Itinerary and Transport", href: "/g1-operation#itinerary-transport" },
      // { label: "G1 Charging", href: "/g1-operation#charging" },
      // { label: "G1 Unpacking and Initial Setup", href: "/g1-operation#unpacking-setup" },
      { label: "G1 Powering On", href: "/g1-operation#powering-on" },
      { label: "G1 Switching Off", href: "/g1-operation#switching-off" },
      { label: "G1 Packing", href: "/g1-operation#packing" },
      { label: "G1 Basic Operation", href: "/g1-operation#basic-operation" },
    ],
  },
  {
    section: "RESEARCH & DEVELOPMENT",
    items: [
      { label: "Quick-Start", href: "/g1-researchdevelopment#quick-start" },
      { label: "Jetson Orin Nx", href: "/g1-researchdevelopment#jetson-orin-nx" },
    ],
  },
  {
    section: "GETTING HELP",
    items: [
      // { label: "RMA / Support", href: "/g1-gettinghelp#rma-support" },
      { label: "Help Resources", href: "/g1-gettinghelp#help-resources" },
      // { label: "Getting Involved", href: "/g1-gettinghelp#getting-involved" },
      { label: "Frequently Asked Questions", href: "/g1-gettinghelp#faq" },
    ],
  },
];

const accentGreen = "#58A4B0";

const RenderMenu: React.FC = () => {
  const [showHelpMenu, setShowHelpMenu] = React.useState(true);

  return (
    <>
      {MENU.map((section) => {
        const isHelpSection = section.section === "GETTING HELP";
        return (
          <div key={section.section} className="mb-7">
            <div
              className={`mb-2 uppercase tracking-wider text-xs font-semibold cursor-pointer flex justify-between items-center px-3 py-2 rounded-lg transition-colors ${isHelpSection ? "hover:bg-[#DB9D47] hover:text-[#040F16]" : ""}`}
              style={{ color: accentGreen }}
              onClick={() => {
                if (isHelpSection) setShowHelpMenu((prev) => !prev);
              }}
            >
              <span>{section.section}</span>
              {isHelpSection && (
                <span className="text-lg">{showHelpMenu ? "▾" : "▸"}</span>
              )}
            </div>
            <ul className={`${isHelpSection && !showHelpMenu ? "hidden" : ""}`}>
              {section.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 rounded-lg mb-1 transition-colors hover:bg-[#DB9D47] hover:text-[#040F16] text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
};

const Sidebar: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <aside
      className={`h-screen ${className} w-72 flex flex-col px-6 py-6 overflow-y-auto md:overflow-hidden`}
      style={{
        background: "#040F16",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header */}
      <div className="flex items-center space-x-3 mb-5">
        <span className="font-semibold text-lg" style={{ color: accentGreen }}>
          G1 Tutorials
        </span>
      </div>
      {/* Logo image */}
      <div className="flex justify-center mb-6">
        {<img src="/media/Gears.png" alt="Logo" className="h-16 w-auto" />}
    
        </div>
     
      {/* Search bar */}
      <div className="mb-7">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
          style={{ backgroundColor: "#E5E5E5" }}
        />
      </div>
      {/* Menu sections */}
      <nav className="flex-1">
        <RenderMenu />
      </nav>
    </aside>
  );
};

export default Sidebar;