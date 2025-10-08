import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { theme } from "../assets/theme";
import { useTranslation } from "react-i18next";

export const About = () => {
    const { i18n, t } = useTranslation();
    const language = i18n.language || "en";


    const [titleText, setTitleText] = useState("");
    const [paragraphsText, setParagraphsText] = useState<string[]>([]);

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
    const [displayedText, setDisplayedText] = useState([""]);
    const [currentParagraph, setCurrentParagraph] = useState(0);

    useEffect(() => {
        if (!inView) return;
        if (currentParagraph >= paragraphsText.length) return;

        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => {
                const newParagraphs = [...prev];
                newParagraphs[currentParagraph] = paragraphsText[currentParagraph].slice(0, i + 1);
                return newParagraphs;
            });
            i++;
            if (i === paragraphsText[currentParagraph].length) {
                clearInterval(interval);
                setCurrentParagraph((prev) => prev + 1);
            }
        }, 10);

        return () => clearInterval(interval);
    }, [inView, currentParagraph, paragraphsText, titleText]);

    useEffect(() => {
        const { title, paragraphs } = t("about", { returnObjects: true }) as any;
        setTitleText(title);
        setParagraphsText(paragraphs);
    }, [language]);

    return (
        <section
            id="About"
            ref={ref}
            className="min-h-dvh flex flex-col items-center justify-center bg-[#112240] text-[#ccd6f6] px-6 md:px-16"
            role="region"
            aria-label={titleText}
        >
            <div className="max-w-3xl w-full">
                <h2 className={`text-4xl md:text-5xl font-bold ${theme.primaryText} mb-6`}>
                    {titleText}
                </h2>

                <div className={`text-lg md:text-xl font-mono ${theme.accent} leading-relaxed space-y-4`}>
                    {displayedText.map((para, idx) => (
                        <p key={idx}>
                            {para}
                            {idx === currentParagraph ? <span className="animate-pulse">|</span> : null}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};
