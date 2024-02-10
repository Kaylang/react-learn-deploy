type TButtonCoord = number | undefined;

interface IGetCoordinates {
  btnTop: TButtonCoord,
  btnRight: TButtonCoord,
  widthScreen: number
}

  export function getCoordinates(args: IGetCoordinates) {
    const {btnTop, btnRight, widthScreen} = args;
    if (!btnTop || !btnRight) return [0, 0];
    if (widthScreen <= 1024) {
      return [
        window.scrollY + btnTop + 41,
        window.innerWidth - btnRight - 15
      ]
    } else {
      return [
        window.scrollY + btnTop + 51,
        window.innerWidth - btnRight - 78
      ]
    }
  }
