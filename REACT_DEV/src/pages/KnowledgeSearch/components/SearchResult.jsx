import React, { PureComponent } from 'react';
import {Row, Col, message, Spin, Select, Card} from 'antd';
import styles from '../index.less';
import { connect } from 'dva';
import Charts from './Charts';
import Empty from '../../../components/Empty/index';
import Information from './Information';
import SearchInput from '@/pages/KnowledgeSearch/components/SearchInput';
import {BookOutlined, EditOutlined, UserOutlined} from "@ant-design/icons";
import {Option} from "antd/es/mentions";
const { Meta } = Card;

@connect(({ relation, loading }) => ({
  relation,
  loading: loading.effects['relation/getPeople'],
}))
class SearchResult extends PureComponent {
  state = {
    searchValue: [],
    chartsData: [],
    val: false,
    propSearch: [],
    detailData: [],
    mingjia:["欧阳询","张公礼","王羲之","颜真卿","上官灵芝","于志宁","寇谦之","张从申","敦复","敬客","李世民","李儇","李百药","李阳冰","柳识","欧阳通","王献之","米芾","虞世南","魏征","黄庭坚","赵孟頫","李邕","诸遂良","岑文本","盛彪","周绅","周砥"],
    ziti:["楷书","行书","隶书"],
    beitie:["旧拓魏志五种","化度寺邕禅师舍利塔铭","太室西阙铭","虞恭公温彦博碑","鲜于光祖墓志","十七帖","司马昞妻孟敬训墓志","道因法师碑","龙藏寺碑","王居士砖塔铭","麓山寺碑并阴","鲁峻碑","许真人井铭","唐俭碑","淳化阁帖","黄庭堅青原山诗刻石","争座位帖","麻姑山仙坛记","礼器碑并阴","晋唐小楷九种","孔羡碑","九成宫醴泉铭","張從申書李玄靖碑","圭峰定慧禪師碑","皇甫诞碑","史晨前碑","章吉老墓志","瘗鹤铭","集王羲之书三藏圣教序","崔敬邕墓誌","张猛龙碑并阴","中岳嵩高灵庙碑并额","张从申书李玄靖碑"],
    mingjiaSelected:"",
    zitiSelected:"",
    beitieSelected:"",
  };

  componentDidMount() {
    const { parentSearch } = this.props;
    if (parentSearch.length !== 0) {
      this.computedSearchValue(parentSearch);
    }
  }

  getmingjia = () =>{
    const mingjialist = []
    for(var i = 0; i < this.state.mingjia.length; i++) {
      mingjialist.push(<Option key={this.state.mingjia[i]}>{this.state.mingjia[i]}</Option>)
    }
    return mingjialist
  }

  getziti = () =>{
    const zitilist = []
    for(var i = 0; i < this.state.ziti.length; i++) {
      zitilist.push(<Option key={this.state.ziti[i]}>{this.state.ziti[i]}</Option>)
    }
    return zitilist
  }

  getbeitie = () =>{
    const beitielist = []
    for(var i = 0; i < this.state.beitie.length; i++) {
      beitielist.push(<Option key={this.state.beitie[i]}>{this.state.beitie[i]}</Option>)
    }
    return beitielist
  }

  handleChangeMingjia = (value) => {
    this.setState({
      mingjiaSelected:value
    })
  };

  handleChangeZiti = (value) => {
    this.setState({
      zitiSelected:value
    })
  };

  handleChangeBeitie = (value) => {
    this.setState({
      beitieSelected:value
    })
  };

