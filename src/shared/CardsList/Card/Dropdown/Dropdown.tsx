import React from 'react';
import styles from './dropdown.css';
import {List} from './List';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
}

export function Dropdown({button, children, isOpen}: IDropdownProps) {

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

  const handleOpen = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen && (
        <List onClick={() => setIsDropdownOpen(false)} onClose={() => {setIsDropdownOpen(false)}}>
          {children}
        </List>
      )}
    </div>
  );
}
