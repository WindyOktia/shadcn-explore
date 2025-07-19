import { Briefcase } from "lucide-react";

const careerData = [
    {
        year: "2020",
        title: "Freelance Developer",
        description: "Started freelancing and building websites for local businesses using WordPress and PHP.",
    },
    {
        year: "2021",
        title: "Fullstack Developer – EduTech Startup",
        description: "Built learning management systems using React, Laravel, and MySQL.",
    },
    {
        year: "2022",
        title: "Mid-Level Developer – News Platform",
        description: "Led development of a custom CMS for a national news site using Next.js and MongoDB.",
    },
    {
        year: "2022 - Now",
        title: "Fullstack Engineer – Digital Center Indonesia",
        description: "Worked on internal banking systems using Java Spring Boot and Javascript.",
    },
    {
        year: "2024 – Now",
        title: "Founder & Lead Developer – Web Studio IDN",
        description: "Started my own development studio, delivering SaaS, e-commerce, and internal tools for clients.",
    },
];

export default function CareerTimeline() {
    return (
        <section className="py-10 pb-15">
            <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">Career Journey</h2>
            <div className="relative border-l-4 border-gray-300 dark:border-gray-600 pl-6 space-y-10">
                {careerData.map((item, idx) => (
                    <div key={idx} className="relative">
                        {/* Dot */}
                        <div className="absolute -left-[1.15rem] top-1 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 shadow-md" />
                        {/* Content */}
                        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">{item.year}</div>
                        <div className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                            <Briefcase size={18} className="text-blue-600" />
                            {item.title}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}