'use client'
import { env } from 'env'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useLenis } from 'libs/lenis'
import { useEffect, useLayoutEffect } from 'react'

export function ScrollTriggerConfig() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.clearScrollMemory('manual')
    ScrollTrigger.defaults({
      markers: env.NODE_ENV === 'development',
    })
  }, [])

  const lenis = useLenis(ScrollTrigger.update)
  useEffect(() => ScrollTrigger.refresh(), [lenis])

  return null
}
