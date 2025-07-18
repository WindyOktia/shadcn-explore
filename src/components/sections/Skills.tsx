import { SiNextdotjs, SiReact, SiExpress, SiNodedotjs, SiPhp, SiLaravel } from "react-icons/si"

const skills = [
    {
        icon: <SiNextdotjs className="text-3xl text-black" />,
        title: "Next.js",
        desc: "Fullstack React framework with great performance and SEO."
    },
    {
        icon: <SiReact className="text-3xl text-sky-500" />,
        title: "React",
        desc: "Component-based UI library for modern web interfaces."
    },
    {
        icon: <SiExpress className="text-3xl text-gray-800" />,
        title: "Express.js",
        desc: "Minimalist backend framework for building RESTful APIs."
    },
    {
        icon: <SiNodedotjs className="text-3xl text-green-600" />,
        title: "Node.js",
        desc: "JavaScript runtime for building scalable server-side apps."
    },
    {
        icon: <SiPhp className="text-3xl text-indigo-600" />,
        title: "PHP",
        desc: "Widely-used scripting language for dynamic web applications."
    },
    {
        icon: <SiLaravel className="text-3xl text-red-500" />,
        title: "Laravel",
        desc: "Elegant PHP framework for robust backend systems."
    },
]

export function Skills() {
    return (
        <section className="py-16 px-6 md:px-12">
            <h2 className="text-2xl font-bold mb-8">Our Tech Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                    >
                        <div className="mb-4">{skill.icon}</div>
                        <h3 className="text-lg font-semibold mb-1">{skill.title}</h3>
                        <p className="text-sm text-muted-foreground">{skill.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
