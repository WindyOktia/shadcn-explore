'use client'

import { Button } from "@/components/ui/button"
import { RocketIcon } from "lucide-react"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

export const Hero = () => {
    const controls = useAnimation()
    const { ref, inView } = useInView({ threshold: 0.2 })

    useEffect(() => {
        if (inView) controls.start("visible")
    }, [inView, controls])

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
        >
            <section className="py-20 px-6 md:px-12 bg-[#f0f8ff] dark:bg-background rounded-2xl">
                <div className="">
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
                    <h2 className="text-xl font-bold">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                            Powered by AI, Controlled by You
                        </span>
                    </h2>

                    <p className="text-lg mb-6 mt-3">
                        At Web Studio Indonesia, we combine the speed of AI with the precision of human expertise.
                        Our AI-driven development process accelerates delivery without compromising your unique
                        requirements — giving you the perfect balance of innovation, control, and quality.
                    </p>
                    <div className="mt-6">
                        <a href="/about-us" className="italic text-sm hover:underline">
                            Learn more about us →
                        </a>
                    </div>

                    <Button size="lg" className="mt-5">Get Started</Button>
                </div>
            </section>
        </motion.section>
    )
}
