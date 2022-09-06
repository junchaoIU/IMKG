import React, { PureComponent } from 'react';
import styles from './index.less';
import { PageContainer } from '@ant-design/pro-layout';
import SearchResult from './components/SearchResult';
import MainSearch from '../../components/MainSearch';
import {FireOutlined, FireTwoTone, HighlightOutlined, HighlightTwoTone, SearchOutlined} from '@ant-design/icons';
import SearchInput from '@/pages/KnowledgeSearch/components/SearchInput';
import {Button, Col, Row, Select, Tag} from 'antd';

const { Option } = Select;

class knowledgeSearch extends PureComponent {
  state = {
    searchValue: [],
    mingjia:["欧阳询","张公礼","王羲之","颜真卿","上官灵芝","于志宁","寇谦之","张从申","敦复","敬客","李世民","李儇","李百药","李阳冰","柳识","欧阳通","王献之","米芾","虞世南","魏征","黄庭坚","赵孟頫","李邕","诸遂良","岑文本","盛彪","周绅","周砥"],
    mingjiaSelected:"",
    ziti:["楷书","行书","隶书"],
    zitiSelected:"",
    beitie:["旧拓魏志五种","化度寺邕禅师舍利塔铭","太室西阙铭","虞恭公温彦博碑","鲜于光祖墓志","十七帖","司马昞妻孟敬训墓志","道因法师碑","龙藏寺碑","王居士砖塔铭","麓山寺碑并阴","鲁峻碑","许真人井铭","唐俭碑","淳化阁帖","黄庭堅青原山诗刻石","争座位帖","麻姑山仙坛记","礼器碑并阴","晋唐小楷九种","孔羡碑","九成宫醴泉铭","張從申書李玄靖碑","圭峰定慧禪師碑","皇甫诞碑","史晨前碑","章吉老墓志","瘗鹤铭","集王羲之书三藏圣教序","崔敬邕墓誌","张猛龙碑并阴","中岳嵩高灵庙碑并额","张从申书李玄靖碑"],
    beitieSelected:"",
    val: true,
  };

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

  search = () => {
    this.setState({
      val: false,
    });
  };

  searchHot = (value) => {
    this.setState({
      searchValue: value,
      val: false,
    })
  }

  onChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

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

  render() {
    console.log(this.state.mingjiaSelected)
    const { searchValue, mingjiaSelected, zitiSelected, beitieSelected, val } = this.state;
    return (
      <div>
        {val === true ? (
          <div className={styles.indexSearch}>
            <MainSearch
              logo={<HighlightTwoTone twoToneColor="#60c3ffa6" />}
              text={'单字·检索'}
              engText={'Word Retrieval'}
            />
            <SearchInput
              className={styles.centerCascader}
              onChange={this.onChange}
              search={this.search}
              searchValue={this.state.searchValue}
            />
            <div key="c" style={{textAlign: 'center',paddingBottom:10}}>
              <Button size="small" type="text" onClick={() => this.searchHot("王")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">王</font>
              </Button>
              <Button size="small" type="text" onClick={() => this.searchHot("之")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">之</font>
              </Button>
              <Button size="small" type="text" onClick={() => this.searchHot("福")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">福</font>
              </Button>
              <Button size="small" type="text" onClick={() => this.searchHot("大")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">大</font>
              </Button>
              <Button size="small" type="text" onClick={() => this.searchHot("以")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">以</font>
              </Button>
              <Button size="small" type="text" onClick={() => this.searchHot("民")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">民</font>
              </Button>
            </div>
            <div style={{padding:10}}>
              <div style={{margin:10}}>
                <span style={{ width: '100',textAlign:'left',margin:30,color:"white",fontSize:17}}>名&emsp; &ensp; 家</span>
                <Select  size="large" style={{ width: '15%'}} showSearch placeholder="" onChange={this.handleChangeMingjia}>
                  {this.getmingjia()}
                </Select>
                <span style={{ width: '100',textAlign:'left',margin:30,color:"white",fontSize:17}}>字&emsp; &ensp; 体</span>
                <Select  size="large" style={{ width: '15%'}} showSearch placeholder="" onChange={this.handleChangeZiti}>
                  {this.getziti()}
                </Select>
                <span style={{ width: '100',textAlign:'left',margin:30,color:"white",fontSize:17}}>来源碑帖</span>
                <Select  size="large" style={{ width: '15%'}} showSearch placeholder="" onChange={this.handleChangeBeitie}>
                  {this.getbeitie()}
                </Select>
              </div>
            </div>
          </div>
        ) : (
          <PageContainer>
            <SearchResult parentSearch={searchValue} mingjiaSelected={mingjiaSelected} zitiSelected={zitiSelected} beitieSelected={beitieSelected}/>
          </PageContainer>
        )}
      </div>
    );
  }
}

export default knowledgeSearch;
