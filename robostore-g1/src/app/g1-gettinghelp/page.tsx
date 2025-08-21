"use client";

import Image from "next/image";
import { useState } from "react";


export default function G1gettinghelp() {
  return (
    <>
      {/* <h2 id="rma-support" className="text-xl font-semibold mt-10 scroll-mt-16">RMA & Support</h2>
      <p>Placeholder content for RMA & Support section.</p> */}

      <h2 id="help-resources" className="text-xl font-semibold mt-10 scroll-mt-16">Help Resources</h2>
      <div className="mt-4 space-y-6 text-sm">
        <h3 className="text-lg font-semibold scroll-mt-16">Common Mistakes and Definitions</h3>
        <p>Below are common sources of failure along with their corresponding error codes and definitions for the Unitree G1 system:</p>

        <h4 className="text-base font-semibold mt-4 scroll-mt-16">Total Device Status Information</h4>
        <table className="min-w-full border border-gray-700 text-left text-xs">
          <thead className="bg-gray-800">
            <tr>
              <th className="border border-gray-700 px-3 py-1">Source</th>
              <th className="border border-gray-700 px-3 py-1">Error Code</th>
              <th className="border border-gray-700 px-3 py-1">Definition</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Upper control", "0x1", "Upper control command error"],
              ["Lower feedback", "0x2", "Lower layer feedback data timeout"],
              ["IMU", "0x4", "IMU feedback data timeout"],
              ["Motor", "0x8", "Motor feedback data timeout"],
              ["Battery", "0x10", "Battery feedback data timeout"],
              ["Remote", "0x20", "Yushu entity remote control feedback data timeout"],
              ["Battery model", "0x40", "Battery model error"],
              ["Soft-start", "0x80", "Soft-start error"],
              ["Motor state", "0x100", "Motor state error"],
              ["Low limit", "0x200", "Motor overcurrent protection, trigger low limit"],
              ["High limit UV", "0x400", "Motor undervoltage protection, trigger high limit"],
              ["High limit OC", "0x800", "Motor overcurrent protection, trigger high limit"],
              ["Emergency stop", "0x1000", "Soft emergency stop switch is pressed"],
              ["SN", "0x2000", "SN error"],
              ["Upper model", "0x4000", "Upper model error"],
              ["Lower model", "0x8000", "Lower model error"],
              ["USB", "0x10000", "USB device error"],
              ["Crotch IMU", "0x40000", "Crotch IMU data timeout"],
              ["Battery undervolt", "0x80000", "Battery undervoltage protection (MB)"],
              ["Motor undervolt", "0x100000", "Motor undervoltage protection (MB)"],
            ].map(([source, code, def], i) => (
              <tr key={code} className={i % 2 === 0 ? "bg-[#0a1a26]" : ""}>
                <td className="border border-gray-700 px-3 py-1">{source}</td>
                <td className="border border-gray-700 px-3 py-1">{code}</td>
                <td className="border border-gray-700 px-3 py-1">{def}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h4 className="text-base font-semibold mt-6 scroll-mt-16">Motor Status Information</h4>
        <table className="min-w-full border border-gray-700 text-left text-xs">
          <thead className="bg-gray-800">
            <tr>
              <th className="border border-gray-700 px-3 py-1">Error Code</th>
              <th className="border border-gray-700 px-3 py-1">Definition</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["0x1", "Overcurrent"],
              ["0x2", "Transient overvoltage"],
              ["0x4", "Sustained overpressure"],
              ["0x8", "Transient undervoltage"],
              ["0x10", "Chip overheating"],
              ["0x20", "MOS overheating/cooling"],
              ["0x40", "MOS temperature anomaly"],
              ["0x80", "Shell overheat/undercooling"],
              ["0x100", "Shell temperature anomaly"],
              ["0x200", "Winding overheating"],
              ["0x400", "Rotor encoder 1 error"],
              ["0x800", "Rotor encoder 2 error"],
              ["0x1000", "Output encoder error"],
              ["0x2000", "Calibration /BOOT data error"],
              ["0x4000", "Abnormal reset"],
              ["0x8000", "Motor locked, master authentication error"],
              ["0x10000", "Chip validation error"],
              ["0x20000", "Calibration mode warning"],
              ["0x40000", "Communication verification error"],
              ["0x80000", "Driver version too low"],
              ["0x40000000", "Motor determines PC connection timeout"],
              ["0x80000000", "PC interpretation, motor disconnection timeout"],
            ].map(([code, def], i) => (
              <tr key={code} className={i % 2 === 0 ? "bg-[#0a1a26]" : ""}>
                <td className="border border-gray-700 px-3 py-1">{code}</td>
                <td className="border border-gray-700 px-3 py-1">{def}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     {/* } <h2 id="getting-involved" className="text-xl font-semibold mt-10 scroll-mt-16">Getting Involved</h2>
      <p>Placeholder content for Getting Involved section.</p> */}

      <h2 id="faq" className="text-xl font-semibold mt-10 scroll-mt-16">FAQ</h2>
      <p>Placeholder content for FAQ section.</p>

      <div className="fixed bottom-6 right-6 z-50">
          <a
            href="/
            "
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            Home →
          </a>
        </div>



    </>
  );
}