'use client'

import Lottie from 'react-lottie-player'

// import Image from 'next/image'

import heroAnimationJson from './hero-animation.json'

export function HeroImage() {
  return (
    <>
      {/* <Image
        src="/images/me-profile.png"
        alt="Me"
        width={580}
        height={580}
        priority
        className="relative h-auto w-full"
      /> */}

      <Lottie animationData={heroAnimationJson} play loop />
    </>
  )
}
