import styles from '@/pages/KnowledgeSearch/index.less';
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Tabs,
  message,
  Checkbox,
  Divider,
  Button,
  Drawer,
  Card,
  Row,
  Col,
  Image,
  Descriptions,
  Tag,
  Collapse, Timeline, Pagination, Spin
} from 'antd';
import {
  CaretRightOutlined, ClockCircleTwoTone, CloudTwoTone,
  DeploymentUnitOutlined, EnvironmentTwoTone,
  FileSearchOutlined,
  PushpinTwoTone,
  TagsOutlined
} from '@ant-design/icons';
import Information from '@/pages/Common/Information';
import BookCard from '@/components/BookCard';
import LineDrawer from '@/pages/Common/LineDrawer';
import {forEach} from "lodash";
const { Meta } = Card;
const { Panel } = Collapse;

@connect(({ information, loading }) => ({
  information,
  loading: loading.effects['information/getTxtExtraction'],
}))

class information extends PureComponent {

  state = {
    image:"",
    cardData:[],
    bg:"",
    process:"",
    note:"",
    checkedList: [],
    indeterminate: true,
    checkAll: false,
    cardVisible: false,
    substance: [],
    loading: true,
    loading2: true,
    changeCard:false,
    txtKGDic:{},
    collapseState:false,
    peopleBg:"",

  }

