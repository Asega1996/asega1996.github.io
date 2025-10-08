import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
    const { t } = useTranslation();
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:tu-email@dominio.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
        setSubject("");
        setMessage("");
    };

    return (
        <section
            id="Contact"
            className="min-h-dvh flex flex-col items-center justify-center bg-[#233554] text-[#ccd6f6] px-6 md:px-16 py-12"
            role="region"
            aria-label={t("contact.ariaLabel")}
        >
            <h2 className="text-5xl md:text-6xl font-bold text-[#64ffda] mb-12 text-center">
                {t("contact.title")}
            </h2>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-3xl md:max-w-4xl bg-[#0a192f] p-12 rounded-xl shadow-lg flex flex-col space-y-8"
            >
                <div>
                    <label
                        htmlFor="subject"
                        className="block text-[#8892b0] font-semibold mb-3 text-lg md:text-xl"
                    >
                        {t("contact.subject")}
                    </label>
                    <input
                        id="subject"
                        type="text"
                        placeholder={t("contact.subjectPlaceholder")}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-6 py-4 border border-[#8892b0] rounded-lg text-lg md:text-xl text-[#0a192f] placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda]"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block text-[#8892b0] font-semibold mb-3 text-lg md:text-xl"
                    >
                        {t("contact.message")}
                    </label>
                    <textarea
                        id="message"
                        rows={8}
                        placeholder={t("contact.messagePlaceholder")}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-6 py-4 border border-[#8892b0] rounded-lg text-lg md:text-xl text-[#0a192f] placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda]"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="px-8 py-4 bg-[#64ffda] text-[#0a192f] text-lg md:text-xl font-semibold rounded-lg shadow-lg hover:bg-[#52e0b2] focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:ring-offset-2 transition"
                >
                    {t("contact.send")}
                </button>
            </form>
        </section>
    );
};
