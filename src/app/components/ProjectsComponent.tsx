'use client'
import React from 'react';
import ImageProvider from './ImageProvider';
import { images } from '../data/images';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectsComponent = () => {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-4">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 font-serif mb-6">
                {t('projects')}
            </h2>

            <div className="grid grid-cols-12 gap-4 md:gap-6">
                {images.map((image) => (
                    <ImageProvider key={image.id} image={image} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsComponent;