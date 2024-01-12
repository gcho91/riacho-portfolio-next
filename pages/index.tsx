import HeroSection from '../components/HeroSection'
import Portfolio from './work'
import Contact from './contact'
import AboutMe from '@/components/AboutMe'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Portfolio />
      <Contact />
    </>
  )
}
