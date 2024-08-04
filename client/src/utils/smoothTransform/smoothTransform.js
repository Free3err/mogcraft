import React, { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './smoothTransform.css';

const SmoothTransform = ({ children }) => {
    const ref = useRef();
    const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`smooth-transform ${isVisible ? 'is-visible' : ''}`}
        >
            {children}
        </div>
    );
};

export default SmoothTransform;
