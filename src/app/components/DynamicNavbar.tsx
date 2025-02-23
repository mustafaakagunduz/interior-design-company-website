'use client'
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from '../contexts/LanguageContext';

const DynamicNavbar = () => {
    const { language, setLanguage, t } = useLanguage();
    const { theme, setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLanguageChange = (newLang: 'DE' | 'EN') => {
        setLanguage(newLang);
    };

    // Smooth scroll function
    const scrollToSection = (sectionId: string) => {
        if (sectionId === 'top') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80; // Approximate navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 z-[9999]">
            <div className="max-w-7xl mx-auto px-4">
                <div className={`flex flex-col transition-all duration-300 ${isScrolled ? '' : 'py-4'}`}>
                    {/* Top row with logo and controls */}
                    <div className="flex items-center justify-between">
                        {/* Empty space on the left */}
                        <div className="w-32"></div>

                        {/* Center logo - Now clickable */}
                        <div
                            onClick={() => scrollToSection('top')}
                            className={`flex flex-col items-center justify-center font-serif transition-all duration-300 h-12 ${isScrolled ? 'scale-90' : 'scale-100'} cursor-pointer`}
                        >
                            <span className={`font-semibold text-gray-900 dark:text-gray-100 transition-all duration-300 ${isScrolled ? 'text-3xl' : 'text-4xl'}`}>
                                SPRING
                            </span>
                            <span className={`text-gray-900 dark:text-gray-100 transition-all duration-300 ${isScrolled ? 'text-sm -mt-1' : 'text-lg mt-1'}`}>
                                concepts
                            </span>
                        </div>

                        {/* Right controls */}
                        <div className="flex items-center space-x-4 w-32 justify-end">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
                                        <Globe className="h-4 w-4" />
                                        <span>{language}</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="bg-white dark:bg-gray-900 z-[9999]">
                                    <DropdownMenuItem
                                        onClick={() => handleLanguageChange('DE')}
                                        className="cursor-pointer text-gray-900 dark:text-gray-100"
                                    >
                                        Deutsch
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => handleLanguageChange('EN')}
                                        className="cursor-pointer text-gray-900 dark:text-gray-100"
                                    >
                                        English
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-9 px-0"
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            >
                                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </div>
                    </div>

                    {/* Bottom row with navigation buttons */}
                    <div className={`flex justify-center space-x-8 mt-4 transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                        <Button
                            variant="ghost"
                            className="text-base text-gray-900 dark:text-gray-100"
                            onClick={() => scrollToSection('about')}
                        >
                            {t('about')}
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-base text-gray-900 dark:text-gray-100"
                            onClick={() => scrollToSection('projects')}
                        >
                            {t('projects')}
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-base text-gray-900 dark:text-gray-100"
                            onClick={() => scrollToSection('contact')}
                        >
                            {t('contact')}
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DynamicNavbar;