import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import 'rc-banner-anim/assets/index.css';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import {BackTop, Button, Card, Col, Row, Tabs, Typography} from 'antd';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import styles from './index.less';
import Knowledge from '@/pages/Welcome/components/Knowledge';
import NumService from '@/pages/Welcome/components/NumService';
import TweenOne from "rc-tween-one";
import SubText from "@/pages/Welcome/components/SubText";
import QueueAnim from 'rc-queue-anim';
import Banner from '@/pages/Welcome/components/Banner'
import Avatar from "antd/es/avatar";
import MainSearch from "@/components/MainSearch";
import {SearchOutlined} from "@ant-design/icons";
import SearchInput from "@/pages/KnowledgeSearch/components/SearchInput";
import Content9 from './Content9';

import {
  Content90DataSource,
} from './data.source';
import './less/antMotionStyle.less';
import AppleOutlined from "@ant-design/icons/lib/icons/AppleOutlined";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import GlobalOutlined from "@ant-design/icons/lib/icons/GlobalOutlined";
import ApartmentOutlined from "@ant-design/icons/lib/icons/ApartmentOutlined";
const { Meta } = Card;
const { TabPane } = Tabs;
class home extends Component {

  state = {
    show: true
  };

  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }

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

    return (
      <div>
        <QueueAnim delay={300} className="queue-simple">
          <div key="a">
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
          <div key="d">
            <Row>
              <Col span={11} >
                <div className={styles.card} style={{border: 20,opacity: 0.8,backgroundImage:"url('http://5b0988e595225.cdn.sohucs.com/images/20191221/6c5b70a3d19a45fe9b91cae18e99ba46.JPG')", textAlign:'center'}}>
                  <div style={{height:200, borderRadius: 20,opacity: 0.8,backgroundColor:"black"}}>
                    <br/>
                    <p style={{color:"white", fontSize: 20}}>历史今天 - 4月12日</p>
                    <p style={{color:"white", fontSize: 15}}>1927年4月12日，以蒋介石为首的国民党新右派在上海发动反对国民党左派和共产党的武装政变，大肆屠杀共产党员、国民党左派及革命群众。</p>
                    <br/>
                  </div>
                </div>
              </Col>
              <Col span={1}/>
              <Col span={11} >
                <div className={styles.card} style={{border: 20,backgroundImage:"url('https://static.allhistory.com/online/view/Index/img/big-relation.e61f.png')", textAlign:'center'}}>
                  <div style={{height:200, borderRadius: 20}}>
                    <br/><p style={{color:"white", margin:20, fontSize: 20}}>用AI图谱，探索一切 未知关系</p><br/>
                    <Button style={{width:150}} type="primary" shape="round" size={"large"}>
                      关系图谱
                    </Button>
                  <br/>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div key="c">
            <div className={styles.tabs}>
              <Tabs defaultActiveKey="1" type="card" size='large' centered>
                <TabPane tab={<span><GlobalOutlined />事件</span>} key="1">
                  <div className={styles.listContainer}>
                    <Content9
                      id="Content9_0"
                      key="Content9_0"
                      dataSource={Content90DataSource}
                    />
                  </div>
                </TabPane>
                <TabPane tab={<span><UserOutlined />人物</span>} key="2">
                  Content of card tab 2
                </TabPane>
                <TabPane tab={<span><ApartmentOutlined />机构</span>} key="3">
                  Content of card tab 3
                </TabPane>
              </Tabs>
            </div>
          </div>
        </QueueAnim>
        {/*<Card className={styles.header}>*/}
        {/*  <Typography className={styles.title}>*/}
        {/*    <div className="texty-demo" style={{ marginTop: 64 }}>*/}
        {/*      <Texty*/}
        {/*        className="title"*/}
        {/*        type="mask-top"*/}
        {/*        delay={400}*/}
        {/*        enter={this.getEnter}*/}
        {/*        interval={this.geInterval}*/}
        {/*        component={TweenOne}*/}
        {/*        componentProps={{*/}
        {/*          animation: [*/}
        {/*            { x: 130, type: 'set' },*/}
        {/*            { x: 100, delay: 500, duration: 450 },*/}
        {/*            {*/}
        {/*              ease: 'easeOutQuart',*/}
        {/*              duration: 300,*/}
        {/*              x: 0,*/}
        {/*            },*/}
        {/*            {*/}
        {/*              letterSpacing: 0,*/}
        {/*              delay: -300,*/}
        {/*              scale: 0.9,*/}
        {/*              ease: 'easeInOutQuint',*/}
        {/*              duration: 1000,*/}
        {/*            },*/}
        {/*            { scale: 1, width: '100%', delay: -300, duration: 1000, ease: 'easeInOutQuint' },*/}
        {/*          ],*/}
        {/*        }}>忆见芳华</Texty>*/}
        {/*    </div>*/}
        {/*  </Typography>*/}
        {/*  <Typography className={styles.text}>*/}
        {/*    <div className="texty-demo" style={{ marginTop: 64, height: 25 }}>*/}
        {/*      <SubText />*/}
        {/*    </div>*/}
        {/*  </Typography>*/}
        {/*</Card>*/}
        {/*<Typography className={styles.text}>*/}
        {/*  <Card style={{ paddingLeft:100, width: "100%", marginTop: 16 }}>*/}
        {/*    <Meta*/}
        {/*      avatar={<Avatar src="http://t10.baidu.com/it/u=283995355,1605075388&fm=179&app=42&f=JPEG?w=120&h=120&s=86CBB45229F0C9EB14F9AC57030040F6" />}*/}
        {/*      title="通知-From: Canton Knowledge Graph Development Team"*/}
        {/*      description="注意：目前知识抽取平台模块及知识问答平台模块为开发测试阶段，无法访问&提供服务！！！"*/}
        {/*    />*/}
        {/*  </Card>*/}
        {/*</Typography>*/}
        {/*<Knowledge />*/}
        {/*<NumService />*/}
        <BackTop>
          <div style={{
            height: 40,
            width: 40,
            lineHeight: '40px',
            borderRadius: 4,
            backgroundColor: 'red',
            color: '#fff',
            textAlign: 'center',
            fontSize: 14}}>UP</div>
        </BackTop>
      </div>
    );
  }
}
export default home;
