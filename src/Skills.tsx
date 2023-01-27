import { Skill } from "./SkillType";
import ViteSVG from "./assets/vite.svg";
import WebGL_SVG from "./assets/webgl.svg";

function Skills() {
    const skills: Skill[] = [
        {
            name: "TypeScript",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
        },
        {
            name: "React",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "Next.js",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
        },
        {
            name: "Vite",
            img: ViteSVG,
        },
        {
            name: "Tailwind CSS",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
        },
        {
            name: "WebGL",
            img: WebGL_SVG,
        },
        {
            name: "Python",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
            name: "Rust",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
        },
        {
            name: "Github",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
            name: "VS Code",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg",
        },
    ];

    return (
        <section className="container m-auto flex max-w-2xl flex-col flex-wrap items-center justify-start md:flex-row">
            {skills.map((skill) => {
                return (
                    <div
                        className="h-auto w-full p-3 lg:w-1/3"
                        key={skill.name}
                    >
                        <div className="flex h-auto flex-col overflow-hidden rounded border shadow-sm">
                            <img
                                className="block h-48 w-full flex-none bg-cover p-2 md:h-full"
                                src={skill.img}
                            />
                            <div className="flex flex-col justify-between rounded-b bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r">
                                <div className="mb-2 text-xl font-bold leading-tight text-black">
                                    {skill.name}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default Skills;
