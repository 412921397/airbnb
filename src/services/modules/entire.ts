import qlRequest from '..';

export function getEntireRoomList(offset = 0, size = 20) {
  return qlRequest.get({
    url: 'entire/list',
    params: {
      offset,
      size
    }
  });
}
