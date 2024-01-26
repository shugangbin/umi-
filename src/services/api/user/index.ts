import { request } from '@@/plugin-request';
type bodyType = {
  id: number;
};
export const getUserInfo = (params: bodyType) => {
  request('/api/user', {
    params,
    timeout: 1000,
  });
};
