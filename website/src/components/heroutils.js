/**
 * Hero Section Utilities
 * Reusable functions for animations, formatting, and helpers
 */

import { useState, useEffect, useRef } from 'react';

// ============================================================================
// COUNTER ANIMATIONS
// ============================================================================

/**
 * Custom hook for animated number counting
 * @param {number} end - Target number to count to
 * @param {number} duration - Animation duration in milliseconds
 * @param {number} delay - Delay before starting animation in milliseconds
 * @param {function} formatter - Optional function to format the number
 * @returns {number|string} Current count value
 */
export const useCountUp = (end, duration = 2000, delay = 0, formatter = null) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    const timeout = setTimeout(() => {
      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          const currentValue = end * progress;
          setCount(formatter ? formatter(currentValue) : Math.floor(currentValue));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(formatter ? formatter(end) : end);
          setHasAnimated(true);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, delay);

    return () => clearTimeout(timeout);
  }, [end, duration, delay, hasAnimated, formatter]);

  return count;
};

/**
 * Hook for counting up with easing functions
 * @param {number} end - Target value
 * @param {number} duration - Duration in ms
 * @param {string} easing - Easing function name
 */
export const useCountUpWithEasing = (end, duration = 2000, easing = 'easeOutCubic') => {
  const [count, setCount] = useState(0);

  const easingFunctions = {
    linear: (t) => t,
    easeInQuad: (t) => t * t,
    easeOutQuad: (t) => t * (2 - t),
    easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    easeOutCubic: (t) => (--t) * t * t + 1,
    easeInOutCubic: (t) => 
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  };

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easingFunctions[easing](progress);

      setCount(Math.floor(end * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, easing]);

  return count;
};

// ============================================================================
// NUMBER FORMATTING
// ============================================================================

/**
 * Format number with commas for thousands
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export const formatNumberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Format large numbers with K/M/B suffixes
 * @param {number} num - Number to format
 * @param {number} decimals - Number of decimal places
 * @returns {string} Formatted number
 */
export const formatLargeNumber = (num, decimals = 1) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(decimals) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(decimals) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(decimals) + 'K';
  }
  return num.toString();
};

/**
 * Format number as percentage
 * @param {number} num - Number to format (0-100 or 0-1)
 * @param {number} decimals - Decimal places
 * @returns {string} Formatted percentage
 */
export const formatPercentage = (num, decimals = 0) => {
  const value = num > 1 ? num : num * 100;
  return value.toFixed(decimals) + '%';
};

// ============================================================================
// ANIMATION HELPERS
// ============================================================================

/**
 * Hook to detect if element is in viewport
 * @param {number} threshold - Intersection threshold (0-1)
 * @returns {Array} [ref, isInView]
 */
export const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isInView];
};

/**
 * Stagger animation delays for multiple elements
 * @param {number} baseDelay - Base delay in seconds
 * @param {number} increment - Increment per item in seconds
 * @param {number} count - Number of items
 * @returns {Array} Array of delay values
 */
export const generateStaggerDelays = (baseDelay = 0, increment = 0.1, count = 5) => {
  return Array.from({ length: count }, (_, i) => baseDelay + i * increment);
};

// ============================================================================
// GLASSMORPHISM HELPERS
// ============================================================================

/**
 * Generate glassmorphism style object
 * @param {Object} options - Customization options
 * @returns {Object} Style object
 */
export const getGlassStyle = ({
  blur = 20,
  opacity = 0.1,
  borderOpacity = 0.2,
  backgroundColor = 'white'
} = {}) => ({
  background: `rgba(255, 255, 255, ${opacity})`,
  backdropFilter: `blur(${blur}px)`,
  WebkitBackdropFilter: `blur(${blur}px)`,
  border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
});

/**
 * Check if browser supports backdrop-filter
 * @returns {boolean} Support status
 */
export const supportsBackdropFilter = () => {
  if (typeof window === 'undefined') return false;
  return CSS.supports('backdrop-filter', 'blur(20px)') || 
         CSS.supports('-webkit-backdrop-filter', 'blur(20px)');
};

// ============================================================================
// IMAGE UTILITIES
// ============================================================================

/**
 * Preload image
 * @param {string} src - Image source URL
 * @returns {Promise} Promise that resolves when image is loaded
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Generate random user avatar URL
 * @param {number} index - Avatar index
 * @param {string} gender - 'men' or 'women'
 * @returns {string} Avatar URL
 */
export const getRandomUserAvatar = (index = 1, gender = 'men') => {
  return `https://randomuser.me/api/portraits/${gender}/${index}.jpg`;
};

// ============================================================================
// PERFORMANCE UTILITIES
// ============================================================================

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit = 300) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Check if device is mobile
 * @returns {boolean} True if mobile device
 */
export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * Check if reduced motion is preferred
 * @returns {boolean} True if reduced motion is preferred
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// ============================================================================
// COLOR UTILITIES
// ============================================================================

/**
 * Convert hex color to rgba
 * @param {string} hex - Hex color code
 * @param {number} alpha - Alpha value (0-1)
 * @returns {string} RGBA color string
 */
export const hexToRgba = (hex, alpha = 1) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Lighten or darken a color
 * @param {string} color - Hex color
 * @param {number} percent - Percentage to lighten (positive) or darken (negative)
 * @returns {string} Modified color
 */
export const adjustColorBrightness = (color, percent) => {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

// ============================================================================
// ANIMATION VARIANTS (for Framer Motion)
// ============================================================================

/**
 * Common animation variants for Framer Motion
 */
export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  },
  slideInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
  rotateIn: {
    initial: { opacity: 0, rotate: -180 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: 180 },
  },
};

/**
 * Spring configuration presets
 */
export const springPresets = {
  gentle: { type: 'spring', stiffness: 100, damping: 15 },
  bouncy: { type: 'spring', stiffness: 300, damping: 10 },
  slow: { type: 'spring', stiffness: 80, damping: 20 },
  default: { type: 'spring', stiffness: 200, damping: 20 },
};

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  // Counter animations
  useCountUp,
  useCountUpWithEasing,
  
  // Number formatting
  formatNumberWithCommas,
  formatLargeNumber,
  formatPercentage,
  
  // Animation helpers
  useInView,
  generateStaggerDelays,
  animationVariants,
  springPresets,
  
  // Glassmorphism
  getGlassStyle,
  supportsBackdropFilter,
  
  // Image utilities
  preloadImage,
  getRandomUserAvatar,
  
  // Performance
  debounce,
  throttle,
  isMobileDevice,
  prefersReducedMotion,
  
  // Colors
  hexToRgba,
  adjustColorBrightness,
};