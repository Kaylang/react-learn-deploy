import React from 'react';
import * as icons from '../icons';
import styles from './icon.css';
import classNames from 'classnames';


interface IIconProps {
  iconName: EIcons;
  iconWidth?: TIconSize;
  iconHeight?: TIconSize;
}

type TIconSize = 32 | 24 | 16 | 8;

export enum EIcons {
  comments = 'commentsIcon',
  share = 'shareIcon',
  hide = 'hideIcon',
  save = 'saveIcon',
  complain = 'complainIcon',
}

export const iconList = {
  [EIcons.comments]: <icons.CommentsIcon />,
  [EIcons.share]: <icons.ShareIcon />,
  [EIcons.hide]: <icons.HideIcon />,
  [EIcons.save]: <icons.SaveIcon />,
  [EIcons.complain]: <icons.ComplainIcon />,
}

export function Icon(props: IIconProps) {
  const {iconName, iconWidth = 16, iconHeight = iconWidth} = props;

  const classes = classNames(
    styles['icon-container'],
    styles[`w${iconWidth}`],
    styles[`h${iconHeight}`],
  );

  return (
    <div className={classes}>
      {iconList[iconName]}
    </div>
  );
};
