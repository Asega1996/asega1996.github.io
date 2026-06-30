import { useTranslation } from "react-i18next";
import { useState, useMemo } from "react";
import { theme } from "../assets/theme";

export const Projects = () => {
    const { t } = useTranslation();
    const projects: any = t("projects.list", { returnObjects: true });

    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

    // Obtener todas las tecnologías únicas
    const allTechs = useMemo(() => {
        const techs = new Set<string>();
        projects.forEach((project: any) => {
            project.tech.forEach((t: string) => techs.add(t));
        });
        return Array.from(techs).sort();
    }, [projects]);

    // Filtrar proyectos
    const filteredProjects = useMemo(() => {
        if (selectedTechs.length === 0) return projects;
        return projects.filter((project: any) =>
            selectedTechs.some((tech) => project.tech.includes(tech))
        );
    }, [projects, selectedTechs]);

    const toggleTech = (tech: string) => {
        setSelectedTechs((prev) =>
            prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
        );
    };

    return (
        <section
            id="Projects"
            className="min-h-dvh flex flex-col justify-center items-center px-6 md:px-16 py-24 md:py-32 bg-gradient-to-bl from-secondary to-secondary/90"
            role="region"
            aria-label={t("projects.title")}
        >
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center md:text-left">
                    {t("projects.title")}
                </h2>

                {/* Filtros por tecnología */}
                <div className="mb-12">
                    <p className="text-accent mb-4 text-sm font-medium">Filtrar por tecnología:</p>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedTechs([])}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedTechs.length === 0
                                    ? "bg-primary text-secondary"
                                    : "bg-primary/10 text-primary hover:bg-primary/20"
                                }`}
                        >
                            Todos
                        </button>
                        {allTechs.map((tech) => (
                            <button
                                key={tech}
                                onClick={() => toggleTech(tech)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedTechs.includes(tech)
                                        ? "bg-primary text-secondary"
                                        : "bg-primary/10 text-primary hover:bg-primary/20"
                                    }`}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid de proyectos */}
                <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project: any, index: number) => (
                            <div
                                key={index}
                                className={`bg-secondary p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-between border border-${theme.primaryText} cursor-pointer group`}
                                onClick={() => setSelectedProject(project)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") setSelectedProject(project);
                                }}
                            >
                                {project.image && (
                                    <div className="relative overflow-hidden rounded mb-4">
                                        <img
                                            src={project.image}
                                            alt={`Image cover for ${project.title}`}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                                            <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                Ver detalles
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <h3 className="text-xl font-semibold text-primary mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-accent leading-relaxed mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-auto">
                                    <ul className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.slice(0, 3).map((t: string, i: number) => (
                                            <li
                                                key={i}
                                                className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                                            >
                                                {t}
                                            </li>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <li className="px-2 py-1 text-xs text-accent">
                                                +{project.tech.length - 3}
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-accent text-lg">
                                No hay proyectos con esas tecnologías
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6"
                    onClick={() => setSelectedProject(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="bg-secondary rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-accent hover:text-primary transition-colors"
                            aria-label="Cerrar modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {selectedProject.image && (
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-64 object-cover rounded-lg mb-6"
                            />
                        )}

                        <h2 className="text-3xl font-bold text-primary mb-4">
                            {selectedProject.title}
                        </h2>

                        <p className="text-accent leading-relaxed mb-6">
                            {selectedProject.description}
                        </p>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-primary mb-3">Tecnologías</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tech.map((tech: string, i: number) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-primary text-secondary px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                        >
                            {t("projects.seeProject")} →
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
};
