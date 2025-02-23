'use client'
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div className="fixed bottom-8 right-8 z-[9999]">
                    <Button
                        onClick={scrollToTop}
                        size="icon"
                        className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110"
                    >
                        <ArrowUp className="h-5 w-5" />
                        <span className="sr-only">Scroll to top</span>
                    </Button>
                </div>
            )}
        </>
    );
};

export default ScrollToTop;