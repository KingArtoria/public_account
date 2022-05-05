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
/* 获取短信验证码 */
export const getSms = data => {
  return request({
    method: 'POST',
    url: '/v41/Alibabasms/sms',
    data: qs.stringify(data),
  });
};
/* 绑定账户 */
export const bindAccount = data => {
  return request({
    method: 'POST',
    url: '/v41/Gzh/bind',
    data: qs.stringify(data),
  });
};
/* 黑卡申请 */
export const applyForBlackCard = data => {
  return request({
    method: 'POST',
    url: '/v41/Blackcard/applyForBlackCard',
    data: qs.stringify(data),
  });
};
/* 获取open_id */
export const getOpenid = data => {
  return request({
    method: 'POST',
    url: '/v41/Gzh/getOpenid',
    data: qs.stringify(data),
  });
};
/* 获取token */
export const getToken = data => {
  return request({
    method: 'POST',
    url: '/v41/Gzh/getToken',
    data: qs.stringify(data),
  });
};
/* 获取用户信息 */
export const getUserInfo = data => {
  return request({
    method: 'POST',
    url: '/v41/member/regetmemberinfo',
    data: qs.stringify(data),
  });
};
/* 创建订单 */
export const goodsorderadd = data => {
  return request({
    method: 'POST',
    url: '/v41/order/goodsorderadd',
    data: qs.stringify(data),
  });
};
/* 微信支付 */
export const pay_gzh = data => {
  return request({
    method: 'POST',
    url: '/v41/wxpay/pay_gzh',
    data: qs.stringify(data),
  });
};
