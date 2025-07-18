'use client';

import CareerTimeline from "@/components/sections/CareerTimeline";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer"

export default function AboutPage() {
    const { ref, inView } = useInView({ triggerOnce: true })
    const [html, setHtml] = useState('');

    useEffect(() => {
        setHtml(`
      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7299781366764748800?collapsed=1" height="567" width="100%" frameborder="0" allowfullscreen="" title="Posting tersemat"></iframe>
    `);
    }, []);
    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <main className="h-screen overflow-y-auto">
                <div className="min-h-screen flex flex-col pb-24">
                    <div className="p-6 pb-24">
                        <h1 className="text-3xl font-bold mb-4">About Me</h1>
                        <p className="text-base text-gray-700">
                            Hi, I&rsquo;m <b>Windy Puji Oktiagraha</b>, a passionate Full-Stack Web Developer with over 4 years of experience in building dynamic, scalable, and high-performance web applications.

                            Throughout my career, I&rsquo;ve worked across various industries&mdash;e-commerce, education, news media, and even banking internal systems&mdash;delivering robust solutions tailored to business needs.

                            <br />My tech stack spans both frontend and backend technologies, and I&rsquo;m always excited to solve complex problems, improve system efficiency, and build products that make a real impact.

                            If you&rsquo;re looking for someone who can bring both functionality and finesse to your digital projects, I&rsquo;m here to help.
                        </p>

                        <CareerTimeline />
                        <div dangerouslySetInnerHTML={{ __html: html }} className="mt-3" />
                    </div>
                </div>

            </main>

        </motion.section>
    );
}
