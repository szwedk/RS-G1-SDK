'use client'

import React, { useRef, useEffect, useState } from 'react'
import * as faceapi from 'face-api.js'

export default function FacialRecognitionDemo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loading, setLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models'
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
      ])
      startVideo()
    }

    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        })
        .catch(err => console.error('Error accessing webcam: ', err))
    }

    loadModels()
  }, [])

  useEffect(() => {
    const detect = async () => {
      if (!videoRef.current || !canvasRef.current) return

      const options = new faceapi.TinyFaceDetectorOptions()
      const displaySize = {
        width: videoRef.current.videoWidth,
        height: videoRef.current.videoHeight,
      }

      faceapi.matchDimensions(canvasRef.current, displaySize)

      const interval = setInterval(async () => {
        if (
          !videoRef.current ||
          videoRef.current.readyState < 2
        ) return

        const detections = await faceapi.detectAllFaces(videoRef.current, options)
        const resizedDetections = faceapi.resizeResults(detections, displaySize)

        if (canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d')
          if (ctx) {
            ctx.setTransform(-1, 0, 0, 1, canvasRef.current.width, 0)
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
            faceapi.draw.drawDetections(canvasRef.current, resizedDetections)
            ctx.setTransform(1, 0, 0, 1, 0, 0) // reset transform
          }
        }
        setLoading(false)
      }, 100)

      return () => clearInterval(interval)
    }

    videoRef.current?.addEventListener('play', detect)

    return () => {
      videoRef.current?.removeEventListener('play', detect)
    }
  }, [])

  if (!isMounted) return null

  return (
    <div className="relative w-full aspect-video rounded overflow-hidden bg-gray-900">
      {loading && <div className="absolute inset-0 flex items-center justify-center text-white z-10">Loading model...</div>}
      <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover scale-x-[-1]" />
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  )
}
