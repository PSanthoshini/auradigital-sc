import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Portfolio } from '@/components/portfolio'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Stats } from '@/components/stats'
import { WhyChoose } from '@/components/why-choose'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Portfolio />
      <Services />
      <WhyChoose />
      <Contact />
      <Footer />
    </main>
  )
}
