import React, { Component } from 'react';
import styles from './index.less';
import { PageContainer } from '@ant-design/pro-layout';
import SearchResult from './components/SearchResult';
import {FireTwoTone, HourglassOutlined, HourglassTwoTone} from '@ant-design/icons';
import MainSearch from '@/components/MainSearch';
import SearchInput from './components/SearchInput';
import {Button} from "antd";

class timespacesEarch extends Component {
  state = {
    val: true,
    value1: '',
    value2: '',
    mode: 'time',
  };

  handleModeChange = (value) => {
    this.setState({
      mode: value,
      value1: '',
      value2: '',
    });
  };

  searchHot = (value1,value2,mode) => {
    if(mode === 1){
      this.setState({
        value1: value1,
        mode: 'time',
        val: false,
      })

    }else if(mode === 2){
      this.setState({
        value2: value2,
        mode: 'space',
        val: false,
      })

    }else{
      this.setState({
        value1: value1,
        value2: value2,
        mode: 'timespace',
        val: false,
      })

    }
  }

  valueChange1 = (e) => {
    this.setState({
      value1: e.target.value,
    });
  };
  valueChange2 = (e) => {
    this.setState({
      value2: e.target.value,
    });
  };
  search = () => {
    this.setState({
      val: false,
    });
  };

  render() {
    const { val, value1, value2, mode } = this.state;
    return (
      <div>
        <div>
          {val === true ? (
            <div className={styles.indexSearch}>
              <MainSearch
                logo={<HourglassTwoTone twoToneColor="#60c3ffa6" />}
                text={'时空·检索'}
                engText={'TimeSpaces Retrieval'}
              />
              <SearchInput
                mode={mode}
                value1={value1}
                value2={value2}
                handleModeChange={this.handleModeChange}
                valueChange1={this.valueChange1}
                valueChange2={this.valueChange2}
                search={this.search}
              />
              <div key="c" style={{textAlign: 'center',paddingBottom:40}}>
                <Button size="small" type="text" onClick={() => this.searchHot("同治三年","",1)}>
                  <FireTwoTone twoToneColor="#ffffff" /><font color="white">同治三年</font>
                </Button>
                <Button size="small" type="text" onClick={() => this.searchHot("","龙藏寺",2)}>
                  <FireTwoTone twoToneColor="#ffffff" /><font color="white">龙藏寺</font>
                </Button>
                <Button size="small" type="text" onClick={() => this.searchHot("民国十五年","",1)}>
                  <FireTwoTone twoToneColor="#ffffff" /><font color="white">民国十五年</font>
                </Button>
                <Button size="small" type="text" onClick={() => this.searchHot("1926","",1)}>
                  <FireTwoTone twoToneColor="#ffffff" /><font color="white">1926</font>
                </Button>
                <Button size="small" type="text" onClick={() => this.searchHot("民国","吴湖帆",3)}>
                  <FireTwoTone twoToneColor="#ffffff" /><font color="white">民国、吴湖帆</font>
                </Button>
                <Button size="small" type="text" onClick={() => this.searchHot("乾隆五十五年","",1)}>
                  <FireTwoTone twoToneColor="#ffffff" /><font color="white">乾隆五十五年</font>
                </Button>
                <Button size="small" type="text" onClick={() => this.searchHot("","吴湖帆",2)}>
                  <FireTwoTone twoToneColor="#ffffff" /><font color="white">吴湖帆</font>
                </Button>
                <Button size="small" type="text" onClick={() => this.searchHot("贞观五年","",1)}>
                  <FireTwoTone twoToneColor="#ffffff" /><font color="white">贞观五年</font>
                </Button>
              </div>
            </div>
          ) : (
            <PageContainer>
              <SearchResult parentValue1={value1} parentValue2={value2} mode={mode} />
            </PageContainer>
          )}
        </div>
      </div>
    );
  }
}
export default timespacesEarch;
