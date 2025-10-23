import HeroSection from '../components/HeroSection'
import HeroSection2 from '../components/HeroSection2'

import Portfolio from './work'
import MarketingProjects from '../components/MarketingProjects'
import Contact from './contact'

export default function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <HeroSection2 />
      <Portfolio />
      <MarketingProjects />
      {/* <Contact /> */}
    </>
  )
}
