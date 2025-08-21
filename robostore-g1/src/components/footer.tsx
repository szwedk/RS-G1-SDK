// Footer component for robostore-g1


export default function Footer() {
  return (
    <footer className=" text-white py-10 px-6 pd-6 rounded-lg">
      <div className="max-w-5xl mx-auto">
        <div className="mt-4 text-center">
          <a
            href="/g1-inquiries"
            className="inline-block bg-[#DB9D47] text-[#040F16] font-semibold rounded px-4 py-2 text-sm transition hover:scale-105"
          >
            Speak to an Expert
          </a>
        </div>
        <div className="w-full text-sm text-center py-4 px-4 border-t border-gray-200 dark:border-gray-800 mt-6 whitespace-normal break-words overflow-visible">
          &copy; 2025 Robostore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}