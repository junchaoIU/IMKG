import React, { Component } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import Search from './components/Search';
import styles from '@/pages/Back/index.less';
import { Input, Button, Row, Col } from 'antd';
import {FireTwoTone, InteractionTwoTone, UserOutlined} from '@ant-design/icons';
import MainSearch from '@/components/MainSearch';

class peopleBack extends Component {
  state = {
    val: true,
    searchValue: '',
  };

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

  render() {
    const { val, searchValue } = this.state;
    return (
      <div>
        {val === true ? (
          <div className={styles.indexSearch}>
            <MainSearch
              logo={<InteractionTwoTone twoToneColor="#60c3ffa6" />}
              text={'时空·演化'}
              engText={'Spatiotemporal Evolution'}
            />
            <Input
              size={'large'}
              className={styles.input}
              placeholder={'请输入想要演化的实体：（例如：孙中山）'}
              allowClear
              onChange={this.onChange}
            />
            <Button type="primary" className={styles.button} size={'large'} onClick={this.search}>
              开始检索
            </Button>
            <div key="c" style={{textAlign: 'center',paddingBottom:40}}>
              <Button size="small" type="text" onClick={() => this.searchHot("化度寺邕禅师舍利塔铭")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">化度寺邕禅师舍利塔铭</font>
              </Button>
              <Button size="small" type="text" onClick={() => this.searchHot("化度寺邕禅师舍利塔铭")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">虞恭公温彦博碑</font>
              </Button>
              <Button size="small" type="text" onClick={() => this.searchHot("化度寺邕禅师舍利塔铭")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">九成宫醴泉铭</font>
              </Button>
              <Button size="small" type="text" onClick={() => this.searchHot("化度寺邕禅师舍利塔铭")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">晋唐小楷九种</font>
              </Button>
              <Button size="small" type="text" onClick={() => this.searchHot("化度寺邕禅师舍利塔铭")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">麻姑山仙坛记</font>
              </Button>
              <Button size="small" type="text" onClick={() => this.searchHot("化度寺邕禅师舍利塔铭")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">龙藏寺碑</font>
              </Button>
            </div>
          </div>
        ) : (
          <PageContainer>
            <Search state={'people'} parentSearch={searchValue} />
          </PageContainer>
        )}
      </div>
    );
  }
}

export default peopleBack;
