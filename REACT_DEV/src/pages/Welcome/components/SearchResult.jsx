import React, { PureComponent } from 'react';
import {Row, Col, message, Spin, Select, Card, Input, Button} from 'antd';
import styles from '../index.less';
import { connect } from 'dva';
import Charts from './Charts';
import Empty from '../../../components/Empty/index';
import Information from './Information';
import SearchInput from '@/pages/KnowledgeSearch/components/SearchInput';
import {UserOutlined} from "@ant-design/icons";
const { Meta } = Card;

@connect(({ knowledge, loading }) => ({
  knowledge,
  loading: loading.effects['knowledge/getKeyword'],
}))
class SearchResult extends PureComponent {
  state = {
    searchValue: [],
    chartsData: [],
    val: false,
    propSearch: [],
    detailData: [],
  };

  componentDidMount() {
    const { parentSearch } = this.props;
    if (parentSearch.length !== 0) {
      this.computedSearchValue(parentSearch);
    }
  }

  onChange = (e) => {
    this.setState({
      searchValue: e.target.value,
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
    this.handleSearch(arr);
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

  handleSearch = (value) => {
    const data = value.slice(-1);
    const { dispatch } = this.props;
    dispatch({
      type: 'knowledge/getKeyword',
      payload: data,
      callback: (response) => {
        if (response !== null || response.length === 0) {
         response[0].nodes.splice(response[0].nodes.findIndex(item => item.target === "null"), 1)
          this.setState({
            chartsData: response[0],
            detailData: response[0],
            propSearch: data,
            val: true,
          });
        }
        if (response.links === null || response.length === 0) {
          message.warning('找不到您检索的知识点！');
        }
      },
    });
  };

  render() {
    const { loading } = this.props;
    const { chartsData, val, searchValue, propSearch, detailData } = this.state;
    const loadings = loading === undefined ? false : loading;
    console.log(searchValue)
    return (
      <div>
        <div className={styles.search}>
          <SearchInput
            className={styles.cascader}
            onChange={this.onChange}
            search={this.search}
            searchValue={searchValue}
          />
          <Spin spinning={loadings}>
            {val && chartsData.length !== 0 && detailData.length !== 0 ? (
              <Row className={styles.content} gutter={[32, 24]}>
                <Col span={14}>
                  <Charts chartsData={chartsData} propSearch={propSearch} clickWord={this.search} />
                </Col>
                <Col span={10}>
                  <Information
                    chartsData={chartsData}
                    propSearch={propSearch}
                    detailData={detailData}
                  />
                </Col>
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
