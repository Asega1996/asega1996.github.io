
import { useTranslation } from "react-i18next";

export const Experience = () => {
    const { t } = useTranslation();

    const experience: any = t("experience", { returnObjects: true });
    const jobs = experience.jobs;

    return (
        <section
            id="Experience"
            className={`min-h-dvh flex flex-col justify-center items-center px-6 md:px-16 pt-24 md:pt-32 bg-[#233554]`}
            role="region"
            aria-label={t("experience.title")}
        >
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center md:text-left">
                    {t("experience.title")}
                </h2>

                <div className="relative border-l border-primary/50">
                    {jobs.map((job: any, index: number) => (
                        <div key={index} className="mb-12 pl-8">
                            <div className="absolute -left-3 w-6 h-6 rounded-full bg-primary border-4 border-secondary"></div>

                            <div className="bg-secondary/40 p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col md:flex-row items-center md:items-start gap-4">
                                <img
                                    src={job.logo}
                                    alt={`${job.company} logo`}
                                    className="w-16 h-16 object-contain rounded-full"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                                        {job.role}{" "}
                                        <a
                                            href={job.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent font-normal underline hover:text-[#64ffda]"
                                        >
                                            @ {job.company}
                                        </a>
                                    </h3>
                                    <p className="text-sm text-accent mb-3">{job.period}</p>
                                    <p className="text-accent leading-relaxed">{job.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
