import { theme } from "../assets/theme";
import {
    SiReact,
    SiTypescript,
    SiVuedotjs,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiGit,
    SiDocker,
    SiAngular,
    SiGithub
} from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const TechStack = () => {
    const { t } = useTranslation();

    const techTabs: any = {
        Frontend: [
            { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, url: "https://www.typescriptlang.org/" },
            { name: "React", icon: <SiReact className="text-blue-400" />, url: "https://reactjs.org/" },
            { name: "Vue", icon: <SiVuedotjs className="text-green-500" />, url: "https://vuejs.org/" },
            { name: "Angular", icon: <SiAngular className="text-red-600" />, url: "https://angular.io/" },
        ],
        Backend: [
            { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, url: "https://nodejs.org/" },
            { name: "Express", icon: <SiExpress className="text-white" />, url: "https://expressjs.com/" },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" />, url: "https://www.postgresql.org/" },
            { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, url: "https://www.mongodb.com/" },
        ],
        Tools: [
            { name: "Git", icon: <SiGit className="text-orange-500" />, url: "https://git-scm.com/" },
            { name: "GitFlow", icon: <FaProjectDiagram className="text-yellow-400" />, url: "https://nvie.com/posts/a-successful-git-branching-model/" },
            { name: "Docker", icon: <SiDocker className="text-blue-400" />, url: "https://www.docker.com/" },
            { name: "GitHub Actions", icon: <SiGithub className="text-gray-800" />, url: "https://github.com/features/actions" },
        ],
    };

    return (
        <section
            id="TechStack"
            className="min-h-dvh flex flex-col justify-center items-center px-6 md:px-16 pt-24 md:pt-32 pb-20 md:pb-0 bg-gradient-to-bl from-secondary to-secondary/90"
            role="region"
            aria-label={"Sección de stack tecnológico"}
        >
            <div className="max-w-5xl w-full">
                <h2 className={`text-4xl md:text-5xl font-bold ${theme.primaryText} mb-6`}>
                    {t("techStack.title")}
                </h2>

                <div className="mt-8 w-full opacity-0 translate-y-4 transition-all duration-700"
                    style={{ opacity: 1, transform: "translateY(0)" }}>
                    <div className="flex flex-col md:flex-row gap-12">
                        {Object.keys(techTabs).map((tab) => (
                            <div key={tab} className="flex flex-col items-center md:items-start">
                                <h3 className="text-2xl font-semibold text-[#64ffda] mb-4">
                                    {t(`techStack.tabs.${tab}`)}
                                </h3>
                                <div className="flex flex-col space-y-4">
                                    {techTabs[tab].map((tech: any) => (
                                        <a
                                            key={tech.name}
                                            href={tech.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 bg-[#0a192f] p-4 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-[#64ffda]"
                                        >
                                            <span className="text-4xl">{tech.icon}</span>
                                            <span className="text-lg font-medium text-[#64ffda]">{tech.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
