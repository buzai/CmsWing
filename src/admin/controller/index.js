// +----------------------------------------------------------------------
// | CmsWing [ 网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2015 http://www.cmswing.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: arterli <arterli@qq.com>
// +----------------------------------------------------------------------
'use strict';

import Base from './base.js';
import {type} from 'os';
/**
 * 后台首页控制器
 * @author 阿特 <arterli@qq.com>
 * http://www.cmswing.com
 */
export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    this.meta_title=this.locale('meta_title_admin');
    let node = process.versions;
    this.assign({
      'version':think.CMSWING_VERSION,
      'OS':type(),
      'nodejs_v':node.node,
      'thinkjs':think.version
    })
    console.log(111)
    return this.display();
  }
}
