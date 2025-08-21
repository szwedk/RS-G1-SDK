"use client";

import Image from "next/image";
import { useState } from "react";


export default function G1operation() {
  return (
    <div className="px-4 md:px-8">
      <h2 id="manuals" className="text-2xl font-bold tracking-tight text-white mt-16 mb-4 border-b border-gray-700 pb-2 scroll-mt-[calc(4rem+1px)] mb-12">
        Manuals
      </h2>
      <div className="space-y-6 mb-12">
        <p className="text-gray-300 text-sm leading-relaxed">
          Explore our official documentation and manuals for advanced setup, configuration, and mechanical handling of the Unitree G1 and related accessories.
        </p>
        <ul className="pl-4 list-inside text-gray-300 text-sm leading-relaxed space-y-2">
          {[
            {
              href: "/manuals/G1-EDU-DECK.pdf",
              text: "Robostore G1 EDU Deck",
              desc: "Access our Product Overview.",
            },
            {
              href: "/manuals/G1-Flagship Version A&B Terminal Three-Fingered Dexterous Hand Dex3-1 Disassembly and Assembly Guide Manual V1.1.pdf",
              text: "Dex3-1 Three-Fingered Hand Assembly Guide (Version A&B)",
              desc: "Step-by-step guide for terminal disassembly and reassembly.",
            },
            {
              href: "/manuals/G1-Flagship Version C End Dexterous Hand Disassembly and Assembly Guide Manual.pdf",
              text: "G1 Version C End Dexterous Hand Guide",
              desc: "Mechanical disassembly instructions for C-type hands.",
            },
            {
              href: "/manuals/G1-End Prosthetic Hand Disassembly and Assembly Guide Manual.pdf",
              text: "G1 Prosthetic Hand Assembly Guide",
              desc: "Covers disassembly and installation of prosthetic-style end effectors.",
            },
            {
              href: "/manuals/INSPIRE-ROBOTS-THE-DEXTEROUS-HANDS-INSTRUCTIONS.pdf",
              text: "INSPIRE Dexterous Hands Manual",
              desc: "Official operation and assembly instructions from Inspire Robots.",
            },
          ].map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 rounded-lg transition-colors bg-[#DB9D47] text-center text-[#040F16] hover:bg-[#c78e3f] font-medium shadow hover:shadow-lg"
              >
                <div className="text-base">{item.text}</div>
                <div className="text-sm opacity-80">{item.desc}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <h2 id="mobile-apps" className="text-2xl font-bold tracking-tight text-white mt-16 mb-4 border-b border-gray-700 pb-2 scroll-mt-[calc(4rem+1px)] mb-12">
        Mobile Apps
      </h2>
      <div className="space-y-6 mb-12">
        <p className="text-gray-300 text-sm leading-relaxed">
          Scan the appropriate QR code below to download the official Unitree Explore app for your mobile device:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-[#1a1a1a] rounded-lg shadow-md">
            <div className="text-center">
              <Image
                src="/media/UnitreeExplore-ANDRIOD-QRCode.png"
                alt="Unitree Explore Android App QR Code"
                width={220}
                height={220}
                className="mx-auto rounded"
              />
              <p className="mt-2 text-sm text-gray-300">Download for Android</p>
            </div>
          </div>
          <div className="p-4 bg-[#1a1a1a] rounded-lg shadow-md">
            <div className="text-center">
              <Image
                src="/media/UnitreeExploreIOS-QRcode.png"
                alt="Unitree Explore iOS App QR Code"
                width={220}
                height={220}
                className="mx-auto rounded"
              />
              <p className="mt-2 text-sm text-gray-300">Download for iOS</p>
            </div>
          </div>
        </div>
      </div>
      {/* Remaining section content (Itinerary, Charging, Setup, etc.) stays unchanged and continues below 
      <h2 id="itinerary-transport" className="text-2xl font-bold tracking-tight text-white mt-16 mb-4 border-b border-gray-700 pb-2 scroll-mt-[calc(4rem+1px)] mb-12">
        Itinerary & Transport
      </h2>
      <p className="text-gray-300 text-sm leading-relaxed mb-12">Placeholder content for Itinerary & Transport section.</p>

       <h2 id="charging" className="text-2xl font-bold tracking-tight text-white mt-16 mb-4 border-b border-gray-700 pb-2 scroll-mt-[calc(4rem+1px)] mb-12">
        Charging
      </h2>
      <p className="text-gray-300 text-sm leading-relaxed mb-12">Placeholder content for Charging section.</p> 

      <h2 id="unpacking-setup" className="text-2xl font-bold tracking-tight text-white mt-16 mb-4 border-b border-gray-700 pb-2 scroll-mt-[calc(4rem+1px)] mb-12">
        Unpacking & Setup
      </h2>
      <p className="text-gray-300 text-sm leading-relaxed mb-12">Placeholder content for Unpacking & Setup section.</p> */}

      <h2 id="powering-on" className="text-2xl font-bold tracking-tight text-white mt-16 mb-4 border-b border-gray-700 pb-2 scroll-mt-[calc(4rem+1px)] mb-12">
        Powering On
      </h2>
      <h3 className="text-lg font-semibold text-white mt-10 mb-2 scroll-mt-[calc(4rem+1px)]">
        Boot Process (Sitting Upright)
      </h3>
      <ol className="pl-4 list-inside text-gray-300 text-sm leading-relaxed space-y-2 mb-12 list-decimal">
        <li>
          <strong>Body Placement:</strong> Seat G1 upright in a chair with its limbs naturally positioned.
        </li>
        <li>
          <strong>Install Battery Pack:</strong> Insert the battery gently into the slot until a "click" confirms installation.
        </li>
        <li>
          <strong>Power On:</strong> Short press then long press the power button. Wait ~1 minute for zero torque,
          then press <span className="controllerbutton">L1 + A</span> for damping mode. Hold the shoulder and press <span className="controllerbutton">L1 + UP</span> to enter ready state.
          Press <span className="controllerbutton">R1 + X</span> (1-DOF waist) or <span className="controllerbutton">R1 + Y</span> (3-DOF waist) for operation mode.
        </li>
      </ol>
      <p className="text-gray-400 text-sm italic mt-2 mb-12">[Insert Image: G1 seated, battery installation, startup steps]</p>

      <h3 className="text-lg font-semibold text-white mt-10 mb-2 scroll-mt-[calc(4rem+1px)]">
        Boot Process (Suspended)
      </h3>
      <ol className="pl-4 list-inside text-gray-300 text-sm leading-relaxed space-y-2 mb-12 list-decimal">
        <li><strong>Hang G1:</strong> Suspend the G1 with the protective rack securely.</li>
        <li><strong>Install Battery Pack:</strong> Insert the battery until it clicks into place.</li>
        <li><strong>Body Placement:</strong> Let G1 hang naturally post-installation.</li>
        <li>
          <strong>Power On:</strong> Short press and then long press the battery switch. Wait ~1 min until ankle limit sound is heard,
          then press <span className="controllerbutton">L1 + A</span> followed by <span className="controllerbutton">L1 + UP</span> to enter ready state.
        </li>
        <li>
          <strong>Lower G1:</strong> Let the feet touch ground. Press <span className="controllerbutton">R1 + X</span> or <span className="controllerbutton">R1 + Y</span> to enter movement state.
        </li>
        <li>
          <strong>Release Hook:</strong> Once stable, detach suspension. Use joysticks to control G1. Press <span className="controllerbutton">START</span> to switch walking/standing modes.
        </li>
      </ol>
      <p className="text-gray-400 text-sm italic mt-2 mb-12">[Insert Image: Hanging G1, power button, posture, descent]</p>

      <h3 className="text-lg font-semibold text-white mt-10 mb-2 scroll-mt-[calc(4rem+1px)]">
        Debug Mode
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        While suspended and in damping, press <span className="controllerbutton">L2 + R2</span> to enter debug mode. Then:
      </p>
      <ul className="pl-4 list-inside text-gray-300 text-sm leading-relaxed space-y-2 mb-12 list-disc">
        <li>
          <span className="controllerbutton">L2 + A</span>: Enter position mode for diagnostic posture.
        </li>
        <li>
          <span className="controllerbutton">L2 + B</span>: Return to damping state.
        </li>
      </ul>
      <p className="text-gray-300 text-sm leading-relaxed mb-12">
        Ensure debug mode to prevent SDK instruction conflict. Confirm by pressing <span className="controllerbutton">L2 + A</span>.
        Repeat <span className="controllerbutton">L2 + R2</span> if G1 does not respond correctly.
      </p>

      <h2 id="switching-off" className="text-2xl font-bold tracking-tight text-white mt-16 mb-4 border-b border-gray-700 pb-2 scroll-mt-[calc(4rem+1px)] mb-12">
        Switching Off
      </h2>
      <h3 className="text-lg font-semibold text-white mt-10 mb-2 scroll-mt-[calc(4rem+1px)]">
        Shutdown Process (Sitting)
      </h3>
      <ol className="pl-4 list-inside text-gray-300 text-sm leading-relaxed space-y-2 mb-12 list-decimal">
        <li>
          Control G1 to stand with its back to the chair. Hold shoulders, press <span className="controllerbutton">L1 + LEFT</span> and assist G1 to sit.
        </li>
        <li>
          Press <span className="controllerbutton">L1 + A</span> to enter damping mode.
        </li>
        <li>Press the extended battery power button to shut down.</li>
      </ol>
      <p className="text-gray-400 text-sm italic mt-2 mb-12">[Insert Image: Seated G1 shutdown]</p>

      <h3 className="text-lg font-semibold text-white mt-10 mb-2 scroll-mt-[calc(4rem+1px)]">
        Shutdown Process (Suspended)
      </h3>
      <ol className="pl-4 list-inside text-gray-300 text-sm leading-relaxed space-y-2 mb-12 list-decimal">
        <li>Reconnect the suspension rope and apply upward tension.</li>
        <li>
          Press <span className="controllerbutton">L1 + A</span> to enter damping mode.
        </li>
        <li>Press the battery button to shut down.</li>
        <li>
          Optionally enter debug mode with <span className="controllerbutton">L2 + R2</span> or press <span className="controllerbutton">L1 + UP</span> to re-enter ready mode.
        </li>
      </ol>
      <p className="text-gray-400 text-sm italic mt-2 mb-12">[Insert Image: Hanging G1 shutdown]</p>

      <h2 id="packing" className="text-2xl font-bold tracking-tight text-white mt-16 mb-4 border-b border-gray-700 pb-2 scroll-mt-[calc(4rem+1px)] mb-12">
        Packing
      </h2>
      <h3 className="text-lg font-semibold text-white mt-10 mb-2 scroll-mt-[calc(4rem+1px)]">
        Packing Steps from a Lying Position on the Ground
      </h3>
      <p className="mt-2 text-yellow-400 font-semibold">Caution: This process requires two persons for safe handling.</p>
      <ol className="pl-4 list-inside text-gray-300 text-sm leading-relaxed space-y-2 mb-12 list-decimal mt-2">
        <li>Lay the G1 flat on the ground, face down, with the head and chest against the surface. Ensure the robot is in correct orientation and fully powered off.</li>
        <li>Place the transport crate beside the robot, oriented for chest-down placement.</li>
        <li>Lift the robot by the legs and torso with assistance. Gently place it into the crate, maintaining a face-down position.</li>
        <li>Fold the arms inward across the back. Refer to the provided GIFs or diagrams for proper folding of the left and right arms.</li>
        <li>Fold the legs toward the torso so they rest compactly within the crate frame.</li>
        <li>Add protective foam around the head, limbs, and joints. Insert the R3 remote, charger, and accessories into the designated crate compartments.</li>
        <li>Place the square protective lining across the middle of the G1 to secure the limbs and internal components.</li>
        <li>Close and lock the transport crate securely before moving.</li>
      </ol>

      <h2 id="basic-operation" className="text-2xl font-bold tracking-tight text-white mt-16 mb-4 border-b border-gray-700 pb-2 scroll-mt-[calc(4rem+1px)] mb-12">
        Basic Operation
      </h2>
      <p className="text-gray-300 text-sm leading-relaxed mb-12">Below is a comprehensive controller input guide for operating the G1 robot.</p>

      <h3 className="text-lg font-semibold text-white mt-10 mb-2 scroll-mt-[calc(4rem+1px)]">
        Mode Switch Functions
      </h3>
      <table className="w-full text-sm border border-gray-700 text-left mt-2 mb-6">
        <thead className="bg-gray-800">
          <tr>
            <th className="border border-gray-700 px-4 py-2">Function</th>
            <th className="border border-gray-700 px-4 py-2">Input</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Debug mode", "Hold L2 + Click R2"],
            ["Zero torque mode", "Hold L2 + Click Y"],
            ["Damping mode (①)", "Hold L2 + Click B"],
            ["Lock stand (②)", "Hold L2 + Click UP"],
            ["Seated mode (④)", "Hold L2 + Click LEFT"],
            ["Lying and standing (⑤)", "Hold L2 + Click X"],
            ["Squat switch (⑥)", "Hold L2 + Click A"],
          ].map(([label, input], i) => (
            <tr key={label} className={i % 2 === 0 ? "bg-[#0a1a26]" : ""}>
              <td className="border border-gray-700 px-4 py-2">{label}</td>
              <td className="border border-gray-700 px-4 py-2"><span className="controllerbutton">{input}</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-lg font-semibold text-white mt-10 mb-2 scroll-mt-[calc(4rem+1px)]">
        Interactive Functions
      </h3>
      <table className="w-full text-sm border border-gray-700 text-left mt-2 mb-6">
        <thead className="bg-gray-800">
          <tr>
            <th className="border border-gray-700 px-4 py-2">Function</th>
            <th className="border border-gray-700 px-4 py-2">Input</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Wave Hand", "Hold SELECT + Click Y"],
            ["Handshake", "Hold SELECT + Click A"],
            ["Turn around and wave", "Hold SELECT + Click X"],
          ].map(([label, input], i) => (
            <tr key={label} className={i % 2 === 0 ? "bg-[#0a1a26]" : ""}>
              <td className="border border-gray-700 px-4 py-2">{label}</td>
              <td className="border border-gray-700 px-4 py-2"><span className="controllerbutton">{input}</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-lg font-semibold text-white mt-10 mb-2 scroll-mt-[calc(4rem+1px)]">
        Run Control (③)
      </h3>
      <table className="w-full text-sm border border-gray-700 text-left mt-2 mb-6">
        <thead className="bg-gray-800">
          <tr>
            <th className="border border-gray-700 px-4 py-2">Function</th>
            <th className="border border-gray-700 px-4 py-2">Input</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Slow Running", "R2 + DOWN"],
            ["Fast Running", "R2 + UP"],
            ["Forward Lean", "Hold START + Hold UP"],
            ["Backward Lean", "Hold START + Hold DOWN"],
          ].map(([label, input], i) => (
            <tr key={label} className={i % 2 === 0 ? "bg-[#0a1a26]" : ""}>
              <td className="border border-gray-700 px-4 py-2">{label}</td>
              <td className="border border-gray-700 px-4 py-2"><span className="controllerbutton">{input}</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Main Operate Control (⑦ R1 + X) and 3-DOF Waist Structure (⑧ R1 + Y) replaced by table below */}
      <h4 className="text-base font-semibold text-white mt-10 mb-2 scroll-mt-[calc(4rem+1px)]">
        Main Operate Control Modes
      </h4>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto border border-gray-700 text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2 border border-gray-700 text-left">Control Mode</th>
              <th className="px-4 py-2 border border-gray-700 text-left">Function</th>
              <th className="px-4 py-2 border border-gray-700 text-left">Input</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-900 text-gray-200">
              <td className="px-4 py-2 border border-gray-700" rowSpan={5}>⑦ R1 + X<br/>Main Operate Control</td>
              <td className="px-4 py-2 border border-gray-700">Keep Stepping (not recommended)</td>
              <td className="px-4 py-2 border border-gray-700"><span className="controllerbutton">Double-click START</span></td>
            </tr>
            <tr className="bg-gray-900 text-gray-200">
              <td className="px-4 py-2 border border-gray-700">Standing</td>
              <td className="px-4 py-2 border border-gray-700"><span className="controllerbutton">Double-click START</span></td>
            </tr>
            <tr className="bg-gray-900 text-gray-200">
              <td className="px-4 py-2 border border-gray-700">Low Speed Mode</td>
              <td className="px-4 py-2 border border-gray-700"><span className="controllerbutton">Double-click L2</span></td>
            </tr>
            <tr className="bg-gray-900 text-gray-200">
              <td className="px-4 py-2 border border-gray-700">High Speed Mode</td>
              <td className="px-4 py-2 border border-gray-700"><span className="controllerbutton">Double-click L1</span></td>
            </tr>
            <tr className="bg-gray-900 text-gray-200">
              <td className="px-4 py-2 border border-gray-700">Offset Compensation</td>
              <td className="px-4 py-2 border border-gray-700">
                Left: <span className="controllerbutton">Hold R1 + Click →</span><br/>
                Right: <span className="controllerbutton">Hold R1 + Click ←</span><br/>
                Forward: <span className="controllerbutton">Hold R1 + Click ↓</span><br/>
                Backward: <span className="controllerbutton">Hold R1 + Click ↑</span>
              </td>
            </tr>

            <tr className="bg-gray-900 text-gray-200">
              <td className="px-4 py-2 border border-gray-700" rowSpan={6}>⑧ R1 + Y<br/>3-DOF Waist Structure</td>
              <td className="px-4 py-2 border border-gray-700">Only applicable to 3-DOF waist robots</td>
              <td className="px-4 py-2 border border-gray-700">Recommended to use <span className="controllerbutton">R1 + Y</span></td>
            </tr>
            <tr className="bg-gray-900 text-gray-200">
              <td className="px-4 py-2 border border-gray-700">Keep Stepping (not recommended)</td>
              <td className="px-4 py-2 border border-gray-700"><span className="controllerbutton">Double-click START</span></td>
            </tr>
            <tr className="bg-gray-900 text-gray-200">
              <td className="px-4 py-2 border border-gray-700">Stand</td>
              <td className="px-4 py-2 border border-gray-700"><span className="controllerbutton">Double-click START</span></td>
            </tr>
            <tr className="bg-gray-900 text-gray-200">
              <td className="px-4 py-2 border border-gray-700">Low Speed Mode</td>
              <td className="px-4 py-2 border border-gray-700"><span className="controllerbutton">Double-click L2</span></td>
            </tr>
            <tr className="bg-gray-900 text-gray-200">
              <td className="px-4 py-2 border border-gray-700">High Speed Mode</td>
              <td className="px-4 py-2 border border-gray-700"><span className="controllerbutton">Double-click L1</span></td>
            </tr>
            <tr className="bg-gray-900 text-gray-200">
              <td className="px-4 py-2 border border-gray-700">Offset Compensation</td>
              <td className="px-4 py-2 border border-gray-700">
                Left: <span className="controllerbutton">Hold R1 + Click →</span><br/>
                Right: <span className="controllerbutton">Hold R1 + Click ←</span><br/>
                Forward: <span className="controllerbutton">Hold R1 + Click ↓</span><br/>
                Backward: <span className="controllerbutton">Hold R1 + Click ↑</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-white mt-10 mb-2 scroll-mt-[calc(4rem+1px)]">
        Suggested Boot Sequences
      </h3>
      {/* 
      <ul className="list-disc list-inside text-sm space-y-1">
        <li><strong>Regular:</strong> boot → ① → ② → ③ → demo → ④ (seated) → shutdown</li>
        <li><strong>Lying start:</strong> (ensure crotch post is flat on ground) → ① → ⑤ → demo → ⑥ → shutdown</li>
        <li><strong>Squatting:</strong> Boot (squatting) → ① → ⑥ → demo → ⑥ → shutdown</li>
      </ul>
      */}

      <h4 className="text-base font-semibold text-white mt-10 mb-2 scroll-mt-[calc(4rem+1px)]">
        Boot Sequences
      </h4>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto border border-gray-700 text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2 border border-gray-700 text-left">Boot Mode</th>
              <th className="px-4 py-2 border border-gray-700 text-left">Sequence</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-900 text-gray-200">
              <td className="px-4 py-2 border border-gray-700">Regular Boot</td>
              <td className="px-4 py-2 border border-gray-700">Boot → <span className="controllerbutton">①</span> → <span className="controllerbutton">②</span> → <span className="controllerbutton">③</span> → Demo → <span className="controllerbutton">④</span> (Chair Seat) → Turn Off</td>
            </tr>
            <tr className="bg-gray-900 text-gray-200">
              <td className="px-4 py-2 border border-gray-700">Lying Boot</td>
              <td className="px-4 py-2 border border-gray-700">Ensure flat surface → <span className="controllerbutton">①</span> → <span className="controllerbutton">⑤</span> → Demo → <span className="controllerbutton">⑥</span> → Turn Off</td>
            </tr>
            <tr className="bg-gray-900 text-gray-200">
              <td className="px-4 py-2 border border-gray-700">Squatting Boot</td>
              <td className="px-4 py-2 border border-gray-700">Boot (Squatting) → <span className="controllerbutton">①</span> → <span className="controllerbutton">⑥</span> → Demo → <span className="controllerbutton">⑥</span> → Turn Off</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-yellow-300 mt-4">
        Note: Lying or squatting start positions should only be used on hard, flat surfaces to prevent instability. Avoid use in unsuitable environments.
      </p>
      <p className="text-sm text-yellow-300 mt-1 mb-12">
        If equipped with a dexterous hand, avoid lying/squatting boot processes as impact may cause hardware damage.
      </p>



      <div className="fixed bottom-6 right-6 z-50">
          <a
            href="/g1-researchdevelopment"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            Next →
          </a>
        </div>



    </div>
  );
}