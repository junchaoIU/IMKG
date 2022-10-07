import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import 'rc-banner-anim/assets/index.css';
import 'rc-texty/assets/index.css';
import {BackTop, Button, Card, Tabs, Tag,} from 'antd';
import {FireOutlined} from '@ant-design/icons';
import styles from './index.less';
import QueueAnim from 'rc-queue-anim';
import Banner from '@/pages/Welcome/components/Banner'

import './less/antMotionStyle.less';
import SearchResult from "@/pages/Welcome/components/SearchResult";
import {PageContainer} from "@ant-design/pro-layout";
import IntroCharts from "@/pages/Welcome/components/IntroCharts";
import SearchInput from "@/pages/Welcome/components/SearchInput";
class home extends Component {

  state = {
    searchValue:"",
    show: true,
    val:true
  };

  componentDidMount() {
    const messages = this.props.location.query.dotData
    if(messages){
      this.setState({
        searchValue:messages,
        val: false,
      })
    }
  }

  search = () => {
    this.setState({
      val: false,
    });
  };

  onChange = (value) => {
    this.setState({
      searchValue: value,
    });
  };

  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }

  searchHot = (value) => {
    this.setState({
      searchValue: value,
      val: false,
    })
  }

  computedSearchValue = (value) => {
    let arr = [];
    if (typeof value === 'string') {
      arr[0] = value;
    } else {
      arr = value;
    }
    this.setState({
      searchValue: arr,
    });
    this.search(arr);
  };

  searchIntro = (v) => {
    if (v.length !== undefined) {
      this.setState({
        searchValue: v,
      });
    }
    const { searchValue } = this.state;
    this.computedSearchValue(searchValue);
    this.setState({
      chartsData: [],
      val: false,
    });
  };

  geInterval = (e) => {
    switch (e.index) {
      case 0:
        return 0;
      case 1:
        return 150;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 150 + 450 + (e.index - 2) * 10;
      default:
        return 150 + 450 + (e.index - 6) * 150;
    }
  }

  getEnter = (e) => {
    const t = {
      opacity: 0,
      scale: 0.8,
      y: '-100%',
    };
    if (e.index >= 2 && e.index <= 6) {
      return { ...t, y: '-30%', duration: 150 };
    }
    return t;
  }

  render() {
    const { searchValue, val } = this.state;
    return (
      <div>
        {val === true? (
          <div>
            <QueueAnim delay={300} className="queue-simple">
              <div key="a" style={{height:150}}>
                <Banner/>
              </div>
              <div key="b">
                <div className={styles.indexSearch}>
                  <SearchInput
                    className={styles.centerCascader}
                    onChange={this.onChange}
                    search={this.search}
                    searchValue={this.state.searchValue}
                  />
                </div>
              </div>
              <div key="c" style={{textAlign: 'center'}}>
                <Button size="small" type="text" onClick={() => this.searchHot("欧阳询")}>
                  <FireOutlined/>欧阳询
                </Button>
                <Button size="small" type="text" onClick={() => this.searchHot("楷书")}>
                  <FireOutlined/>楷书
                </Button>
                <Button size="small" type="text" onClick={() => this.searchHot("宋朝")}>
                  <FireOutlined/>宋朝
                </Button>
                <Button size="small" type="text" onClick={() => this.searchHot("隋柱国弘义明公皇甫府君碑")}>
                  <FireOutlined/>隋柱国弘义明公皇甫府君碑
                </Button>
                <Button size="small" type="text" onClick={() => this.searchHot("化度寺邕禅师舍利塔铭")}>
                  <FireOutlined/>化度寺邕禅师舍利塔铭
                </Button>
                <Button size="small" type="text" onClick={() => this.searchHot("李世民")}>
                  <FireOutlined/>李世民
                </Button>
              </div>
              <br/>
              <div key="e" style={{textAlign: 'center'}}>
                <IntroCharts clickWord={this.searchIntro}/>
              </div>
            </QueueAnim>
            <BackTop>
              <div style={{
                height: 40,
                width: 40,
                lineHeight: '40px',
                borderRadius: 4,
                backgroundColor: 'red',
                color: '#fff',
                textAlign: 'center',
                fontSize: 14
              }}>UP
              </div>
            </BackTop>
          </div>
          ) :
          (
            <PageContainer>
              <SearchResult parentSearch={searchValue} />
            </PageContainer>
          )
        }
      </div>
    );
  }
}
export default home;
