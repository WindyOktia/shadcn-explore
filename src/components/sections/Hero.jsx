import { Button } from "@/components/ui/button"
import { RocketIcon } from "lucide-react"

export function Hero() {
    return (
        <section className="py-20 px-6 md:px-12">
            <div className="max-w-3xl">
                <div className="flex items-center space-x-2 text-muted-foreground mb-3">
                    <RocketIcon className="w-5 h-5" />
                    <span className="text-base font-medium">Hi everyone,</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Welcome to Web Studio IDN
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                    We believe in building with purpose and designing with clarity
                </p>
                <h3 className="text-xl font-semibold mt-10">Powered by AI, Controlled by You</h3>
                <p className="text-lg mb-6">
                    At Web Studio Indonesia, we combine the speed of AI with the precision of human expertise.
                    Our AI-driven development process accelerates delivery without compromising your unique
                    requirements — giving you the perfect balance of innovation, control, and quality.
                </p>
                <Button size="lg">Get Started</Button>
            </div>
        </section>
    )
}