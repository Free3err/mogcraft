import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const isScrollingRef = useRef(false);

    useEffect(() => {
        const scrollToTop = () => {
            const c = document.documentElement.scrollTop || document.body.scrollTop;
            if (c > 0) {
                isScrollingRef.current = true;
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, c - c / 24);
            } else {
                isScrollingRef.current = false;
            }
        };

        const preventScroll = (e) => {
            if (isScrollingRef.current) {
                e.preventDefault();
            }
        };

        scrollToTop();

        window.addEventListener('scroll', preventScroll, { passive: false });

        return () => {
            window.removeEventListener('scroll', preventScroll);
        };
    }, [pathname]); 

    return null;
}
