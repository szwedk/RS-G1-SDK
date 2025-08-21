"use client";

import Image from "next/image";
import { useState } from "react";


export default function G1ResearchDevelop() {
    return (
      
        <><h2 id="quick-start" className="text-xl font-semibold mt-10 scroll-mt-16">Quick Start</h2><div className="mt-6 px-6 md:px-3">
            <h3 className="text-lg font-semibold mb-4 scroll-mt-16">Quick Start Video Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    {
                        title: "Powering On the G1",
                        src: "/movies/turning-on-your-g1 copy.mp4",
                        desc: "How to properly start up your G1 EDU from a powered off state."
                    },
                    {
                        title: "Pairing the Remote",
                        src: "/movies/Remote Binding copy.mp4",
                        desc: "Step-by-step guide to binding the R3 controller with your G1."
                    },
                    {
                        title: "Connecting to G1",
                        src: "/movies/connecting to g1 copy.mp4",
                        desc: "Instructions to establish a network connection with your robot."
                    },
                    {
                        title: "Using Debug Mode",
                        src: "/movies/Debug Mode copy.mp4",
                        desc: "How to enter debug mode for diagnostics and advanced setup."
                    },
                    {
                        title: "Unbinding the Remote",
                        src: "/movies/Unbinding your G1 copy.mp4",
                        desc: "Remove an existing remote controller from your G1."
                    },
                    {
                        title: "Packing Your G1",
                        src: "/movies/Packing your G1 copy.mp4",
                        desc: "Instructions on how to safely pack and transport your G1 robot after use."
                    },
                    {
                        title: "Updating Your G1",
                        src: "/movies/Updating your G1 copy.mp4",
                        desc: "A walkthrough for updating your G1's software to the latest version."
                      }
                      
                ].map((video, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 dark:bg-neutral-800 rounded-xl shadow p-4 transition-transform duration-300 ease-in-out hover:scale-105  group"
                    >
                        <h4 className="text-md font-semibold mb-2">{video.title}</h4>
                        <div className="transform transition duration-300 ">
                            <video
                                controls
                                className="w-full rounded-md mb-2"
                            >
                                <source src={video.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <p className="text-sm text-gray-500">{video.desc}</p>
                    </div>
                ))}
            </div>
        </div><p>Network connection video </p><p>Posture and movement video </p><p>Motor calibration(23-dof) video </p><p>Motor calibration(29-dof) video </p><p> </p><p> </p><p> </p><h2 id="jetson-orin-nx" className="text-xl font-semibold mt-10 scroll-mt-16">Jetson Orin Nx</h2><div className="mt-4 space-y-6 text-sm">
                <h3 className="text-lg font-semibold scroll-mt-16">WiFi Configuration Methods</h3>

                <h4 className="text-base font-semibold scroll-mt-16">AP Mode (Access Point)</h4>
                <p>To set up AP mode using <code>create_ap</code>:</p>
                <div className="relative bg-[#112233] border-l-4 border-[#DB9D47] p-4 rounded">
                    <button
                        onClick={() => navigator.clipboard.writeText(`git clone https://github.com/oblique/create_ap
cd ./create_ap/
make install
sudo apt install -y hostapd dnsmasq network-manager
create_ap wlan0 eth0 MyAccessPoint`)}
                        className="absolute top-2 right-2 text-xs bg-[#DB9D47] text-black px-2 py-1 rounded hover:bg-[#c78e3f]"
                    >
                        Copy
                    </button>
                    <pre className="text-wrap-scroll">
                        <code>
                            {`git clone https://github.com/oblique/create_ap
cd ./create_ap/
make install
sudo apt install -y hostapd dnsmasq network-manager
create_ap wlan0 eth0 MyAccessPoint`}
                        </code>
                    </pre>
                </div>
                <p>
                    For additional instructions, see{" "}
                    <a href="https://gitcode.com/gh_mirrors/cr/create_ap/overview" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
                        create_ap documentation
                    </a>.
                </p>

                <h4 className="text-base font-semibold scroll-mt-16">STA Mode (Client WiFi)</h4>
                <p>Use <code>wpa_cli</code> to connect to a WiFi network:</p>
                <div className="relative bg-[#112233] border-l-4 border-[#DB9D47] p-4 rounded">
                    <button
                        onClick={() => navigator.clipboard.writeText(`wpa_cli
add_network
set_network 1 ssid "your wifi name"
set_network 1 psk "your wifi key"
enable_network 1
save_config
status
quit`)}
                        className="absolute top-2 right-2 text-xs bg-[#DB9D47] text-black px-2 py-1 rounded hover:bg-[#c78e3f]"
                    >
                        Copy
                    </button>
                    <pre className="text-xs overflow-auto whitespace-pre-wrap">
                        <code>
                            {`wpa_cli
add_network
set_network 1 ssid "your wifi name"
set_network 1 psk "your wifi key"
enable_network 1
save_config
status
quit`}
                        </code>
                    </pre>
                </div>

                <p>If <code>wpa_cli</code> is not available, use <code>nmcli</code>:</p>
                <div className="relative bg-[#112233] border-l-4 border-[#DB9D47] p-4 rounded">
                    <button
                        onClick={() => navigator.clipboard.writeText(`sudo ifconfig wlan0 up
sudo nmcli radio wifi on
nmcli radio wifi
nmcli device wifi connect <SSID> password <password>`)}
                        className="absolute top-2 right-2 text-xs bg-[#DB9D47] text-black px-2 py-1 rounded hover:bg-[#c78e3f]"
                    >
                        Copy
                    </button>
                    <pre className="text-xs overflow-auto whitespace-pre-wrap">
                        <code>
                            {`sudo ifconfig wlan0 up
sudo nmcli radio wifi on
nmcli radio wifi
nmcli device wifi connect <SSID> password <password>`}
                        </code>
                    </pre>
                </div>

                <h3 className="text-lg font-semibold scroll-mt-16">Firmware Update Issues</h3>
                <p>
                    After updating to firmware version ≥1.3.0, some users report joint limit and over-voltage errors. This is due to improved joint calibration requirements. Re-calibration is required using the video tutorial. Ensure the waist fixer is engaged and the lock switch is disabled on the app.
                </p>

                <h3 className="text-lg font-semibold scroll-mt-16">WiFi Configuration Failures</h3>
                <p>
                    WiFi failures during setup may result from high-interference environments like exhibitions. Try configuring the device in a less congested area.
                </p>

                <h3 className="text-lg font-semibold scroll-mt-16">G1-29 DOF Calibration</h3>
                <p>
                    If the waist joint reports an out-of-limit error after disabling the waist fixator, it means the motors are not calibrated. Re-calibrate using the official guide with the waist fixer applied.
                </p>

                <h3 className="text-lg font-semibold scroll-mt-16">Jetson Orin NX System Recovery</h3>
                <p>To restore the system using the factory image:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Download: <a href="https://onedrive.live.com/?authkey=%21AFt1M797YTAE7wo&id=CDE1BA91EFBCF992%215603&cid=CDE1BA91EFBCF992" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">NX Factory Image</a></li>
                    <li>Image file: <code>nx.img.bz2</code></li>
                    <li>Burn with:</li>
                </ul>
                <div className="relative bg-[#112233] border-l-4 border-[#DB9D47] p-4 rounded">
                    <button
                        onClick={() => navigator.clipboard.writeText("bzip2 -dc nx.img.bz2 | sudo dd of=/dev/sdc status=progress")}
                        className="absolute top-2 right-2 text-xs bg-[#DB9D47] text-black px-2 py-1 rounded hover:bg-[#c78e3f]"
                    >
                        Copy
                    </button>
                    <pre className="text-xs overflow-auto whitespace-pre-wrap">
                        <code>bzip2 -dc nx.img.bz2 | sudo dd of=/dev/sdc status=progress</code>
                    </pre>
                </div>
                <p>After restoring, replace the DTB file:</p>
                <div className="relative bg-[#112233] border-l-4 border-[#DB9D47] p-4 rounded">
                    <button
                        onClick={() => navigator.clipboard.writeText("cp kernel_tegra234-p3767-0000-p3768-0000-a0.dtb /boot/dtb/ -r")}
                        className="absolute top-2 right-2 text-xs bg-[#DB9D47] text-black px-2 py-1 rounded hover:bg-[#c78e3f]"
                    >
                        Copy
                    </button>
                    <pre className="text-xs overflow-auto whitespace-pre-wrap">
                        <code>cp kernel_tegra234-p3767-0000-p3768-0000-a0.dtb /boot/dtb/ -r</code>
                    </pre>
                </div>
                <p>Then restart the device.</p>

                <h3 className="text-lg font-semibold scroll-mt-16">NX Patch Installation for Depth Camera Preview</h3>
                <ul className="list-decimal list-inside space-y-1">
                    <li>Transfer patch: <code>scp ./g1plus_pc4_unitree_install.zip unitree@192.168.123.164:~/</code></li>
                    <li>SSH: <code>ssh unitree@192.168.123.164</code></li>
                    <li>Elevate privileges: <code>sudo su root</code></li>
                    <li>Unzip and install:</li>
                </ul>
                <div className="relative bg-[#112233] border-l-4 border-[#DB9D47] p-4 rounded">
                    <button
                        onClick={() => navigator.clipboard.writeText(`unzip g1plus_pc4_unitree_install.zip
cd /home/unitree/g1plus_pc4_unitree_install/
rm /unitree/ -rf
./install`)}
                        className="absolute top-2 right-2 text-xs bg-[#DB9D47] text-black px-2 py-1 rounded hover:bg-[#c78e3f]"
                    >
                        Copy
                    </button>
                    <pre className="text-xs overflow-auto whitespace-pre-wrap">
                        <code>
                            {`unzip g1plus_pc4_unitree_install.zip
cd /home/unitree/g1plus_pc4_unitree_install/
rm /unitree/ -rf
./install`}
                        </code>
                    </pre>
                </div>
                <p>Verify with:</p>
                <div className="relative bg-[#112233] border-l-4 border-[#DB9D47] p-4 rounded">
                    <button
                        onClick={() => navigator.clipboard.writeText('ps -ef | grep "master_service" | grep -v grep')}
                        className="absolute top-2 right-2 text-xs bg-[#DB9D47] text-black px-2 py-1 rounded hover:bg-[#c78e3f]"
                    >
                        Copy
                    </button>
                    <pre className="text-xs overflow-auto whitespace-pre-wrap">
                        <code>ps -ef | grep "master_service" | grep -v grep</code>
                    </pre>
                </div>
                <p>After installation, contact technical support for PC4 updates, then restart the device.</p>



                <div className="fixed bottom-6 right-6 z-50">
          <a
            href="/g1-gettinghelp"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            Next →
          </a>
        </div>



            </div></>

);
}