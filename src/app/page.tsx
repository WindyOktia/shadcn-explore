import { Skills } from "@/components/sections/Skills"
import { Hero } from "@/components/sections/Hero"

const Homepage = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <Hero />
      <Skills />
    </div>
  )
}

export default Homepage