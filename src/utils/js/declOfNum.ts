type TDeclOfNum = (n: number, t: string[]) => string;

export const declOfNum:TDeclOfNum = (n, t) => {
  n = Math.abs(n) % 100;
  let n1 = n % 10;
  if (n > 10 && n < 20) { return t[2]; }
  if (n1 > 1 && n1 < 5) { return t[1]; }
  if (n1 == 1) { return t[0]; }
  return t[2];
}
