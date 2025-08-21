'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const FacialRecognitionDemo = dynamic(() => import('@/components/ai/FacialRecognitionDemo'), { ssr: false })
const G1FeedbackSimulator = dynamic(() => import('@/components/ai/G1FeedbackSimulator'), { ssr: false })

export default function G1SandboxPage() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-black text-white min-h-500px">
      <section className="border border-gray-700 rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Facial Recognition</h2>
        <FacialRecognitionDemo />
      </section>
      
      <section className="border border-gray-700 rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">G1 Feedback Simulation</h2>
        <G1FeedbackSimulator />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-full">
        <div className="border border-gray-700 rounded-lg p-4 bg-gray-800 text-sm text-white font-mono whitespace-pre-wrap">
          {`FacialRecognitionDemo.tsx

This component uses real-time facial recognition to detect and track users via webcam input.
It demonstrates how G1 robots can leverage computer vision to enhance user awareness and
adapt to environmental context. Use cases include:

1. Face detection for tracking user presence and motion.
2. Head orientation for determining attention or focus.
3. Identity recognition for authentication or personalization.

The component is structured to run fully in-browser and can be extended to:
- Trigger events when faces are detected or lost
- Integrate with emotion analysis or demographic classification
- Serve as a testbed for vision models later deployed on G1 hardware`}
        </div>

        <div className="border border-gray-700 rounded-lg p-4 bg-gray-800 text-sm text-white font-mono whitespace-pre-wrap">
          {`G1FeedbackSimulator.tsx

This component is a mock visualization layer designed to simulate real-time AI feedback
from the G1 SDK or connected vision modules. It allows frontend developers and product
designers to:

1. Develop and test the UI without needing the physical G1 robot online.
2. Validate layout, animations, and confidence visualizations using static inference states.
3. Easily swap the mock logic with real inference data from:
   - WebSocket streams
   - ROS Bridge topics (e.g., /g1/inference)
   - Local SDK wrappers around go2_sdk or AI vision outputs

This mock tool can be replaced or extended by:
- Listening to webcam-based gesture detection
- Connecting to a backend that returns inference data in real time
- Using React Context or props to synchronize AI feedback across components

Example next steps:
- Replace setIndex() with WebSocket or ROS-based event listeners
- Pull real gesture classification from HandGestureDemo.tsx
- Use this layout as the foundation for a live G1 mission dashboard`}
        </div>
      </div>
    </main>
  )
}
