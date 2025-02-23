'use client'
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function ContactComponent() {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-4">
            <Card className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300">
                <CardHeader className="pb-2">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 font-serif">
                        {t('contact')}
                    </h2>
                </CardHeader>
                <CardContent>
                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                            {t('contactText')}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}