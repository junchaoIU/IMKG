import React, { Component } from 'react';
import './bannerList.less';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';

const BgElement = Element.BgElement;

class banner extends Component {

  render() {

    return (
      <BannerAnim prefixCls="banner-user" autoPlay>
        <Element
          prefixCls="banner-user-elem"
          key="0"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(https://www.bnuz.edu.cn/images/xx.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            沪上花开
          </TweenOne>
          <TweenOne className="banner-user-text"
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            品味上海文化
          </TweenOne>
        </Element>
        <Element
          prefixCls="banner-user-elem"
          key="1"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            上海历史
          </TweenOne>
          <TweenOne className="banner-user-text"
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            走进 | 你未曾见过的上海
          </TweenOne>
        </Element>
      </BannerAnim>
    );
  }
}
export default banner;
