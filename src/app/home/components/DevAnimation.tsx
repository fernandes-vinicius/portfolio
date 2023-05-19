'use client'

import Lottie from 'react-lottie-player'

import devJson from '../dev.json'

export default function DevAnimation() {
  return <Lottie animationData={devJson} play loop />
}
