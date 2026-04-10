'use client'

import dynamic from 'next/dynamic'

import heroAnimationJson from '../hero-animation.json'
import { Blob } from './blob'

const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false,
})

export function HeroImage() {
  return (
    <div className="relative">
      <Blob className="absolute h-full w-full fill-primary/10" />
      <Lottie animationData={heroAnimationJson} play loop />
    </div>
  )
}
