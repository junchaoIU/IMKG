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
        {val === true ? (
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
                <Button size="small" type="text" onClick={() => this.searchHot("王")}>
                  <FireOutlined/>王
                </Button>
                <Button size="small" type="text" onClick={() => this.searchHot("欧阳询楷书 魏征撰文")}>
                  <FireOutlined/>欧阳询楷书 魏征撰文
                </Button>
                <Button size="small" type="text" onClick={() => this.searchHot("化度寺邕禅师")}>
                  <FireOutlined/>化度寺邕禅师
                </Button>
                <Button size="small" type="text" onClick={() => this.searchHot("李世民")}>
                  <FireOutlined/>李世民
                </Button>
              </div>
              <br/>
              <div key="e" style={{textAlign: 'center'}}>
                <IntroCharts clickWord={this.searchIntro}/>
              </div>
              {/*<div key="d">*/}
              {/*  <Row gutter={16} justify="space-evenly">*/}
              {/*    <Col span={11}>*/}
              {/*      /!*<div className={styles.card} style={{border: 20,opacity: 0.8,backgroundImage:"url('http://5b0988e595225.cdn.sohucs.com/images/20191221/6c5b70a3d19a45fe9b91cae18e99ba46.JPG')", textAlign:'center'}}>*!/*/}
              {/*      /!*  <div style={{height:200, borderRadius: 20,opacity: 0.8,backgroundColor:"black"}}>*!/*/}
              {/*      /!*    <br/>*!/*/}
              {/*      /!*    <p style={{color:"white", fontSize: 20}}>历史今天 - 4月12日</p>*!/*/}
              {/*      /!*    <p style={{color:"white", fontSize: 15}}>1927年4月12日，以蒋介石为首的国民党新右派在上海发动反对国民党左派和共产党的武装政变，大肆屠杀共产党员、国民党左派及革命群众。</p>*!/*/}
              {/*      /!*    <br/>*!/*/}
              {/*      /!*  </div>*!/*/}
              {/*      /!*</div>*!/*/}
              {/*      <div className={styles.card} style={{border: 20,backgroundImage:"url('https://static.allhistory.com/online/view/Index/img/big-relation.e61f.png')", textAlign:'center'}}>*/}
              {/*        <div style={{height:150, borderRadius: 20}}>*/}
              {/*          <br/><p style={{color:"white", margin:20, fontSize: 20}}>用AI图谱，探索一切 未知关系</p>*/}
              {/*          <Button style={{width:150}} ghost size={"large"}>*/}
              {/*            关系图谱*/}
              {/*          </Button>*/}
              {/*          <br/>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*    </Col>*/}
              {/*    <Col span={11} >*/}
              {/*      <div className={styles.card} style={{border: 20,backgroundImage:"url('https://static.allhistory.com/online/view/Index/img/big-map.d1b0.png')", textAlign:'center'}}>*/}
              {/*        <div style={{height:150, borderRadius: 20}}>*/}
              {/*          <br/><p style={{color:"white", margin:20, fontSize: 20}}>跨越时空界限，探索历史文明</p>*/}
              {/*          <Button style={{width:150}} ghost size={"large"}>*/}
              {/*            时空检索*/}
              {/*          </Button>*/}
              {/*        <br/>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*    </Col>*/}
              {/*  </Row>*/}
              {/*</div>*/}
              {/*<div key="c">*/}
              {/*  <div className={styles.tabs}>*/}
              {/*    <Tabs defaultActiveKey="1" type="card" size='large' centered>*/}
              {/*      <TabPane tab={<span><GlobalOutlined />事件</span>} key="1">*/}
              {/*        <div className={styles.listContainer}>*/}
              {/*          <Content9*/}
              {/*            id="Content9_0"*/}
              {/*            key="Content9_0"*/}
              {/*            dataSource={Content90DataSource}*/}
              {/*          />*/}
              {/*        </div>*/}
              {/*      </TabPane>*/}
              {/*      <TabPane tab={<span><UserOutlined />人物</span>} key="2">*/}
              {/*        Content of card tab 2*/}
              {/*      </TabPane>*/}
              {/*      <TabPane tab={<span><ApartmentOutlined />机构</span>} key="3">*/}
              {/*        Content of card tab 3*/}
              {/*      </TabPane>*/}
              {/*    </Tabs>*/}
              {/*  </div>*/}
              {/*</div>*/}
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
