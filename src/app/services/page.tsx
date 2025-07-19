'use client';

import Services from "@/components/sections/Services";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ServicesPage() {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <main className="h-screen overflow-y-auto">
                <div className="min-h-screen flex flex-col pb-24">
                    <Services />
                </div>
            </main>
        </motion.section>
    );
}
