import { useTranslation } from "react-i18next";
import { theme } from "../assets/theme";

export const Projects = () => {
    const { t } = useTranslation();
    const projects: any = t("projects.list", { returnObjects: true });

    return (
        <section
            id="Projects"
            className="min-h-dvh flex flex-col justify-center items-center px-6 md:px-16 pt-24 md:pt-32 bg-gradient-to-bl from-secondary to-secondary/90"
            role="region"
            aria-label={t("projects.title")}
        >
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center md:text-left">
                    {t("projects.title")}
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project: any, index: number) => (
                        <div
                            key={index}
                            className={`bg-secondary p-6 rounded-lg shadow-md hover:shadow-xl transition flex flex-col justify-between border border-${theme.primaryText}`}
                        >
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={`Image cover for ${project.title}`}
                                    className="w-full h-48 object-cover rounded mb-4"
                                />
                            )}

                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-accent leading-relaxed mb-4">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-auto">
                                <ul className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t: string, i: number) => (
                                        <li
                                            key={i}
                                            className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                                        >
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline font-medium"
                                >
                                    {t("projects.seeProject")} →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
