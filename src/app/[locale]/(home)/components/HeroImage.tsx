'use client'

import Lottie from 'react-lottie-player'

// import Image from 'next/image'

import { BlobSvg } from '~/components/BlobSvg'

import heroAnimationJson from './hero-animation.json'

export function HeroImage() {
  return (
    <div className="relative">
      {/* <Image
        src="/images/me-profile.png"
        alt="Me"
        width={580}
        height={580}
        priority
        className="relative h-auto w-full"
      /> */}

      <BlobSvg className="absolute block h-full w-full sm:hidden" />

      <Lottie animationData={heroAnimationJson} play loop />
    </div>
  )
}
