'use client';

import CareerTimeline from "@/components/sections/CareerTimeline";
import { motion } from "framer-motion";
import { Earth } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function AboutPage() {
    const { ref, inView } = useInView({ triggerOnce: true });
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
                        <div className="flex flex-col sm:flex-row gap-6">

                            <h1 className="font-bold mb-4 text-black dark:text-white pt-12">
                                <div className="text-3xl flex font-bold items-center">
                                    <Earth className="mr-2" /> Web Studio Indonesia
                                </div>
                            </h1>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start pb-12">

                            <p className="text-base text-gray-700 dark:text-gray-300 text-justify">
                                <b>Web Studio Indonesia</b> is a creative and development hub I founded with a clear vision: to build digital products that are simple by design and powerful through AI, but always remain under human control. We combine cutting-edge artificial intelligence with thoughtful UX and strong development principles to help individuals and businesses scale efficiently—without losing the human touch.

                                Whether it&apos;s launching a brand, building custom tools, or automating workflows, Web Studio Indonesia is where innovation meets clarity.
                            </p>

                        </div>
                        <hr className="border-gray-300 my-8 pb-6" />
                        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-6">
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white ">Founders</h2>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <Image
                                src="/images/profile.jpeg"
                                alt="Windy Puji Oktiagraha"
                                width={300}
                                height={300}
                                className="w-64 h-64 rounded-lg object-cover shadow-md mx-auto sm:mx-0"
                            />

                            <p className="text-base text-gray-700 dark:text-gray-300 text-justify">
                                Hi, I&rsquo;m <b>Windy Puji Oktiagraha</b>, a passionate Full-Stack Web Developer with over 4 years of experience in building dynamic, scalable, and high-performance web applications.
                                <br /><br />
                                Throughout my career, I&rsquo;ve worked across various industries&mdash;e-commerce, education, news media, and even banking internal systems&mdash;delivering robust solutions tailored to business needs.
                                <br /><br />
                                My tech stack spans both frontend and backend technologies, and I&rsquo;m always excited to solve complex problems, improve system efficiency, and build products that make a real impact.
                                <br /><br />
                                If you&rsquo;re looking for someone who can bring both functionality and finesse to your digital projects, I&rsquo;m here to help.
                            </p>
                        </div>

                        <CareerTimeline />

                        <div dangerouslySetInnerHTML={{ __html: html }} className="mt-3 dark:text-gray-300" />
                    </div>
                </div>
            </main>
        </motion.section>
    );
}
