type TGetHours = (a: number) => number;

export const getHours:TGetHours = (a) => Math.floor((Date.now() - a) / 3600000);
