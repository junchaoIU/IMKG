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
            碑帖记忆
          </TweenOne>
          <TweenOne className="banner-user-text"
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            品味人类文明的证明
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
            浅识碑帖
          </TweenOne>
          <TweenOne className="banner-user-text"
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            碑，竖石也。帖，以帛作书，书于帛者曰帖。
          </TweenOne>
        </Element>
      </BannerAnim>
    );
  }
}
export default banner;
