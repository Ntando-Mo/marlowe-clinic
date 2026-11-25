import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function useFocusOnViewChange(targetId = 'main-content') {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const mainElement = document.getElementById(targetId);
    if (mainElement) {
      mainElement.focus({ preventScroll: false });
    }
  }, [pathname, targetId]);
}