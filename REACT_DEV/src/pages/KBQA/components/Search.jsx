import React, { PureComponent } from 'react';
import {Input, Button, Card, Row, Col, Spin} from 'antd';
import styles from '../index.less';
import {connect} from "dva";
import Empty from "@/components/Empty";
import {CodeTwoTone, SecurityScanTwoTone, SoundTwoTone, TagsTwoTone} from "@ant-design/icons";
import Charts from "@/pages/KnowledgeSearch/components/Charts";
const { Meta } = Card;

@connect(({ question, loading }) => ({
  question,
  loading: loading.effects['answer/getQuestion'],
}))

class search extends PureComponent {
  state = {
    question: '',
    answer:'',
    chartsData:{"nodes":[{"id":"宋庆龄","label":"宋庆龄","category":"人物"},{"id":"宋嘉树","label":"宋嘉树","category":"人物"},{"id":"孙中山","label":"孙中山","category":"人物"}],"links":[{"source":"宋庆龄","target":"宋嘉树","category":"父亲","label":"父亲","symbol":"http://localhost:2222/宋嘉树.jpg"},{"source":"孙中山","target":"宋庆龄","category":"妻子","label":"妻子","symbol":"http://localhost:2222/孙中山.jpg"},{"source":"宋庆龄","target":"孙中山","category":"丈夫","label":"丈夫","symbol":"http://localhost:2222/孙中山.jpg"},{"source":"孙中山","target":"宋嘉树","category":"丈人","label":"丈人","symbol":"http://localhost:2222/宋子安.jpg"}]},
    val: false,
  };

  componentDidMount() {
    const { parentSearch } = this.props;
    if (parentSearch !== '') {
      this.setState({
        question: parentSearch,
      });
      this.handleSearch(parentSearch);
    }
  }

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

  handleQuestion(question) {
    console.log(question)
    const {dispatch} = this.props;
    dispatch({
      type: 'answer/getQuestion',
      payload: question,
      callback: (response) => {
        if (response.code == 200) {
          this.setState({
            answer: response.data,
            val: true,
          });
          console.log(response)
        }
      },
    });
  }

  onChange = (e) => {
    let question = e.target.value
    this.setState({
      question: question,
      val: false,
    });
  };

  handleSearch = (value) => {
    this.setState({answer:""})
    this.handleQuestion(value);
  };

  render() {
    const { loading } = this.props;
    const { chartsData, val, question } = this.state;
    const loadings = loading === undefined ? false : loading;

    return (
      <div className={styles.search}>
        <Input
          size={'large'}
          className={styles.input}
          placeholder={'请输入问题：'}
          allowClear
          value={this.state.question}
          onChange={this.onChange}
        />
        <Button
          type="primary"
          className={styles.button}
          size={'large'}
          onClick={() => this.handleSearch(this.state.question)}
        >
          开始检索
        </Button>
        <Spin spinning={loadings}>
          {val && this.state.question.length !== 0 ? (
            <Row className={styles.content}>
              <Col span={12}>
                <Charts chartsData={chartsData} propSearch={question} clickWord={this.search} />
              </Col>
              <Col span={1}/>
              <Col span={11}>
                <div className={styles.cardContainer}>
                  <Card
                    style={{padding:20, fontSize:18, textAlign:"left"}}
                    title="碑帖记忆 —— 知识问答"
                  >
                    <CodeTwoTone />{" 问题："+ this.state.question}
                    <br/><br/>
                    <SecurityScanTwoTone />{" 回答：" + "宋嘉树"}
                    <br/>
                    <SoundTwoTone />{" 解析：" + this.state.answer}
                    <br/>
                    <Card
                      style={{ marginTop: 20 }}
                      type="inner"
                      title="更多"
                    >
                      <Row gutter={16}>
                        <Col span={6}>
                          <Card
                            style={{height:260}}
                            hoverable
                            cover={<img style={{height:160}} alt="example" src="http://image.gzknowledge.cn/knowledge/%E5%AD%99%E4%B8%AD%E5%B1%B1.jpg" />}
                          >
                            <Meta title="孙中山" description="中国民主革命的伟大先驱" />
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            style={{height:260}}
                            hoverable
                            cover={<img style={{height:160}} alt="example" src="http://image.gzknowledge.cn/knowledge/%E5%AE%8B%E5%BA%86%E9%BE%84.jpg" />}
                          >
                            <Meta title="宋庆龄" description="举世闻名的二十世纪的伟大女性。" />
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            style={{height:260}}
                            hoverable
                            cover={<img style={{height:160}} alt="example" src="http://image.gzknowledge.cn/knowledge/%E5%AE%8B%E5%98%89%E6%A0%91.jpg" />}
                          >
                            <Meta title="宋嘉树" description="宋庆龄的父亲" />
                          </Card>
                        </Col>
                      </Row>
                    </Card>
                  </Card>
                </div>
              </Col>
            </Row>
          ) : (
            <Empty />
          )}
        </Spin>
        {/*<Row>*/}
        {/*  <Col span={4}/>*/}
        {/*  <Col span={16}>*/}
        {/*    {this.state.answer?*/}
        {/*      <Card*/}
        {/*        style={{ margin:"auto", width: 800, height: 400, marginTop:40, padding:20, fontSize:20, textAlign:"left"}}*/}
        {/*        title="碑帖记忆 —— 知识问答"*/}
        {/*      >*/}
        {/*        {"问题:："+ this.state.question}*/}
        {/*        <br/><br/>*/}
        {/*        {"回答：" + this.state.answer}*/}
        {/*      </Card>*/}
        {/*      :<Spin/>}*/}

        {/*  </Col>*/}
        {/*  <Col span={4}/>*/}
        {/*</Row>*/}
      </div>
    );
  }
}

export default search;
