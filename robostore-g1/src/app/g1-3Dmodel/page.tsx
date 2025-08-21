"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const G1ModelViewer = dynamic(() => import("../../components/G1ModelViewer"), { ssr: false });

export default function G1StartPage() {
  const [trackingEnabled, setTrackingEnabled] = useState(true);

  return (
    <section className="px-6 py-10 max-w-4xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-4">Getting Started with the G1</h1>
      <p className="text-gray-300 mb-6">
        Welcome to the G1 Start Guide. This page will walk you through the essential setup steps,
        powering on, and initializing your Unitree G1 robot.
      </p>

      <div className="my-8">
        <G1ModelViewer trackingEnabled={trackingEnabled} />
        <div className="flex items-center justify-center mt-4 mb-2">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span>Tracking</span>
            <button
              onClick={() => setTrackingEnabled(!trackingEnabled)}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 ${
                trackingEnabled ? "bg-[#DB9D47]" : "bg-gray-600"
              }`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${
                  trackingEnabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
        <p className="text-sm text-center mt-2 text-gray-400">
          {/* This interactive model illustrates key internals of the Unitree G1 EDU configuration. */}
        </p>
      </div>

      <ul className="list-disc list-inside text-gray-200 space-y-2 mb-10">
        <li>Unboxing the G1 and verifying components</li>
        <li>Attaching accessories (hands, batteries, sensors)</li>
        <li>Initial boot and calibration sequence</li>
        <li>Entering operation mode safely</li>
      </ul>

      <div className="text-right">
        <Link href="/g1-overview" className="inline-block">
          <span className="bg-[#DB9D47] text-[#040F16] px-6 py-2 rounded-lg shadow hover:bg-[#c78e3f] font-medium">
            Back to Overview
          </span>
        </Link>
      </div>
    </section>
  );
}