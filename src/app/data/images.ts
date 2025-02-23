// data/images.ts
export type ImageItem = {
    id: string;
    src: string;
    alt: string;
    text: string;
    descriptionEN: string;
    descriptionDE: string;
    colSpan: string;
    height: string;
};

export const images: ImageItem[] = [
    {
        id: '1',
        src: '/1.jpg',
        alt: 'Image 1',
        text: 'Paris',
        descriptionEN: 'The Paris concept reflects classic elegance with a touch of modern chic. Combining luxurious textures, intricate details, and a refined color palette, it embodies the essence of French sophistication.',
        descriptionDE: 'Das Paris-Konzept spiegelt klassische Eleganz mit einem Hauch von modernem Chic wider. Luxuriöse Texturen, filigrane Details und eine raffinierte Farbpalette verkörpern französische Raffinesse.',
        colSpan: 'md:col-span-8',
        height: 'h-96'
    },
    {
        id: '2',
        src: '/2.jpg',
        alt: 'Image 2',
        text: 'Stockholm',
        descriptionEN: 'Inspired by Scandinavian simplicity and functionality, the Stockholm concept focuses on natural light, sustainable materials, and a cozy yet modern atmosphere, creating spaces that are both stylish and inviting.',
        descriptionDE: 'Inspiriert von skandinavischer Schlichtheit und Funktionalität konzentriert sich das Stockholm-Konzept auf natürliches Licht, nachhaltige Materialien und eine gemütliche, moderne Atmosphäre, die Stil und Behaglichkeit vereint.',
        colSpan: 'md:col-span-4',
        height: 'h-96'
    },
    {
        id: '3',
        src: '/3.jpg',
        alt: 'Image 3',
        text: 'Las Vegas',
        descriptionEN: 'Bold, extravagant, and full of personality, our Las Vegas concept is designed for those who love glamour. With statement lighting, vibrant colors, and opulent materials, this concept is all about making an impact.',
        descriptionDE: 'Kühn, extravagant und voller Persönlichkeit – unser Las Vegas-Konzept ist für alle, die Glamour lieben. Auffällige Beleuchtung, lebendige Farben und opulente Materialien sorgen für einen beeindruckenden Auftritt.',
        colSpan: 'md:col-span-4',
        height: 'h-64'
    },
    {
        id: '4',
        src: '/4.jpg',
        alt: 'Image 4',
        text: 'Zurich',
        descriptionEN: 'Inspired by Swiss precision and minimalism, our Zurich concept embraces clean lines, neutral tones, and high-quality materials, creating timeless and sophisticated interiors.',
        descriptionDE: 'Inspiriert von Schweizer Präzision und Minimalismus setzt unser Zürich-Konzept auf klare Linien, neutrale Farbtöne und hochwertige Materialien, um zeitlose und elegante Innenräume zu schaffen.',
        colSpan: 'md:col-span-8',
        height: 'h-96'
    }
];