import { useCallback, useEffect, useRef, useState } from 'react';

const useScroll = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const ref = useRef();
  const animationFrame = useRef();

  const handleScroll = useCallback((e) => {
    if (animationFrame.current) {
      window.cancelAnimationFrame(animationFrame.current);
    }

    animationFrame.current = window.requestAnimationFrame(() => {
      setScrollTop(e.target.scrollTop);
    });
  }, []);

  useEffect(() => {
    const node = ref.current;
    setScrollTop(node.scrollTop);
    node.addEventListener('scroll', handleScroll);
    return () => node.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return [scrollTop, ref];
};

export default useScroll;
