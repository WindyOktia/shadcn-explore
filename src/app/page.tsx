import { Skills } from "@/components/sections/Skills"
import { Hero } from "@/components/sections/Hero"

const Homepage = () => {
  return (
    <main className="h-screen overflow-y-auto">
      <div className="min-h-screen flex flex-col pb-30">
        <Hero />
        {/* <ClientsCarousel /> */}
        <Skills />
      </div>
    </main>
  )
}

export default Homepage