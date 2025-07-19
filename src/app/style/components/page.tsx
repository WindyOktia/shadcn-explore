'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Components() {
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
                    <div className="w-full mx-auto px-4 py-8 space-y-6">
                        <div className="py-10 px-6 md:px-12 bg-[#f0f8ff] dark:bg-background rounded-2xl">
                            <h1 className="text-2xl font-bold mb-2">Style Guide</h1>
                            <h2 className="text-xl dark:bg-background border-t border-muted pt-2">─────── Components</h2>
                        </div>
                    </div>
                </div>
            </main>
        </motion.section>
    );
}
