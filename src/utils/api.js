import request from './request';
import qs from 'qs';
/* 推荐接口 */
export const getResponses = data => {
  return request({
    method: 'POST',
    url: '/v41/Comprehensive/getResponses',
    data: qs.stringify(data),
  });
};
/* 资源详情 */
export const reGetObtainInfo = data => {
  return request({
    method: 'POST',
    url: '/v41/Comprehensive/reGetObtainInfo',
    data: qs.stringify(data),
  });
};
/* 查看手机号 */
export const getContactInfo = data => {
  return request({
    method: 'POST',
    url: '/v41/Comprehensive/reGetContactInfo',
    data: qs.stringify(data),
  });
};