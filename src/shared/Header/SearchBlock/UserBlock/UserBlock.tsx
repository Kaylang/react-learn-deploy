import React from 'react';
import styles from './userblock.css';
import {AnonimIcon} from '../../../icons';
import {EColor, Text} from '../../../Text';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({avatarSrc, username, loading}: IUserBlockProps) {
  return (
    <a className={styles.userBox} href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}>
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img className={styles.avatarImage} src={avatarSrc} alt="user avatar" />
          : <AnonimIcon />
        }
      </div>

      <div className={styles.username}>
        {loading ? (
          <Text size={20} color={EColor.gray99}>'Загрузка...'</Text>
        ) : (
          <Text size={20} color={username ? EColor.black : EColor.gray99}>{username || 'Аноним'}</Text>
        )}
      </div>
    </a>
  );
}
