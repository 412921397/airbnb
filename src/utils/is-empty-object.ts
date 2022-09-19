interface IObj {
  [key: string]: any;
}

/** 判断对象是否有值 */
export function isEmptyOJB(obj: IObj) {
  return !!Object.keys(obj).length;
}
