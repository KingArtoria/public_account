import { Toast } from 'vant'
// ? 时间格式化
export const formatTime = (time, format = 'yyyy-MM-dd hh:mm:ss') => {
  if (!time) return '';
  const date = new Date(time);
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds(),
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return format;
}
/**
 * 验证手机号格式
 * @param {*} phone 
 */
export const validPhone = (phone) => {
  return /^1[0-9]{10}$/.test(phone)
}
// ? 获取当前秒
export const getSecond = () => {
  return new Date().getTime() / 1000
}
// ? 生成随机32位字符串加数字
export const randomString = () => {
  return Math.random().toString(36).substr(2, 32)
}
/**
 * 点击复制
 * @param {*} content 
 * @param {*} messageInfo 
 */
 export const copyToClip = (content, messageInfo) => {
  var aux = document.createElement('input');
  aux.setAttribute('value', content);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux);
  Toast({
    message: '复制成功' || messageInfo
  })
}