  onChange = (value) => {
    this.setState({
      searchValue: value,
    });
  };

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
    this.handleSearch(arr[0]);
  };

  search = (v) => {
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

  getTable = () => {
    const tableList = []
    console.log(this.state.chartsData)
    this.state.chartsData.map((item) => {
      let description = ""
      let kaishu = ""
      let zhuanwen = ""
      if(item.contribution["楷书"]){
        kaishu = item.contribution["楷书"]
      }
      if(item.contribution["撰文"]){
        zhuanwen = item.contribution["撰文"]
      }
      let image = "http://iiif.library.sh.cn/api/char/"+ item.id.slice(43)
      tableList.push(
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img style={{padding:10}} alt="example" src={image}/>}
          >
            <div style={{textAlign:"left"}}>
              {/*<Meta title={item.charactor}/>*/}
              <BookOutlined />{item.title}<br/>
              <EditOutlined />文中索引：{item.posInTextposInText}
              <br/>
              {kaishu && zhuanwen?(<div><UserOutlined />楷书：{kaishu}<br/><UserOutlined />撰文：{zhuanwen}</div>):kaishu?(<div><UserOutlined />楷书：{kaishu}</div>):zhuanwen?(<div><UserOutlined />撰文：{zhuanwen}</div>):""}
            </div>
          </Card>
        </Col>
      )

    })
    return tableList
  }

  handleSearch = (freetext) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'relation/getPeople',
      payload: {CO:this.state.mingjiaSelected,scriptForm:this.state.zitiSelected,TI:this.state.beitieSelected,freetext:freetext},
      callback: (response) => {
        console.log(response)
        if (response !== null) {
          this.setState({
            chartsData: response,
            propSearch: freetext,
            val: true,
          });
        }
      },
    });
  };

  render() {
    const { loading } = this.props;
    const { chartsData, val, searchValue } = this.state;
    const loadings = loading === undefined ? false : loading;
    return (
      <div>
        <div className={styles.search}>
          <SearchInput
            className={styles.cascader}
            onChange={this.onChange}
            search={this.search}
            searchValue={searchValue}
          />
          <div style={{padding:10}}>
            <div style={{margin:10}}>
              <span style={{ width: '100',textAlign:'left',margin:30,color:"black",fontSize:17}}>名&emsp; &ensp; 家</span>
              <Select  size="large" style={{ width: '15%'}} showSearch placeholder="" onChange={this.handleChangeMingjia}>
                {this.getmingjia()}
              </Select>
              <span style={{ width: '100',textAlign:'left',margin:30,color:"black",fontSize:17}}>字&emsp; &ensp; 体</span>
              <Select  size="large" style={{ width: '15%'}} showSearch placeholder="" onChange={this.handleChangeZiti}>
                {this.getziti()}
              </Select>
              <span style={{ width: '100',textAlign:'left',margin:30,color:"black",fontSize:17}}>来源碑帖</span>
              <Select  size="large" style={{ width: '15%'}} showSearch placeholder="" onChange={this.handleChangeBeitie}>
                {this.getbeitie()}
              </Select>
            </div>
          </div>

          <Spin spinning={loadings}>
            {val && chartsData.length !== 0 ? (
              <Row className={styles.content} gutter={[32, 24]}>
                {this.getTable()}
                {/*<Col span={6}>*/}
                {/*  <Card*/}
                {/*    hoverable*/}
                {/*    style={{ width: 240 }}*/}
                {/*    cover={<img style={{padding:10}} alt="example" src="https://iiif.library.sh.cn/i/3/b9faa5888573c3e801ef150f7f006f9b/1037,1155,279,279/full/0/default.jpg"/>}*/}
                {/*  >*/}
                {/*    <Meta title="Europe Street beat" description={<UserOutlined />+"www.instagram.com"} />*/}
                {/*  </Card>*/}
                {/*</Col>*/}
                {/*<Col span={6}>*/}
                {/*  <Card*/}
                {/*    hoverable*/}
                {/*    style={{ width: 240 }}*/}
                {/*    cover={<img style={{padding:10}} alt="example" src="https://iiif.library.sh.cn/i/3/b9faa5888573c3e801ef150f7f006f9b/1037,1155,279,279/full/0/default.jpg"/>}*/}
                {/*  >*/}
                {/*    <Meta title="Europe Street beat" description="www.instagram.com" />*/}
                {/*  </Card>*/}
                {/*</Col>*/}
                {/*<Col span={6}>*/}
                {/*  <Card*/}
                {/*    hoverable*/}
                {/*    style={{ width: 240 }}*/}
                {/*    cover={<img style={{padding:10}} alt="example" src="https://iiif.library.sh.cn/i/3/b9faa5888573c3e801ef150f7f006f9b/1037,1155,279,279/full/0/default.jpg" />}*/}
                {/*  >*/}
                {/*    <Meta title="龙藏寺碑" description="张公礼(撰文)" />*/}
                {/*  </Card>*/}
                {/*</Col>*/}
                {/*<Col span={6}>*/}
                {/*  <Card*/}
                {/*    hoverable*/}
                {/*    style={{ width: 240 }}*/}
                {/*    cover={<img style={{padding:10}} alt="example" src="https://iiif.library.sh.cn/i/3/b9faa5888573c3e801ef150f7f006f9b/1037,1155,279,279/full/0/default.jpg"/>}*/}
                {/*  >*/}
                {/*    <Meta title="Europe Street beat" description="www.instagram.com" />*/}
                {/*  </Card>*/}
                {/*</Col>*/}
                {/*<Col span={14}>*/}
                {/*  <Charts chartsData={chartsData} propSearch={propSearch} clickWord={this.search} />*/}
                {/*</Col>*/}
                {/*<Col span={10}>*/}
                {/*  <Information*/}
                {/*    chartsData={chartsData}*/}
                {/*    propSearch={propSearch}*/}
                {/*    detailData={detailData}*/}
                {/*  />*/}
                {/*</Col>*/}
              </Row>
            ) : (
              <Empty />
            )}
          </Spin>
        </div>
      </div>
    );
  }
}

export default SearchResult;
