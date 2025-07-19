'use client';

import ContactForm from "@/components/sections/ContactForm";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contactus() {
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
                            <h1 className="text-3xl font-bold mb-8 mt-5">Contact Us</h1>
                            <p>
                                Have a question or want to work with us?
                                Feel free to reach out by filling out the form below. We’ll get back to you as soon as possible.
                            </p>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </main>
        </motion.section>
    );
}
