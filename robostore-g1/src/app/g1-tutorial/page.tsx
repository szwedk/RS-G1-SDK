"use client";

import Image from "next/image";
import { useState } from "react";

export default function G1TutorialPage() {
  // --- Joint Limits Table Data & Search State ---
  const [filter, setFilter] = useState("");
  const jointLimits = [
    [0, "L_LEG_HIP_PITCH", "-2.5307 ~ 2.8798"],
    [1, "L_LEG_HIP_ROLL", "-0.5236 ~ 2.9671"],
    [2, "L_LEG_HIP_YAW", "-2.7576 ~ 2.7576"],
    [3, "L_LEG_KNEE", "-0.087267 ~ 2.8798"],
    [4, "L_LEG_ANKLE_PITCH", "-0.87267 ~ 0.5236"],
    [5, "L_LEG_ANKLE_ROLL", "-0.2618 ~ 0.2618"],
    [6, "R_LEG_HIP_PITCH", "-2.5307 ~ 2.8798"],
    [7, "R_LEG_HIP_ROLL", "-2.9671 ~ 0.5236"],
    [8, "R_LEG_HIP_YAW", "-2.7576 ~ 2.7576"],
    [9, "R_LEG_KNEE", "-0.087267 ~ 2.8798"],
    [10, "R_LEG_ANKLE_PITCH", "-0.87267 ~ 0.5236"],
    [11, "R_LEG_ANKLE_ROLL", "-0.2618 ~ 0.2618"],
    [12, "WAIST_YAW", "-2.618 ~ 2.618"],
    [13, "WAIST_ROLL", "-0.52 ~ 0.52"],
    [14, "WAIST_PITCH", "-0.52 ~ 0.52"],
    [15, "L_SHOULDER_PITCH", "-3.0892 ~ 2.6704"],
    [16, "L_SHOULDER_ROLL", "-1.5882 ~ 2.2515"],
    [17, "L_SHOULDER_YAW", "-2.618 ~ 2.618"],
    [18, "L_ELBOW", "-1.0472 ~ 2.0944"],
    [19, "L_WRIST_ROLL", "-1.9722 ~ 1.9722"],
    [20, "L_WRIST_PITCH", "-1.6144 ~ 1.6144"],
    [21, "L_WRIST_YAW", "-1.6144 ~ 1.6144"],
    [22, "R_SHOULDER_PITCH", "-3.0892 ~ 2.6704"],
    [23, "R_SHOULDER_ROLL", "-2.2515 ~ 1.5882"],
    [24, "R_SHOULDER_YAW", "-2.618 ~ 2.618"],
    [25, "R_ELBOW", "-1.0472 ~ 2.0944"],
    [26, "R_WRIST_ROLL", "-1.9722 ~ 1.9722"],
    [27, "R_WRIST_PITCH", "-1.6144 ~ 1.6144"],
    [28, "R_WRIST_YAW", "-1.6144 ~ 1.6144"]
  ];
  return (
    <>
      <style jsx>{`
        .controller-button {
          display: inline-block;
          background-color: #1f2937; /* Tailwind's gray-800 */
          color: #facc15; /* Tailwind's yellow-400 */
          border: 1px solid #fbbf24; /* Tailwind's yellow-300 */
          border-radius: 6px;
          padding: 0.1em 0.4em;
          font-size: 0.85em;
          font-weight: 600;
          font-family: monospace;
          margin: 0 0.2em;
        }
      `}</style>
      <div className="px-6 py-10 text-white bg-[#040F16] min-h-screen">
      <h1 id="overview" className="text-2xl font-bold mb-4 scroll-mt-16">G1 Overview</h1>
      <video
        muted
        autoPlay
        loop
        playsInline
        className="w-full max-w-sm mx-auto rounded-xl shadow-lg mb-6 object-cover aspect-[9/16] p-2"
      >
        <source src="/video/G1_Waive_forSDKGuide.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2 id="tutorial" className="text-xl font-semibold mt-10 scroll-mt-16">Tutorial</h2>
      <div className="mt-4 space-y-6">
        <p>
          Welcome to the Unitree G1 tutorial. This guide will walk you through the setup,
          specifications, and basic operation of the Unitree G1 robotic platform.
        </p>

        <h3 className="text-lg font-semibold">Specifications</h3>
        <table className="min-w-full border border-gray-700 text-left text-sm">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 px-4 py-2">Parameter</th>
              <th className="border border-gray-700 px-4 py-2">Specification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#0a1a26]">
              <td className="border border-gray-700 px-4 py-2">Weight</td>
              <td className="border border-gray-700 px-4 py-2">13.5 kg</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2">Max Speed</td>
              <td className="border border-gray-700 px-4 py-2">3.3 m/s</td>
            </tr>
            <tr className="bg-[#0a1a26]">
              <td className="border border-gray-700 px-4 py-2">Battery Life</td>
              <td className="border border-gray-700 px-4 py-2">2 hours</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2">Payload Capacity</td>
              <td className="border border-gray-700 px-4 py-2">5 kg</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-lg font-semibold text-white mb-4">G1 EDU Model Variants</h3>
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <ul className="grid gap-3 mt-1 text-white sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <a
              href="https://robostore.com/products/unitree-g1-edu-standard-robotic-humanoid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="bg-[#1E293B] p-4 rounded hover:scale-[1.03] hover:bg-[#334155] transition-all duration-300 ease-in-out">
                <span className="font-bold text-blue-400">U1:</span> Entry-level programmable model with 40 TOPS of onboard AI computing power. Ideal for basic perception and control applications.
              </li>
            </a>
            <a
              href="https://robostore.com/products/unitree-g1-edu-plus-robotic-humanoid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="bg-[#1E293B] p-4 rounded hover:scale-[1.03] hover:bg-[#334155] transition-all duration-300 ease-in-out">
                <span className="font-bold text-blue-400">U2:</span> Expanded model with an integrated dock and 100 TOPS of compute power. Supports complex algorithms and real-time multi-sensor processing.
              </li>
            </a>
            <a
              href="https://robostore.com/products/unitree-g1-edu-ultimate-a-robotic-humanoid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="bg-[#1E293B] p-4 rounded hover:scale-[1.03] hover:bg-[#334155] transition-all duration-300 ease-in-out">
                <span className="font-bold text-blue-400">U3:</span> Enhanced mobility with a 3-DOF waist and upgraded 7-DOF arms on both sides. Designed for dynamic movement and full-range manipulation.
              </li>
            </a>
            <a
              href="https://robostore.com/products/unitree-g1-edu-ultimate-robotic-humanoid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="bg-[#1E293B] p-4 rounded hover:scale-[1.03] hover:bg-[#334155] transition-all duration-300 ease-in-out">
                <span className="font-bold text-blue-400">U4:</span> Flagship model equipped with dual Dex3-1 three-finger hands featuring force control and tactile sensing for precision grasping and manipulation.
              </li>
            </a>
          </ul>
        </div>
      </div>

      <h2 id="edu-overview" className="text-xl font-semibold mt-10 scroll-mt-16">G1 EDU Overview</h2>
      <div className="mt-2">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white space-y-4">
          <details className="group border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition">
            <summary className="cursor-pointer text-blue-400 font-semibold group-hover:text-yellow-400 transition">
              Advanced Educational Design
            </summary>
            <p className="mt-2 text-gray-300">
              The G1 EDU builds on the standard G1 with modular upgrade options tailored for universities, research labs, and technical development environments.
            </p>
          </details>
          <details className="group border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition">
            <summary className="cursor-pointer text-blue-400 font-semibold group-hover:text-yellow-400 transition">
              Enhanced Manipulation
            </summary>
            <p className="mt-2 text-gray-300">
              Optional 7-DOF dexterous hands and 2-DOF articulated wrists provide high-precision control for complex, human-like tasks.
            </p>
          </details>
          <details className="group border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition">
            <summary className="cursor-pointer text-blue-400 font-semibold group-hover:text-yellow-400 transition">
              Dynamic Mobility
            </summary>
            <p className="mt-2 text-gray-300">
              Upgradeable waist adds 2 degrees of freedom for expressive motion and adaptive posture in real-world settings.
            </p>
          </details>
          <details className="group border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition">
            <summary className="cursor-pointer text-blue-400 font-semibold group-hover:text-yellow-400 transition">
              Research-Grade Platform
            </summary>
            <p className="mt-2 text-gray-300">
              With up to 43 degrees of freedom, the G1 EDU supports HRI, machine learning, simulation, and advanced control development.
            </p>
          </details>
        </div>
        <div className="mt-4">
          <Image
            src="/media/g1_edu_component_overview-2.png"
            alt="G1 EDU Component Overview"
            width={1024}
            height={768}
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </div>

      <h2 id="three-fingered" className="text-xl font-semibold mt-10 scroll-mt-16">Three-Fingered Dexterous Hand</h2>
      <p className="mt-2">
        The G1’s three-fingered dexterous hand offers precise and responsive manipulation,
        engineered for advanced robotic tasks requiring tactile feedback and flexible control.
      </p>
      <p className="mt-2 text-blue-300">
        <a
          href="https://www.unitree.com/images/G1-Flagship%20Version%20A%26B%20Terminal%20Three-Fingered%20Dexterous%20Hand%20Dex3-1%20Disassembly%20and%20Assembly%20Guide%20Manual%20V1.1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          View Installation Guide (Dex3-1)
        </a>
      </p>

      <table className="mt-6 w-full text-sm border border-gray-700 text-left">
        <thead className="bg-gray-800">
          <tr>
            <th className="border border-gray-700 px-4 py-2">Parameter</th>
            <th className="border border-gray-700 px-4 py-2">Specification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#0a1a26]">
            <td className="border border-gray-700 px-4 py-2">Rendering Image</td>
            <td className="border border-gray-700 px-4 py-2">4</td>
          </tr>
          <tr>
            <td className="border border-gray-700 px-4 py-2">Operating Voltage</td>
            <td className="border border-gray-700 px-4 py-2">12–58 V</td>
          </tr>
          <tr className="bg-[#0a1a26]">
            <td className="border border-gray-700 px-4 py-2">Range of Perception</td>
            <td className="border border-gray-700 px-4 py-2">10 g – 2500 g</td>
          </tr>
          <tr>
            <td className="border border-gray-700 px-4 py-2">Degrees of Freedom</td>
            <td className="border border-gray-700 px-4 py-2">
              Total: 7<br />
              Thumb: 3 active DOF<br />
              Index Finger: 2 active DOF<br />
              Middle Finger: 2 active DOF
            </td>
          </tr>
          <tr className="bg-[#0a1a26]">
            <td className="border border-gray-700 px-4 py-2">Angle of Joint</td>
            <td className="border border-gray-700 px-4 py-2">
              Thumb: 0°–100°, -35°–60°, -60°–60°<br />
              Index & Middle Finger: 0°–90°, 0°–100°
            </td>
          </tr>
          <tr>
            <td className="border border-gray-700 px-4 py-2">Number of Array Sensors</td>
            <td className="border border-gray-700 px-4 py-2">9</td>
          </tr>
        </tbody>
      </table>

      <h2 id="five-fingered" className="text-xl font-semibold mt-10 scroll-mt-16">Five-Fingered Dexterous Hand</h2>
      <p className="mt-2">
        The RH56 series Inspire robotic hands, including the RH56BFX and RH56DFX models, are designed to integrate seamlessly with the G1 humanoid robot.
        Utilizing the RS485 communication interface, they are compatible with platforms such as ROS and provide advanced manipulation capabilities
        for precise and adaptable robotic applications.
      </p>
      <p className="mt-2 text-blue-300">
        <a
          href="https://en.inspire-robots.com/wp-content/uploads/2024/02/INSPIRE-ROBOTS-THE-DEXTEROUS-HANDS-INSTRUCTIONS.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          View Installation Guide (RH56 Series)
        </a>
      </p>

      <table className="mt-6 w-full text-sm border border-gray-700 text-left">
        <thead className="bg-gray-800">
          <tr>
            <th className="border border-gray-700 px-4 py-2">Parameter</th>
            <th className="border border-gray-700 px-4 py-2">RH56BFX Specification</th>
            <th className="border border-gray-700 px-4 py-2">RH56DFX Specification</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Control Interface", "RS485", "RS485"],
            ["Degrees of Freedom", "6", "6"],
            ["Number of Joints", "12", "12"],
            ["Weight", "540g", "540g"],
            ["Operating Voltage", "DC24V±10%", "DC24V±10%"],
            ["Quiescent Current", "0.20A", "0.20A"],
            ["Peak Current", "2A", "2A"],
            ["Repeatability", "±0.20mm", "±0.20mm"],
            ["Maximum Thumb Grip", "6N", "15N"],
            ["Maximum Palm Finger Grip", "4N", "10N"],
            ["Force Resolution", "0.50N", "0.50N"],
            ["Thumb Lateral Rotation Range", "&gt; 65°", "&gt; 65°"],
            ["Thumb Lateral Rotation Speed", "235°/s", "107°/s"],
            ["Thumb Bend Speed", "150°/s", "70°/s"],
            ["Palm Finger Bend Speed", "570°/s", "260°/s"],
          ].map(([param, bfx, dfx], i) => (
            <tr key={param} className={i % 2 === 0 ? "bg-[#0a1a26]" : ""}>
              <td className="border border-gray-700 px-4 py-2" dangerouslySetInnerHTML={{ __html: param }} />
              <td className="border border-gray-700 px-4 py-2">{bfx}</td>
              <td className="border border-gray-700 px-4 py-2">{dfx}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 id="radar-camera-fov" className="text-xl font-semibold mt-10 scroll-mt-16">Radar & Camera FOV</h2>
      <p>Placeholder content for Radar & Camera FOV section.</p>

      <h2 id="installation-holes" className="text-xl font-semibold mt-10 scroll-mt-16">G1 Installation Hole Layout</h2>
      <p className="mt-2 font-semibold">Measurement Unit: mm</p>
      <p className="mt-2">
        Before installation, be sure to peel back the protective label covering the mounting hole slots.
        This ensures full access for hardware attachments or fixture mounts.
      </p>

      <h2 id="electrical-interface" className="text-xl font-semibold mt-10 scroll-mt-16">G1 Rear Interface Panel</h2>
      <p className="mt-2">
        Located on the back of the G1's upper chassis is a multi-functional interface panel,
        designed to streamline sensor integration, motor connectivity, network setup, and expansion.
      </p>
      {/* Inserted image for G1 interface panel */}
      <img
        src="/installation/g1_interface.jpg"
        alt="G1 interface panel"
        className="w-full mt-4 rounded border border-gray-700"
      />
      

      <h3 className="text-lg font-semibold mt-6">Connector Overview</h3>
      <table className="mt-4 w-full text-sm border border-gray-700 text-left">
        <thead className="bg-gray-800">
          <tr>
            <th className="border border-gray-700 px-4 py-2">No</th>
            <th className="border border-gray-700 px-4 py-2">Connector Name</th>
            <th className="border border-gray-700 px-4 py-2">Interface Description</th>
            <th className="border border-gray-700 px-4 py-2">Specification</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["1", "XT30UPB-F", "VBAT", "Battery power output (direct)"],
            ["2", "XT30UPB-F", "24V", "24V/5A power output"],
            ["3", "XT30UPB-F", "12V", "12V/5A power output"],
            ["4", "RJ45", "1000 BASE-T", "Gigabit Ethernet"],
            ["5", "RJ45", "1000 BASE-T", "Gigabit Ethernet"],
            ["6", "Type-C", "USB Host", "USB3.0 host, 5V/1.5A"],
            ["7", "Type-C", "USB Host", "USB3.0 host, 5V/1.5A"],
            ["8", "Type-C", "USB Host", "USB3.0 host, 5V/1.5A"],
            ["9", "Type-C", "Alt Mode", "USB3.2 host and DP1.4"],
            ["10", "5577", "I/O OUT", "12V/3A power output"],
          ].map(([no, name, desc, spec], i) => (
            <tr key={no} className={i % 2 === 0 ? "bg-[#0a1a26]" : ""}>
              <td className="border border-gray-700 px-4 py-2">{no}</td>
              <td className="border border-gray-700 px-4 py-2">{name}</td>
              <td className="border border-gray-700 px-4 py-2">{desc}</td>
              <td className="border border-gray-700 px-4 py-2">{spec}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 id="electrical-interface" className="text-xl font-semibold mt-10 scroll-mt-16">G1 GPIO Configuration</h2>
      <p className="mt-2">
        The G1 includes GPIO access via RJ45, offering developers flexibility in peripheral control and expansion. Below is the pinout mapping for reference.
      </p>

      <img
        src="/installation/g1_gpio_interface.jpg"
        alt="G1 GPIO interface"
        className="w-full mt-4 rounded border border-gray-700"
      />
      
      <figcaption className="text-sm text-gray-400 mb-4">G1 RJ45 and the IO Interface</figcaption>

      <table className="mt-4 w-full text-sm border border-gray-700 text-left">
        <thead className="bg-gray-800">
          <tr>
            <th className="border border-gray-700 px-4 py-2">GPIO Number</th>
            <th className="border border-gray-700 px-4 py-2">NX Pin Number</th>
            <th className="border border-gray-700 px-4 py-2">Multiplexing</th>
            <th className="border border-gray-700 px-4 py-2">Debugfs Pin Name</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["GPIO1", "203", "UART1_TXD", "GPIO3_PR.02"],
            ["GPIO2", "205", "UART1_RXD", "GPIO3_PR.03"],
            ["GPIO3", "232", "I2C2_SCL", "GPIO3_PI.03"],
            ["GPIO4", "234", "I2C2_SDA", "GPIO3_PI.04"],
            ["GPIO5", "128", "GPIO", "GPIO3_PCC.02"],
            ["GPIO6", "130", "GPIO", "GPIO3_PCC.03"],
          ].map(([gpio, nx, mux, dbg], i) => (
            <tr key={gpio} className={i % 2 === 0 ? "bg-[#0a1a26]" : ""}>
              <td className="border border-gray-700 px-4 py-2">{gpio}</td>
              <td className="border border-gray-700 px-4 py-2">{nx}</td>
              <td className="border border-gray-700 px-4 py-2">{mux}</td>
              <td className="border border-gray-700 px-4 py-2">{dbg}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-4 text-sm">
        <strong>Tip:</strong> Jetson GPIO functionality can be customized through various methods. Consult the{" "}
        <a href="https://docs.nvidia.com/jetson/archives/r35.2.1/DeveloperGuide/text/HR/JetsonModuleAdaptationAndBringUp/JetsonOrinNxSeries.html#identifying-the-gpio-number" target="_blank" className="underline text-blue-400">
          NVIDIA Jetson Developer Guide
        </a>{" "}
        for advanced configuration steps and definitions.
      </p>

      <h2 id="on-board-computer" className="text-xl font-semibold mt-10 scroll-mt-16">On-Board Computer</h2>
      <h4 className="text-lg font-bold mt-8 mb-4 scroll-mt-16">Development Computing Unit (PC 2)</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          ["Model", "Jetson Orin NX"],
          ["CPU", "Arm® Cortex®-A78AE"],
          ["Cores / Threads", "8 Cores / 8 Threads"],
          ["Max Clock Speed", "2 GHz"],
          ["Graphics Memory", "16 GB"],
          ["Total Memory", "16 GB"],
          ["Cache", "2 MB L2 + 4 MB L3"],
          ["Storage", "2 TB"],
          ["Intel® IPU", "Not Present"],
          ["GPU", "1024 NVIDIA Ampere Architecture GPUs with 32 Tensor Cores"],
          ["Max GPU Frequency", "918 MHz"],
          ["GNA", "3.0"],
          ["DL Boost", "Yes"],
          ["Adaptix™", "Yes"],
          ["Hyper-Threading", "Yes"],
          ["Instruction Set", "64-bit"],
          ["OpenGL", "4.6"],
          ["OpenCL", "3.0"],
          ["DirectX", "12.1"],
          ["IP Address", "192.168.123.164"]
        ].map(([label, value]) => (
          <div
            key={label}
            className="bg-[#10161B]/60 backdrop-blur-sm border border-gray-700 rounded p-4 shadow-sm transform transition-all duration-300 ease-out hover:bg-[#DB9D47]/10 hover:backdrop-blur-md hover:shadow-lg hover:scale-[1.02]"
          >
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{label}</p>
            <p className="text-sm text-white">{value}</p>
          </div>
        ))}
      </div>


         {/* Joint Serial Number and Limits Table with Search */}
      <h2 id="joint-motor" className="text-xl font-semibold mt-10 scroll-mt-16">Joint Motor</h2>
      <p>Joint Serial Number and Limits</p>
     
     
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search joints..."
          onChange={(e) => setFilter(e.target.value)}
          className="mb-4 w-full px-3 py-2 rounded border border-gray-700 bg-[#0f1419] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DB9D47]"
        />
        <table className="min-w-full border border-gray-700 text-left text-sm">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 px-3 py-2">Index</th>
              <th className="border border-gray-700 px-3 py-2">Joint Name</th>
              <th className="border border-gray-700 px-3 py-2">Limit (rad)</th>
            </tr>
          </thead>
          <tbody>
            {jointLimits
              .filter(
                ([, name]) =>
                  (typeof name === "string" && name.toLowerCase().includes(filter.toLowerCase())) ||
                  filter === ""
              )
              .map(([index, name, limit]) => (
                <tr key={index} className="border-t border-gray-700">
                  <td className="py-2 px-3">{index}</td>
                  <td className="py-2 px-3">{name}</td>
                  <td className="py-2 px-3">{limit}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>


      
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="/g1-operation"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            Next →
          </a>
        </div>
      </div> {/* close main page container */}
      
      </>
  );
}