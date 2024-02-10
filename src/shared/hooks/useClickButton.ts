import {useEffect, useRef} from 'react';

interface IClickButton {
  onClick?: () => void;
}

export function useClickButton(props: IClickButton) {
    const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        console.log(event.target);
        // props.onClick?.();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [])
  return ref;
}
