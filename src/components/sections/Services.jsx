'use client'
import { useState } from 'react'
import { Icon } from '@iconify/react'

const services = [
    {
        title: 'Web Development',
        subtitle: 'Modern websites and apps',
        details: 'We build responsive, fast, and scalable web applications using React, Next.js, and other modern frameworks.',
        techStack: ['logos:react', 'logos:nextjs-icon', 'logos:javascript']
    },
    {
        title: 'AI Integration',
        subtitle: 'Intelligent automation',
        details: 'Integrate AI solutions such as chatbots, data processing, and predictive analytics to optimize your business.',
        techStack: ['logos:python', 'logos:openai-icon', 'logos:docker-icon']
    },
    {
        title: 'UI/UX Design',
        subtitle: 'Beautiful and functional',
        details: 'Design interfaces that are both beautiful and user-friendly to ensure great user experiences across devices.',
        techStack: ['logos:figma', 'logos:adobe-xd']
    },
    {
        title: 'Workflow Automation',
        subtitle: 'Save time and cost',
        details: 'Automate repetitive tasks and streamline operations using custom tools tailored to your business processes.',
        techStack: ['logos:zapier-icon', 'logos:nodejs-icon']
    },
    {
        title: 'Brand Identity',
        subtitle: 'Logos, style guides',
        details: "Craft visual identities that reflect your brand's purpose and values across all digital platforms.",
        techStack: ['logos:adobe-illustrator', 'logos:adobe-photoshop']
    },
    {
        title: 'E-Commerce Solutions',
        subtitle: 'Online stores that convert',
        details: 'Launch scalable and conversion-optimized e-commerce stores with product management and secure payments.',
        techStack: ['logos:shopify', 'logos:stripe']
    },
    {
        title: 'SEO & Performance',
        subtitle: 'Get discovered',
        details: 'Boost your site’s performance and visibility with SEO optimization and fast-loading web technologies.',
        techStack: ['logos:google', 'logos:vercel-icon', 'logos:gtmetrix']
    },
    {
        title: 'Custom Dashboards',
        subtitle: 'Data made simple',
        details: 'Create interactive dashboards for insights, reporting, and team collaboration in real time.',
        techStack: ['logos:chartjs', 'logos:tailwindcss-icon', 'logos:typescript-icon']
    }
]

export default function Services() {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <div className="w-full mx-auto px-4 py-8 space-y-6">
            <div className="py-10 px-6 md:px-12 bg-[#f0f8ff] dark:bg-background rounded-2xl">
                <h1 className="text-3xl font-bold mb-8 mt-5">Our Services</h1>
                <p className=" text-lg text-dark-600 mb-10 w-full mx-auto">
                    We provide end-to-end digital solutions tailored to meet the unique needs of startups, growing businesses, and visionary creators.
                    From building modern websites and apps to integrating intelligent AI tools, we help you scale efficiently and leave a lasting digital impression.
                    Our goal is to deliver impactful, user-focused experiences that drive engagement, streamline operations, and elevate your brand in today’s competitive landscape.
                </p>
            </div>


            {services.map((service, index) => (
                <div
                    key={index}
                    className="border rounded-xl shadow-sm dark:border-gray-700 dark:shadow-md"
                >
                    <button
                        onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-t-xl dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {service.title}
                            </h3>
                            <p className="text-sm italic text-gray-600 dark:text-gray-400">
                                {service.subtitle}
                            </p>
                        </div>
                        <span className="text-xl text-gray-600 dark:text-gray-300">
                            {index === openIndex ? '−' : '+'}
                        </span>
                    </button>

                    {index === openIndex && (
                        <div className="px-4 pb-4 pt-2 bg-white rounded-b-xl dark:bg-gray-900">
                            <p className="text-gray-700 dark:text-gray-300 mb-3">
                                {service.details}
                            </p>
                            <div className="flex flex-wrap gap-3 items-center">
                                {service.techStack.map((icon, idx) => (
                                    <Icon key={idx} icon={icon} width="28" height="28" />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}

        </div>
    )
}
