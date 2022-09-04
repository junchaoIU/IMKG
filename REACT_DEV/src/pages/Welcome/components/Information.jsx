import styles from '@/pages/KnowledgeSearch/index.less';
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {Tabs, message, Checkbox, Divider, Button, Drawer, Card, Row, Col, Image, Descriptions, Tag} from 'antd';
import {DeploymentUnitOutlined, FileSearchOutlined} from '@ant-design/icons';
import Information from '@/pages/Common/Information';
import BookCard from '@/components/BookCard';
import LineDrawer from '@/pages/Common/LineDrawer';
import {forEach} from "lodash";
const { Meta } = Card;

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
    txtKGDic:{"return_code": 500, "return_info": "暂无请求",
      "result":{"allLine": [],
        "entitiesDic": {"ORGANIZATION": [], "PERSON": [], "LOCATION": [], "DATE": [], "EVENT": [], "名家": [], "碑帖": [], "拓本": []},
        "personLineDic": {},
        "eventLineDic": {},
        "organizationLineDic": {}
      }},
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
          this.setState({bg:item.target})
        } else if (item.category === '流传经历') {
          this.setState({process:item.target})
        } else if (item.category === '题记') {
          this.setState({note:item.target})
        } else if (item.target === 'null'){}else{
          cardData.push(<Col span={5}>{item.category}:</Col>)
          cardData.push(<Col span={19}>{item.target}</Col>)
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
    // this.setState({txtKGDic:{"return_code": 500, "return_info": "正在知识抽取中，请稍等...."}})
    dispatch({
      type: 'information/getTxtExtraction',
      payload: contentValue,
      callback: (response) => {
        console.log( response)
        if (response["return_code"] === 200){
          this.setState({
            txtKGDic: response,
          });
        }
      },
    });
  }

  cardChange = () =>{
    this.setState({changeCard:false})
  }

  // getNewTxt = () =>{
  //   console.log(this.state.txtKGDic)
  //
  //   if (this.state.changeCard){
  //     const data = this.state.txtKGDic["result"]
  //     const list  = []
  //     if(data["entitiesDic"]["PERSON"].size>0){
  //       data["entitiesDic"]["PERSON"].forEach((item) => {
  //         list.push(<Tag color="magenta">item</Tag>)
  //       })
  //     }
  //     console.log(list)
  //     return list
  //   }
  // }

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
                            onClick={() => this.handleTxtKGExtraction(this.state.bg)}>知识抽取</Button>}
                </div><br/>
                {this.state.changeCard?
                  <div>1</div>:
                  <div>
                    {this.state.bg}
                  </div>}</div>
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
