import { useEffect, useState } from 'react';

export const useMatchMedia = (mediaQuery: string, initialValue: boolean) => {
  const [isMatching, setIsMatching] = useState(initialValue);

  useEffect(() => {
    const watcher = window.matchMedia(mediaQuery);

    setIsMatching(watcher.matches);

    const listener = (matches: MediaQueryListEvent) => {
      setIsMatching(matches.matches)
    }

    if(watcher.addEventListener) {
      watcher.addEventListener('change', listener);
    } else {
      watcher.addListener(listener);
    }
    return () => {
      if(watcher.removeEventListener) {
        return watcher.removeEventListener('change', listener);
      }
      return watcher.removeListener(listener);
    }
  }, [mediaQuery]);

  return isMatching;
}