  componentDidMount() {
    const { propSearch, detailData, chartsData } = this.props;
    this.computedValue(propSearch, detailData, chartsData);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.propSearch !== this.props.chartsData) {
      this.computedValue(nextProps.propSearch, nextProps.detailData, nextProps.chartsData);
    }
  }

  computedValue = (propSearch, detailData, chartsData) => {
    const url = "https://image.gzknowledge.cn/beitie/"+ propSearch + ".jpg"
    // const { categorys } = this.state;
    const cardData = []
    chartsData.links.length>0
      ? chartsData.links.map((item) => {
        if (item.category === '背景故事') {
          this.setState({bg:item.value})
        } else if (item.category === '流传经历') {
          this.setState({process:item.value})
        } else if (item.category === '名家小传') {
          this.setState({peopleBg: item.value})
        }else if (item.category === '题记') {
          this.setState({note:item.value})
        } else if (item.target.includes("null")){}else{
          cardData.push(<Col span={5}>{item.category}:</Col>)
          cardData.push(<Col span={19}>{item.value}</Col>)
        }
      })
      : '';

    this.setState({image:url,cardData:cardData})
  };


  handleTxtKGExtraction = (contentValue) => {
    this.setState({
      changeCard: true,
    });
    console.log(this.state.changeCard)
    const {dispatch} = this.props;
    this.setState({txtKGDic:{"return_code": 500, "return_info": "正在知识抽取中，请稍等...."}})
    dispatch({
      type: 'information/getTxtExtraction',
      payload: contentValue,
      callback: (response) => {
        console.log( response)
        this.setState({
          txtKGDic: response,
          collapseState:true
        });
      },
    });
  }

  cardChange = () =>{
    this.setState({changeCard:false})
  }

  getNewTxt = () =>{
    console.log(this.state.txtKGDic)

    if (this.state.txtKGDic){
      const data = this.state.txtKGDic
      console.log(data)
      const list  = []
      const PERSON = []
      console.log(data["entitiesDic"]["PERSON"].length>0)
      if(data["entitiesDic"]["PERSON"].length>0){
        data["entitiesDic"]["PERSON"].map((item) => {
          PERSON.push(<Tag color="blue">{item}</Tag>)
        })
      }
      const ORGANIZATION = []
      if(data["entitiesDic"]["ORGANIZATION"].length>0){
        data["entitiesDic"]["ORGANIZATION"].map((item) => {
          ORGANIZATION.push(<Tag color="blue">{item}</Tag>)
        })
      }
      const DATE = []
      if(data["entitiesDic"]["DATE"].length>0){
        data["entitiesDic"]["DATE"].map((item) => {
          DATE.push(<Tag color="blue">{item}</Tag>)
        })
      }
      const EVENT = []
      if(data["entitiesDic"]["EVENT"].length>0){
        data["entitiesDic"]["EVENT"].map((item) => {
          EVENT.push(<Tag color="blue">{item}</Tag>)
        })
      }
      const mingjia = []
      if(data["entitiesDic"]["名家"].length>0){
        data["entitiesDic"]["名家"].map((item) => {
          mingjia.push(<Tag color="blue">{item}</Tag>)
        })
      }
      const beitie = []
      if(data["entitiesDic"]["碑帖"].length>0){
        data["entitiesDic"]["碑帖"].map((item) => {
          beitie.push(<Tag color="blue">{item}</Tag>)
        })
      }
      const tuoben = []
      if(data["entitiesDic"]["拓本"].length>0){
        data["entitiesDic"]["拓本"].map((item) => {
          tuoben.push(<Tag color="blue">{item}</Tag>)
        })
      }
      const ziti = []
      if(data["entitiesDic"]["字体"].length>0){
        data["entitiesDic"]["字体"].map((item) => {
          ziti.push(<Tag color="blue">{item}</Tag>)
        })
      }
      const chaodai = []
      if(data["entitiesDic"]["朝代"].length>0){
        data["entitiesDic"]["朝代"].map((item) => {
          chaodai.push(<Tag color="blue">{item}</Tag>)
        })
      }
      const jiguan = []
      if(data["entitiesDic"]["籍贯"].length>0){
        data["entitiesDic"]["籍贯"].map((item) => {
          jiguan.push(<Tag color="blue">{item}</Tag>)
        })
      }
      list.push(mingjia,beitie,tuoben,ziti,chaodai,jiguan,ORGANIZATION,PERSON,EVENT,DATE)
      console.log(list)
      return list
    }
  }

  onInformation = () => {
    const detail = this.state.txtKGDic['allLine']
    return (
      <Timeline className={styles.time} mode={'left'}>
        {detail.map((item, index) => {
          return (
            <Timeline.Item key={index} dot={<TagsOutlined style={{ fontSize: '20px' }} />}>
              {/*<p>*/}
              {/*  <PushpinTwoTone twoToneColor="#eb2f96" className={styles.icon} />*/}
              {/*  {item[0]}*/}
              {/*</p>*/}
              <p>
                <ClockCircleTwoTone twoToneColor="#52c41a" className={styles.icon} />
                {item[0]}
              </p>
              <p>
                <EnvironmentTwoTone twoToneColor="#adc6ff" className={styles.icon} />
                {item[1]}
              </p>
              <p className={styles.detail} >
                <CloudTwoTone twoToneColor="#87e8de" className={styles.icon} />
                {item[2]}
              </p>
              {/*<Tooltip*/}
              {/*  color={'#ff969f'}*/}
              {/*  placement="topLeft"*/}
              {/*  title="点击事件语料关联"*/}
              {/*  arrowPointAtCenter*/}
              {/*>*/}
              {/*  <p className={styles.detail} onClick={() => this.onBack(item[3])}>*/}
              {/*    <CloudTwoTone twoToneColor="#87e8de" className={styles.icon} />*/}
              {/*    {item[3]}*/}
              {/*  </p>*/}
              {/*</Tooltip>*/}
            </Timeline.Item>
          );
        })}
      </Timeline>
    );
  };

  render() {
    return (
      <div className={styles.cardContainer}>
        <Tabs type="card" className={styles.outCard}>
          <Tabs.TabPane tab="实例简介" key="1" className={styles.innerCard}>
            {/*<Information propSearch={propSearch} detailData={detailData} chartsData={chartsData} />*/}
            <h2>{this.props.propSearch}</h2>
            <Divider />
            <Row>
              <Col span={7}>
                <Image
                  width={160}
                  src={this.state.image}
                />
              </Col>
              <Col span={16} style={{fontSize:17,margin:5}}>
                <div style={{margin:8,height:400,overflow:'auto'}}>
                  <Row>
                    {this.state.cardData}
                    {/*<Col span={5}>首&ensp;&ensp;&ensp;&ensp;题:</Col><Col span={19}>化度寺邕禅师舍利塔铭</Col>*/}
                    {/*<Col span={5}>责&ensp;任&ensp;者:</Col><Col span={19}>李百药（撰文），欧阳询（楷书）</Col>*/}
                    {/*<Col span={5}>书&ensp;&ensp;&ensp;&ensp;体:</Col><Col span={19}>楷书</Col>*/}
                    {/*<Col span={5}>版&ensp;&ensp;&ensp;&ensp;本:</Col><Col span={19}>唐原石北宋拓本</Col>*/}
                    {/*<Col span={5}>数&ensp;&ensp;&ensp;&ensp;量:</Col><Col span={19}>27开</Col>*/}
                    {/*<Col span={5}>尺&ensp;&ensp;&ensp;&ensp;寸:</Col><Col span={19}>册高32.9厘米，宽20厘米。碑文九开半，帖芯高24.1厘米，宽14.8 厘米。</Col>*/}
                    {/*<Col span={5}>刻立年代:</Col><Col span={19}>唐贞观五年（31）</Col>*/}
                    {/*<Col span={5}>馆&ensp;藏&ensp;地:</Col><Col span={19}>上海图书馆</Col>*/}
                    {/*<Col span={5}>来源书目:</Col><Col span={19}>翰墨上海图书馆藏珍碑帖丛刊（特辑） 2012年12月</Col>*/}
                  </Row>
                </div>
              </Col>
            </Row>
          </Tabs.TabPane>
          {this.state.bg?
            <Tabs.TabPane tab="背景故事" key="4">
              <div style={{margin:8,height:500,overflow:'auto'}}>
                <div style={{textAlign:"center"}}>
                  {this.state.changeCard?<Button icon={<DeploymentUnitOutlined />}type="primary" size={"large"} style={{width:"80%"}}
                                                 onClick={() => this.cardChange()}>返回</Button>:
                    <Button icon={<DeploymentUnitOutlined />}type="primary" size={"large"} style={{width:"80%"}}
                            onClick={() => this.handleTxtKGExtraction(this.props.propSearch)}>知识抽取</Button>}
                </div><br/>
                {this.state.changeCard?
                  <div>
                    <Spin tip="知识抽取需要时间，请稍等5-7s..." spinning={!this.state.collapseState}>
                      {this.state.collapseState?
                        <Collapse
                          bordered={false}
                          defaultActiveKey={['1']}
                          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                          className="site-collapse-custom-collapse"
                        >
                          <Panel header="名家" key="1" className="site-collapse-custom-panel">
                            <p>{this.getNewTxt()[0]}</p>
                          </Panel>
                          <Panel header="碑帖" key="2" className="site-collapse-custom-panel">
                            <p>{this.getNewTxt()[1]}</p>
                          </Panel>
                          <Panel header="拓本" key="3" className="site-collapse-custom-panel">
                            <p>{this.getNewTxt()[2]}</p>
                          </Panel>
                          <Panel header="字体" key="3" className="site-collapse-custom-panel">
                            <p>{this.getNewTxt()[3]}</p>
                          </Panel>
                          <Panel header="朝代" key="3" className="site-collapse-custom-panel">
                            <p>{this.getNewTxt()[4]}</p>
                          </Panel>
                          <Panel header="籍贯" key="3" className="site-collapse-custom-panel">
                            <p>{this.getNewTxt()[5]}</p>
                          </Panel>
                          <Panel header="组织机构" key="3" className="site-collapse-custom-panel">
                            <p>{this.getNewTxt()[6]}</p>
                          </Panel>
                          <Panel header="其他人物" key="3" className="site-collapse-custom-panel">
                            <p>{this.getNewTxt()[7]}</p>
                          </Panel>
                          <Panel header="事件" key="3" className="site-collapse-custom-panel">
                            <p>{this.getNewTxt()[8]}</p>
                          </Panel>
                          <Panel header="时间点" key="3" className="site-collapse-custom-panel">
                            <p>{this.getNewTxt()[9]}</p>
                          </Panel>
                          <Panel header="时空线" key="3" className="site-collapse-custom-panel">
                            <p>{this.onInformation()}</p>
                          </Panel>
                        </Collapse>:null}
                    </Spin>
                  </div>:
                  <div dangerouslySetInnerHTML={
                    {__html:this.state.bg}
                  }>
                  </div>}</div>
            </Tabs.TabPane>:null}
          {this.state.peopleBg?
            <Tabs.TabPane tab="名家小传" key="4" className={styles.book}>
              <div style={{margin:8}}>{this.state.peopleBg}</div>
            </Tabs.TabPane>:null}
          {this.state.process?
            <Tabs.TabPane tab="流传经历" key="2" className={styles.book}>
              <div style={{margin:8}}>{this.state.process}</div>
            </Tabs.TabPane>:null}
          {this.state.note?
            <Tabs.TabPane tab="题记" key="3" className={styles.book}>
              <div style={{margin:8}}>{this.state.note}</div>
            </Tabs.TabPane>:null}
        </Tabs>
      </div>
    );
  }
}

export default information;
