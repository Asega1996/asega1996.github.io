import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface HeaderProps {
    scrollToSection: (page: number) => void;
}

const navItems = [
    { page: 1, key: "about" },
    { page: 2, key: "techStack" },
    { page: 3, key: "experience" },
    { page: 4, key: "projects" },
    { page: 5, key: "contact" },
];

export const Header = ({ scrollToSection }: HeaderProps) => {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [lang, setLang] = useState(i18n.language);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setLang(lng);
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-2 bg-secondary/90 shadow-lg" : "py-4 bg-secondary"}`}
        >
            <nav
                className="container mx-auto flex justify-between items-center px-6"
                role="navigation"
                aria-label="Menú principal"
            >
                <button
                    onClick={() => scrollToSection(0)}
                    className={`font-bold transition-all duration-300 ${scrolled ? "text-xl" : "text-2xl"} text-primary`}
                >
                    Alejandro Segovia
                </button>

                <ul className="hidden md:flex space-x-6 items-center">
                    {navItems.map((item) => (
                        <li key={item.page}>
                            <button
                                onClick={() => scrollToSection(item.page)}
                                className={`focus:outline-none focus:ring-2 focus:ring-primary transition text-accent hover:text-primary`}
                                tabIndex={0}
                            >
                                {t(`header.${item.key}`)}
                            </button>
                        </li>
                    ))}

                    <li>
                        <select
                            value={lang}
                            onChange={(e) => changeLanguage(e.target.value)}
                            className="ml-4 bg-secondary text-accent border border-primary rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="es">ES</option>
                            <option value="en">EN</option>
                        </select>
                    </li>
                </ul>

                <button
                    className="md:hidden text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </nav>

            {menuOpen && (
                <ul className="md:hidden bg-secondary/95 flex flex-col items-center space-y-4 py-4">
                    {navItems.map((item) => (
                        <li key={item.page}>
                            <button
                                onClick={() => {
                                    scrollToSection(item.page);
                                    setMenuOpen(false);
                                }}
                                className={`focus:outline-none focus:ring-2 focus:ring-primary transition text-accent hover:text-primary`}
                            >
                                {t(`header.${item.key}`)}
                            </button>
                        </li>
                    ))}

                    <li>
                        <select
                            value={lang}
                            onChange={(e) => changeLanguage(e.target.value)}
                            className="mt-2 bg-secondary text-accent border border-primary rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="es">ES</option>
                            <option value="en">EN</option>
                        </select>
                    </li>
                </ul>
            )}
        </header>
    );
};
