"use client";

import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white text-black dark:bg-[#121212] dark:text-white">
      <div className="flex-1 grid grid-rows-[auto_1fr_auto] w-full ml-0 overflow-hidden">
        <header className="w-full px-8 py-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">

          </div>    
        </header>

        <main className="flex flex-col items-center justify-center p-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to the Unitree G1 SDK Documentation</h1>
          <p className="text-base sm:text-lg max-w-2xl text-gray-700 dark:text-gray-300 mb-6">
            Get started with setup, integration, operation, and advanced development for the G1 humanoid robot. Use the sidebar or links below to jump directly into a section.
          </p>
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-4 flex-wrap justify-center">
              <Link
                href="/g1-3Dmodel"
                className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-full text-sm transition transform hover:scale-105 hover:animate-pulse"
              >
                3D Model
              </Link>
              <Link
                href="/g1-sandbox"
                className="border border-gray-300 dark:border-white/20 px-5 py-2 rounded-full text-sm transition transform hover:scale-105 hover:animate-pulse"
              >
                G1 Sandbox
              </Link>
              {/* <Link
                href="/g1-test"
                className="border border-gray-300 dark:border-white/20 px-5 py-2 rounded-full text-sm transition transform hover:scale-105 hover:animate-pulse"
              >
                Placeholder
              </Link> */}
            </div> 
            <div className="flex gap-4 flex-wrap justify-center mt-4">
              <Link
                href="/g1-operation"
                className="border border-gray-300 dark:border-white/20 px-5 py-2 rounded-full text-sm transition transform hover:scale-105 hover:animate-pulse"
              >
                Operation
              </Link>
              <Link
                href="/g1-researchdevelopment"
                className="border border-gray-300 dark:border-white/20 px-5 py-2 rounded-full text-sm transition transform hover:scale-105 hover:animate-pulse"
              >
                R&amp;D
              </Link>
              <Link
                href="/g1-gettinghelp"
                className="border border-gray-300 dark:border-white/20 px-5 py-2 rounded-full text-sm transition transform hover:scale-105 hover:animate-pulse"
              >
                Getting Help
              </Link>
            </div>
          </div>
          
        </main>
        <Footer />
      </div>
    </div>
  );
}
