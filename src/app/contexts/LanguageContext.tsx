'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'DE' | 'EN';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    DE: {
        about: 'Über',
        aboutText: 'Spring Concepts ist ein in Zürich ansässiges Innenarchitektur- und Designunternehmen, das sich der Gestaltung eleganter, funktionaler und zeitloser Räume widmet. Unser Team aus leidenschaftlichen Designern und Architekten bringt Innovation und Präzision in jedes Projekt ein, um sicherzustellen, dass jeder Raum die einzigartige Persönlichkeit und die Bedürfnisse unserer Kunden widerspiegelt. Von Wohnräumen bis hin zu gewerblichen Projekten legen wir Wert auf die Verbindung von Ästhetik und Funktionalität, um harmonische Umgebungen zu schaffen. Bei Spring Concepts sind wir überzeugt, dass großartiges Design die Art und Weise, wie Menschen leben und arbeiten, verbessert, und wir streben danach, Exzellenz in jedem Detail zu liefern.',
        projects: 'Projekte',
        contact: 'Kontakt',
        springHouse: 'Spring House',
        contactText: '📍 Adresse: Bahnhofstrasse 12, 8001 Zürich, Schweiz\n📞 Telefon: +41 44 123 45 67\n✉️ E-Mail: info@springconcepts.com\n🌐 Website: www.springconcepts.com\n\n🕒 Öffnungszeiten:\nMontag – Freitag: 09:00 – 18:00\nSamstag: 10:00 – 16:00\nSonntag: Geschlossen\n\nFolgen Sie uns auf Social Media:\n🔹 Instagram: @springconcepts\n🔹 Facebook: Spring Concepts\n🔹 LinkedIn: Spring Concepts'
    },
    EN: {
        about: 'About',
        aboutText: 'Spring Concepts is a Zurich-based interior design and architecture firm dedicated to creating elegant, functional, and timeless spaces. Our team of passionate designers and architects brings innovation and precision to every project, ensuring that each space reflects the unique personality and needs of our clients. From residential interiors to commercial projects, we focus on blending aesthetics with functionality to create harmonious environments. At Spring Concepts, we believe that great design enhances the way people live and work, and we strive to deliver excellence in every detail.',
        projects: 'Projects',
        contact: 'Contact',
        springHouse: 'Spring House',
        contactText: '📍 Address: Bahnhofstrasse 12, 8001 Zurich, Switzerland\n📞 Phone: +41 44 123 45 67\n✉️ Email: info@springconcepts.com\n🌐 Website: www.springconcepts.com\n\n🕒 Business Hours:\nMonday – Friday: 09:00 – 18:00\nSaturday: 10:00 – 16:00\nSunday: Closed\n\nFollow us on social media:\n🔹 Instagram: @springconcepts\n🔹 Facebook: Spring Concepts\n🔹 LinkedIn: Spring Concepts'
    }
} as const;

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('DE');

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations['DE']] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}