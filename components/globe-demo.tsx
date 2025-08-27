"use client"
import { motion } from "motion/react"
import dynamic from "next/dynamic"

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
})

export default function ProfessionalGlobe() {

  const globeConfig = {
    pointSize: 4,
    globeColor: "#0a0a0a", 
    showAtmosphere: true,
    atmosphereColor: "#22d3ee", // cyberpunk cyan atmosphere
    atmosphereAltitude: 0.15,
    emissive: "#000000",
    emissiveIntensity: 0,
    shininess: 0.1,
    polygonColor: "rgba(34,211,238,0.2)", // cyberpunk cyan country borders
    ambientLight: "#404040",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 51.8985, lng: -8.4756 }, // Cork, Ireland position
    autoRotate: true,
    autoRotateSpeed: 0.5,
    showGraticules: true,
    graticulesColor: "#22d3ee", // cyberpunk cyan grid lines
    graticulesOpacity: 0.3,
  }

  const colors = ["#22d3ee", "#67e8f9", "#a5f3fc"] // cyberpunk cyan palette

  // Key professional connections with country labels
  const professionalConnections = [
    {
      order: 1,
      startLat: 51.8985,
      startLng: -8.4756, // IE - Cork, Ireland (base)
      endLat: 41.0082,
      endLng: 28.9784, // TR - Istanbul, Turkey (heritage)
      arcAlt: 0.4,
      color: colors[0],
    },
    {
      order: 2,
      startLat: 51.8985,
      startLng: -8.4756, // IE - Cork, Ireland (base)
      endLat: 40.7128,
      endLng: -74.006, // US - New York (Amazon FBA)
      arcAlt: 0.5,
      color: colors[1],
    },
    {
      order: 3,
      startLat: 51.8985,
      startLng: -8.4756, // IE - Cork, Ireland (base)
      endLat: 52.52,
      endLng: 13.405, // DE - Berlin (European business)
      arcAlt: 0.2,
      color: colors[2],
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-400/10 via-transparent to-transparent rounded-full" />


      <div className="max-w-full mx-auto w-full relative overflow-hidden h-full">

        <div className="absolute w-full bottom-0 inset-x-0 h-20 bg-gradient-to-b pointer-events-none select-none from-transparent to-background z-40" />
        <div className="absolute w-full -bottom-10 h-full z-10">
          <World data={professionalConnections} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  )
}