import { RealViewport } from '@studio-freight/compono'
import { useDebug } from '@studio-freight/hamo'
import { useLenis } from '@studio-freight/react-lenis'
import { raf } from '@studio-freight/tempus'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { GTM_ID } from 'lib/analytics'
import { useStore } from 'lib/store'
import { ProjectProvider, RafDriverProvider } from 'lib/theatre'
import { Studio } from 'lib/theatre/studio'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { useEffect } from 'react'
import 'styles/global.scss'

const Stats = dynamic(
  () => import('@studio-freight/compono').then(({ Stats }) => Stats),
  { ssr: false }
)

const GridDebugger = dynamic(
  () =>
    import('@studio-freight/compono').then(({ GridDebugger }) => GridDebugger),
  { ssr: false }
)

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.defaults({ markers: process.env.NODE_ENV === 'development' })

  // merge rafs
  gsap.ticker.lagSmoothing(0)
  gsap.ticker.remove(gsap.updateRoot)
  raf.add((time) => {
    gsap.updateRoot(time / 1000)
  }, 0)
}

function MyApp({ Component, pageProps }) {
  const debug = useDebug()
  const lenis = useLenis(() => {
    ScrollTrigger.update()
  })
  const navIsOpened = useStore(({ navIsOpened }) => navIsOpened)

  useEffect(() => {
    if (navIsOpened) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [lenis, navIsOpened])

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [lenis])

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <>
      {debug && (
        <>
          <GridDebugger />
          <Stats />
        </>
      )}
      {/* Google Tag Manager - Global base code */}
      {process.env.NODE_ENV !== 'development' && (
        <>
          <Script
            async
            strategy="worker"
            src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
          />
          <Script
            id="gtm-base"
            strategy="worker"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTM_ID}');`,
            }}
          />
        </>
      )}
      {/* <PageTransition /> */}
      <RealViewport />
      <ProjectProvider
        id="Satus"
        config="config/Satus-2023-04-12T13_11_45.json"
      >
        <RafDriverProvider id="default">
          <Studio />
          <Component {...pageProps} />
        </RafDriverProvider>
      </ProjectProvider>
    </>
  )
}

export default MyApp
