'use client'

import Lottie from 'react-lottie-player'

import heroAnimationJson from '../hero-animation.json'
import { Blob } from './blob'

export function HeroImage() {
  return (
    <div className="relative">
      <Blob className="absolute h-full w-full fill-primary/10" />
      <Lottie animationData={heroAnimationJson} play loop />
    </div>
  )
}
