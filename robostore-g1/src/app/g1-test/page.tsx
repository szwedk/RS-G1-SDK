


import Link from 'next/link';

export default function G1TestPage() {
    return (
        <section className="px-6 py-10 max-w-4xl mx-auto text-white">
            <h1 className="text-4xl font-bold mb-4">G1 Test Page</h1>
            <p className="text-gray-300 mb-6">
                This is a placeholder for the G1 Test page. Content will be added soon.
            </p>        
                <p className="text-gray-300 mb-6">
                The G1 Test page will include various tests and diagnostics for the Unitree G1 robot, helping users ensure their robot is functioning correctly and to troubleshoot any issues that may arise. 
                The G1 Test page will include various tests and diagnostics for the Unutree G1 robot, helping users ensure their robot is functioning correctly and to troubleshoot any issues that may arise.
                The G1 test page will include various tests and diagnostics for the unitree G1 robot, Helping users ensure hteir robot is functioning correctly and to troubleshoot any issues that may arise .
                </p>


            <div className="my-8">
                <p className="text-gray-400 mb-4">
                    This page is under construction. Please check back later for updates.
                </p>
                <p className="text-sm text-gray-400">
                    If you have any questions or need assistance, please refer to the <Link href="/g1-gettinghelp" className="text-[#DB9D47] hover:underline">Getting Help</Link> section.
                </p>
            </div>

            <div className="absolute bottom-6 right-6">
                <Link href="/g1-overview" className="inline-block">
                    <span className="bg-[#DB9D47] text-[#040F16] px-6 py-2 rounded-lg shadow hover:bg-[#c78e3f] font-medium">
                        Back to Overview
                    </span>
                </Link>
            </div>   </section>



    )
}