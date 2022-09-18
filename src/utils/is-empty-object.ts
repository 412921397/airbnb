interface IObj {
  [key: string]: any;
}

export function isEmptyOJB(obj: IObj) {
  return !!Object.keys(obj).length;
}
