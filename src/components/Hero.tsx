import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { theme } from "../assets/theme";
import { useTranslation } from "react-i18next";

export const Hero = () => {
    const { t } = useTranslation();

    const githubUrl = "https://github.com/Asega1996";
    const instagramUrl = "https://www.instagram.com/asega96/";
    const linkedinUrl = "https://www.linkedin.com/in/alejandro-segovia-gallardo-7810aa189/";

    return (
        <section
            id="Hero"
            className="h-screen flex flex-col justify-center items-center px-6 md:px-16 pt-16 md:pt-32"
            role="region"
            aria-label={t("hero.greeting")}
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="flex-1 space-y-6">
                    <h1 className={`text-5xl md:text-7xl font-extrabold ${theme.primaryText} leading-tight`}>
                        {t("hero.greeting")}
                    </h1>
                    <h2 className={`text-xl md:text-2xl max-w-lg ${theme.accent}`}>
                        {t("hero.description")}
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
                        <button
                            onClick={() =>
                                document.getElementById("About")?.scrollIntoView({ behavior: "smooth" })
                            }
                            className={`px-6 py-3 ${theme.primaryBg} ${theme.secondaryText} font-semibold rounded-lg shadow-lg ${theme.hoverBg} focus:outline-none focus:ring-2 ${theme.primaryRing} focus:ring-offset-2 transition`}
                        >
                            {t("hero.knowMe")}
                        </button>
                        <a
                            href="/files/32083695Y.pdf"
                            download="CV-Alejandro-Segovia.pdf"
                            aria-label="Descargar CV en PDF"
                            className={`text-center px-6 py-3 border-2 ${theme.primaryBorder} ${theme.primaryText} font-semibold rounded-lg shadow-lg ${theme.hoverBg} ${theme.hoverText} focus:outline-none focus:ring-2 ${theme.primaryRing} focus:ring-offset-2 transition`}
                        >
                            {t("hero.downloadCV")}
                        </a>
                    </div>

                    <div className="flex mt-6 space-x-6 justify-center md:justify-start text-2xl">
                        <a href="mailto:asega1996@gmail.com" className={`${theme.primaryText} hover:${theme.hoverText}`} aria-label="Correo">
                            <FaEnvelope />
                        </a>
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`${theme.primaryText} hover:${theme.hoverText}`} aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={`${theme.primaryText} hover:${theme.hoverText}`} aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={`${theme.primaryText} hover:${theme.hoverText}`} aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                <div className="hidden md:flex flex-1 justify-center">
                    <img
                        src="yo.jpeg"
                        alt="Alejandro Segovia"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm h-auto rounded-xl shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};
