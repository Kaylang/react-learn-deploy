import React from 'react';
import styles from './text.css';
import classNames from 'classnames';

type TSizes = 10 | 12 | 14 | 16 | 20 | 28 | 76;

export enum EColor {
  black = 'black',
  white = 'white',
  orange = 'orange',
  green = 'green',
  red = 'red',
  grayC4 = 'grayC4',
  grayEC = 'grayEC',
  grayD9 = 'grayD9',
  grayF3 = 'grayF3',
  grayF4 = 'grayF4',
  gray99 = 'gray99',
  gray66 = 'gray66',
}

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
  color?: EColor;
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    color = EColor.black,
    children,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`t${tabletSize}`]]: tabletSize},
    {[styles[`d${desktopSize}`]]: desktopSize},
    styles[color],
  );

  return (
    <As className={classes}>
      {children}
    </As>
  );
}
