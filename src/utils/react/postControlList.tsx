import React from 'react';
import {Icon, EIcons} from '../../shared/Icon/Icon';
import {generateId} from '../js/generateRandomIndex';
import styles from "../../shared/CardsList/Card/Menu/menu.css";

export const postControlList = [
  {
    As: 'li' as const,
    image: <Icon iconName={EIcons.share} iconWidth={16} />,
    text: 'Поделиться',
    className: styles.dropdownListItem,
    isResponce: true,
  },
  {
    As: 'li' as const,
    image: <Icon iconName={EIcons.hide} iconWidth={16} />,
    text: 'Скрыть',
    className: styles.dropdownListItem,
    isResponce: false,
  },
  {
    As: 'li' as const,
    image: <Icon iconName={EIcons.save} iconWidth={16} />,
    text: 'Сохранить',
    className: styles.dropdownListItem,
    isResponce: false,
  },
  {
    As: 'li' as const,
    image: <Icon iconName={EIcons.complain} iconWidth={16} />,
    text: 'Пожаловаться',
    className: styles.dropdownListItem,
    isResponce: true,
  },
].map(generateId);
