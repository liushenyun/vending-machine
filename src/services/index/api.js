import { MAIN_API_DOMAIN, API_DOMAIN } from '../../common/js/config';

/**
 * @description 获取可领取积分列表
 * server-developer: 庄钊文
 * api-url: http://confluence.icarbonx.cn/pages/viewpage.action?pageId=11506926
 */
const apiIsAuth = () => `${API_DOMAIN}/mini-royal-sugar/person-auth/isAuth`;

export {
  apiIsAuth
}
