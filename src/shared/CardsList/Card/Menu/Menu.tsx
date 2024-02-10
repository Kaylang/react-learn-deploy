import React, {useEffect, useRef, useState} from 'react';
import styles from './menu.css';
import {MenuIcon} from '../../../icons/MenuIcon';
import {GenericList} from '../../../../utils/react/genericList';
import {merge} from '../../../../utils/js/merge';
import {cardMenuList} from '../../../../utils/react/cardMenuList';
import {Dropdown} from '../Dropdown';
import {getCoordinates} from '../../../../utils/js/getCoordinates';

type TCoords = {
  [key: string]: number | undefined;
}

export function Menu() {

  const ref = useRef<HTMLButtonElement>(null);

  const handleItemClick = (text: string) => {
    console.log(text);
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isDropdownOpen]);

  const coords: TCoords = {
    right: 0,
    top: 0
  }

  const [buttonCoord, setButtonCoord] = React.useState(coords);

  useEffect(() => {
    const btnCkicked = ref.current?.getBoundingClientRect();
    const btnTop = btnCkicked?.top;
    const btnRight = btnCkicked?.right;
    const [top, right] = getCoordinates({btnTop, btnRight, widthScreen})
    coords.right = right;
    coords.top = top;
    setButtonCoord(coords);
  }, [widthScreen])


  return (
    <Dropdown
      button={<button className={styles.buttonDropdown} onClick={() => setIsDropdownOpen((prevState) => !prevState)} ref={ref}>
        <MenuIcon />
      </button>}
    >
      <div className={styles.wrapDropdown} style={{top: buttonCoord.top, right: buttonCoord.right}}>
        <ul className={styles.listDropdown}>
          <GenericList list={(widthScreen > 1024 ? cardMenuList : cardMenuList.filter(item => item.isMobile))
            .map(merge({onClick: handleItemClick}))} />
        </ul>
        <button className={styles.btnClose}>Закрыть</button>
      </div>
    </Dropdown >
  );
}
