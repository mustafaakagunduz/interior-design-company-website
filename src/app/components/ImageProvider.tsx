'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ImageItem } from '../data/images';
import { useLanguage } from '../contexts/LanguageContext';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

type ImageProviderProps = {
    image: ImageItem;
};

const ImageProvider = ({ image }: ImageProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { language } = useLanguage();

    const description = language === 'DE' ? image.descriptionDE : image.descriptionEN;

    return (
        <>
            <div
                className={`col-span-12 ${image.colSpan} relative ${image.height} group overflow-visible z-0 cursor-pointer`}
                onClick={() => setIsOpen(true)}
            >
                <div className="w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-2 absolute rounded-lg">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-2xl font-semibold z-10">
                            {image.text}
                        </span>
                    </div>
                </div>
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-xl bg-white dark:bg-gray-900 border dark:border-gray-800">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                            {image.text}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="relative w-full h-64 mb-4">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        {description}
                    </p>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ImageProvider;