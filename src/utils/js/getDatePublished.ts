import {declOfNum} from './declOfNum';
import {getHours} from './getHours';

type TGetDatePublished = (a: number) => string;

enum EMonths {
  января,
  февраля,
  марта,
  апреля,
  мая,
  июня,
  июля,
  августа,
  сентября,
  октября,
  ноября,
  декабря
}

export const getDatePublished:TGetDatePublished = (a) => {
  const createdMult = a * 1000;
  const nowDate = new Date().valueOf();
  if (((nowDate - createdMult) / 86400000) < 1 ) {
    return (`${getHours(createdMult)} ${declOfNum(getHours(createdMult), ['час', 'часа', 'часов'])} назад`);
  }

  return `${new Date(createdMult).getDate()} ${EMonths[new Date(createdMult).getMonth()]} ${new Date(createdMult).getFullYear()}`
}
