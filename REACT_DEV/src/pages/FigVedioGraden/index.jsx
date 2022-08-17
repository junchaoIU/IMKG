import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import 'rc-banner-anim/assets/index.css';
import 'rc-texty/assets/index.css';
import {BackTop, Button, Card, Col, Row, Tabs, Typography} from 'antd';
import { Image } from 'antd';
import styles from './index.less';
import TweenOne from "rc-tween-one";
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import SearchInput from "@/pages/KnowledgeSearch/components/SearchInput";
import ReactPlayer from 'react-player'
import {
  Content90DataSource,
} from './data.source';
import './less/antMotionStyle.less';
import AppleOutlined from "@ant-design/icons/lib/icons/AppleOutlined";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import GlobalOutlined from "@ant-design/icons/lib/icons/GlobalOutlined";
import ApartmentOutlined from "@ant-design/icons/lib/icons/ApartmentOutlined";
import PictureOutlined from "@ant-design/icons/lib/icons/PictureOutlined";
import VideoCameraOutlined from "@ant-design/icons/lib/icons/VideoCameraOutlined";
import ReadOutlined from "@ant-design/icons/lib/icons/ReadOutlined";
const { Meta } = Card;
const { TabPane } = Tabs;

class figVedioGraden extends Component {

  state = {
    show: true
  };

  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }


  render() {
    return (
      <div>
        <QueueAnim delay={300} className="queue-simple">
          {/*<div key="a">*/}
          {/*  <Banner/>*/}
          {/*</div>*/}
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
          <div key="c">
            <div className={styles.tabs}>
              <Tabs defaultActiveKey="1" type="card" size='large' centered>
                <TabPane tab={<span><PictureOutlined />图片</span>} key="1">
                  <Row style={{margin:20}}>
                    <Col span={6}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<Image alt="example" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.h0wCnJtI0V7msdtNcn7nAgHaEE?w=328&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" />}
                      >
                        <Meta title="毛泽东何叔衡赴沪" description="xxx博物馆" />
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<Image alt="example" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.h0wCnJtI0V7msdtNcn7nAgHaEE?w=328&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" />}
                      >
                        <Meta title="毛泽东何叔衡赴沪" description="xxx博物馆" />
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<Image alt="example" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.h0wCnJtI0V7msdtNcn7nAgHaEE?w=328&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" />}
                      >
                        <Meta title="毛泽东何叔衡赴沪" description="xxx博物馆" />
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<Image alt="example" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.h0wCnJtI0V7msdtNcn7nAgHaEE?w=328&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" />}
                      >
                        <Meta title="毛泽东何叔衡赴沪" description="xxx博物馆" />
                      </Card>
                    </Col>
                  </Row>
                  <Row style={{margin:20}}>
                    <Col span={6}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<Image alt="example" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.h0wCnJtI0V7msdtNcn7nAgHaEE?w=328&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" />}
                      >
                        <Meta title="毛泽东何叔衡赴沪" description="xxx博物馆" />
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<Image alt="example" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.h0wCnJtI0V7msdtNcn7nAgHaEE?w=328&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" />}
                      >
                        <Meta title="毛泽东何叔衡赴沪" description="xxx博物馆" />
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<Image alt="example" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.h0wCnJtI0V7msdtNcn7nAgHaEE?w=328&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" />}
                      >
                        <Meta title="毛泽东何叔衡赴沪" description="xxx博物馆" />
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<Image alt="example" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.h0wCnJtI0V7msdtNcn7nAgHaEE?w=328&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" />}
                      >
                        <Meta title="毛泽东何叔衡赴沪" description="xxx博物馆" />
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><VideoCameraOutlined />视频</span>} key="2">
                  <Row style={{margin:20}}>
                    <Col span={8}>
                      <Card
                        hoverable
                        style={{margin: 20}}
                        cover={<ReactPlayer width='100%' controls url='https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4' />}
                      >
                        <Meta title="毛泽东何叔衡赴沪" description="xxx博物馆" />
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card
                        hoverable
                        style={{margin: 20}}
                        cover={<ReactPlayer width='100%' controls url='https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4' />}
                      >
                        <Meta title="毛泽东何叔衡赴沪" description="xxx博物馆" />
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card
                        hoverable
                        style={{margin: 20}}
                        cover={<ReactPlayer width='100%' controls url='https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4' />}
                      >
                        <Meta title="毛泽东何叔衡赴沪" description="xxx博物馆" />
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><ReadOutlined />书籍</span>} key="3">
                  <Row style={{margin:20}}>
                    <Col span={4}>
                      <Card style={{ width:180,height:240 }} hoverable cover={
                        <div style={{border: 20,width:180,height:240,backgroundSize: 'cover',backgroundImage:"url('https://static.allhistory.com/online/view/Book/img/transparent-cover.fb86.png')", textAlign:'center'}}>
                          <div style={{opacity: 0.7,width:168, height:232, borderRadius: 5,backgroundSize: 'cover',backgroundImage:"url('https://pic.allhistory.com/T1ZRxCByJT1RCvBVdK.jpeg?ch=210&cw=150&cx=5&cy=0&h=240&w=180')", textAlign:'center'}}>
                            <br/><br/><br/><br/><p style={{color:"white", fontSize: 20}}>上海记忆</p>
                          </div>
                        </div>
                      }>
                      </Card>
                    </Col>
                    <Col span={4}>
                      <Card style={{ width:180,height:240 }} hoverable cover={
                        <div style={{border: 20,width:180,height:240,backgroundSize: 'cover',backgroundImage:"url('https://static.allhistory.com/online/view/Book/img/transparent-cover.fb86.png')", textAlign:'center'}}>
                          <div style={{opacity: 0.7,width:168, height:232, borderRadius: 5,backgroundSize: 'cover',backgroundImage:"url('https://pic.allhistory.com/T1ZRxCByJT1RCvBVdK.jpeg?ch=210&cw=150&cx=5&cy=0&h=240&w=180')", textAlign:'center'}}>
                            <br/><br/><br/><br/><p style={{color:"white", fontSize: 20}}>上海记忆</p>
                          </div>
                        </div>
                      }>
                      </Card>
                    </Col>
                    <Col span={4}>
                      <Card style={{ width:180,height:240 }} hoverable cover={
                        <div style={{border: 20,width:180,height:240,backgroundSize: 'cover',backgroundImage:"url('https://static.allhistory.com/online/view/Book/img/transparent-cover.fb86.png')", textAlign:'center'}}>
                          <div style={{opacity: 0.7,width:168, height:232, borderRadius: 5,backgroundSize: 'cover',backgroundImage:"url('https://pic.allhistory.com/T1ZRxCByJT1RCvBVdK.jpeg?ch=210&cw=150&cx=5&cy=0&h=240&w=180')", textAlign:'center'}}>
                            <br/><br/><br/><br/><p style={{color:"white", fontSize: 20}}>上海记忆</p>
                          </div>
                        </div>
                      }>
                      </Card>
                    </Col>
                    <Col span={4}>
                      <Card style={{ width:180,height:240 }} hoverable cover={
                        <div style={{border: 20,width:180,height:240,backgroundSize: 'cover',backgroundImage:"url('https://static.allhistory.com/online/view/Book/img/transparent-cover.fb86.png')", textAlign:'center'}}>
                          <div style={{opacity: 0.7,width:168, height:232, borderRadius: 5,backgroundSize: 'cover',backgroundImage:"url('https://pic.allhistory.com/T1ZRxCByJT1RCvBVdK.jpeg?ch=210&cw=150&cx=5&cy=0&h=240&w=180')", textAlign:'center'}}>
                            <br/><br/><br/><br/><p style={{color:"white", fontSize: 20}}>上海记忆</p>
                          </div>
                        </div>
                      }>
                      </Card>
                    </Col>
                    <Col span={4}>
                      <Card style={{ width:180,height:240 }} hoverable cover={
                        <div style={{border: 20,width:180,height:240,backgroundSize: 'cover',backgroundImage:"url('https://static.allhistory.com/online/view/Book/img/transparent-cover.fb86.png')", textAlign:'center'}}>
                          <div style={{opacity: 0.7,width:168, height:232, borderRadius: 5,backgroundSize: 'cover',backgroundImage:"url('https://pic.allhistory.com/T1ZRxCByJT1RCvBVdK.jpeg?ch=210&cw=150&cx=5&cy=0&h=240&w=180')", textAlign:'center'}}>
                            <br/><br/><br/><br/><p style={{color:"white", fontSize: 20}}>上海记忆</p>
                          </div>
                        </div>
                      }>
                      </Card>
                    </Col>
                    <Col span={4}>
                      <Card style={{ width:180,height:240 }} hoverable cover={
                        <div style={{border: 20,width:180,height:240,backgroundSize: 'cover',backgroundImage:"url('https://static.allhistory.com/online/view/Book/img/transparent-cover.fb86.png')", textAlign:'center'}}>
                          <div style={{opacity: 0.7,width:168, height:232, borderRadius: 5,backgroundSize: 'cover',backgroundImage:"url('https://pic.allhistory.com/T1ZRxCByJT1RCvBVdK.jpeg?ch=210&cw=150&cx=5&cy=0&h=240&w=180')", textAlign:'center'}}>
                            <br/><br/><br/><br/><p style={{color:"white", fontSize: 20}}>上海记忆</p>
                          </div>
                        </div>
                      }>
                      </Card>
                    </Col>
                  </Row>
                  <Row style={{margin:20}}>
                    <Col span={4}>
                      <Card style={{ width:180,height:240 }} hoverable cover={
                        <div style={{border: 20,width:180,height:240,backgroundSize: 'cover',backgroundImage:"url('https://static.allhistory.com/online/view/Book/img/transparent-cover.fb86.png')", textAlign:'center'}}>
                          <div style={{opacity: 0.7,width:168, height:232, borderRadius: 5,backgroundSize: 'cover',backgroundImage:"url('https://pic.allhistory.com/T1ZRxCByJT1RCvBVdK.jpeg?ch=210&cw=150&cx=5&cy=0&h=240&w=180')", textAlign:'center'}}>
                            <br/><br/><br/><br/><p style={{color:"white", fontSize: 20}}>上海记忆</p>
                          </div>
                        </div>
                      }>
                      </Card>
                    </Col>
                    <Col span={4}>
                      <Card style={{ width:180,height:240 }} hoverable cover={
                        <div style={{border: 20,width:180,height:240,backgroundSize: 'cover',backgroundImage:"url('https://static.allhistory.com/online/view/Book/img/transparent-cover.fb86.png')", textAlign:'center'}}>
                          <div style={{opacity: 0.7,width:168, height:232, borderRadius: 5,backgroundSize: 'cover',backgroundImage:"url('https://pic.allhistory.com/T1ZRxCByJT1RCvBVdK.jpeg?ch=210&cw=150&cx=5&cy=0&h=240&w=180')", textAlign:'center'}}>
                            <br/><br/><br/><br/><p style={{color:"white", fontSize: 20}}>上海记忆</p>
                          </div>
                        </div>
                      }>
                      </Card>
                    </Col>
                    <Col span={4}>
                      <Card style={{ width:180,height:240 }} hoverable cover={
                        <div style={{border: 20,width:180,height:240,backgroundSize: 'cover',backgroundImage:"url('https://static.allhistory.com/online/view/Book/img/transparent-cover.fb86.png')", textAlign:'center'}}>
                          <div style={{opacity: 0.7,width:168, height:232, borderRadius: 5,backgroundSize: 'cover',backgroundImage:"url('https://pic.allhistory.com/T1ZRxCByJT1RCvBVdK.jpeg?ch=210&cw=150&cx=5&cy=0&h=240&w=180')", textAlign:'center'}}>
                            <br/><br/><br/><br/><p style={{color:"white", fontSize: 20}}>上海记忆</p>
                          </div>
                        </div>
                      }>
                      </Card>
                    </Col>
                    <Col span={4}>
                      <Card style={{ width:180,height:240 }} hoverable cover={
                        <div style={{border: 20,width:180,height:240,backgroundSize: 'cover',backgroundImage:"url('https://static.allhistory.com/online/view/Book/img/transparent-cover.fb86.png')", textAlign:'center'}}>
                          <div style={{opacity: 0.7,width:168, height:232, borderRadius: 5,backgroundSize: 'cover',backgroundImage:"url('https://pic.allhistory.com/T1ZRxCByJT1RCvBVdK.jpeg?ch=210&cw=150&cx=5&cy=0&h=240&w=180')", textAlign:'center'}}>
                            <br/><br/><br/><br/><p style={{color:"white", fontSize: 20}}>上海记忆</p>
                          </div>
                        </div>
                      }>
                      </Card>
                    </Col>
                    <Col span={4}>
                      <Card style={{ width:180,height:240 }} hoverable cover={
                        <div style={{border: 20,width:180,height:240,backgroundSize: 'cover',backgroundImage:"url('https://static.allhistory.com/online/view/Book/img/transparent-cover.fb86.png')", textAlign:'center'}}>
                          <div style={{opacity: 0.7,width:168, height:232, borderRadius: 5,backgroundSize: 'cover',backgroundImage:"url('https://pic.allhistory.com/T1ZRxCByJT1RCvBVdK.jpeg?ch=210&cw=150&cx=5&cy=0&h=240&w=180')", textAlign:'center'}}>
                            <br/><br/><br/><br/><p style={{color:"white", fontSize: 20}}>上海记忆</p>
                          </div>
                        </div>
                      }>
                      </Card>
                    </Col>
                    <Col span={4}>
                      <Card style={{ width:180,height:240 }} hoverable cover={
                        <div style={{border: 20,width:180,height:240,backgroundSize: 'cover',backgroundImage:"url('https://static.allhistory.com/online/view/Book/img/transparent-cover.fb86.png')", textAlign:'center'}}>
                          <div style={{opacity: 0.7,width:168, height:232, borderRadius: 5,backgroundSize: 'cover',backgroundImage:"url('https://pic.allhistory.com/T1ZRxCByJT1RCvBVdK.jpeg?ch=210&cw=150&cx=5&cy=0&h=240&w=180')", textAlign:'center'}}>
                            <br/><br/><br/><br/><p style={{color:"white", fontSize: 20}}>上海记忆</p>
                          </div>
                        </div>
                      }>
                      </Card>
                    </Col>
                  </Row>
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
        {/*        }}>碑帖记忆</Texty>*/}
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
export default figVedioGraden;
