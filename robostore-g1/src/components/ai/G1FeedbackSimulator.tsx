'use client'

import React, { useEffect, useState } from 'react'

const mockInferences = [
  { action: 'Standing Idle', confidence: 0.94 },
  { action: 'Walking Forward', confidence: 0.87 },
  { action: 'Balancing', confidence: 0.76 },
  { action: 'Gesture Detected: Wave', confidence: 0.92 },
  { action: 'Vision Target Locked', confidence: 0.89 },
  { action: 'Manipulation Mode: Reach', confidence: 0.84 },
  { action: 'Knee Actuation Calibration', confidence: 0.78 },
]

export default function G1FeedbackSimulator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % mockInferences.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const { action, confidence } = mockInferences[index]

  const widthStyle = { width: `${confidence * 100}%` }

  return (
    <div className="relative w-full h-[250px] flex flex-col items-center border border-gray-600 rounded bg-gray-900 text-white p-4 space-y-4">
      <div className="text-center">
        <p className="text-lg font-medium">AI Inference</p>
        <p className="text-2xl font-bold mt-2">{action}</p>
        <p className="text-sm text-gray-400 mt-1">Confidence: {(confidence * 100).toFixed(1)}%</p>
        <div className="w-full h-3 mt-4 bg-gray-700 rounded">
          <div
            className="h-full bg-green-500 rounded"
            style={widthStyle}
          />
        </div>
      </div>
    </div>
  )
}