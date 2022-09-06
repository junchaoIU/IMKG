import React, { Component } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import styles from "@/pages/KBQA/index.less";
import MainSearch from "@/components/MainSearch";
import {CommentOutlined, FireOutlined, FireTwoTone, MessageTwoTone} from "@ant-design/icons";
import {Button, Input, Tag} from "antd";
import Search from "@/pages/KBQA/components/Search";

class kbqa extends Component {
  state = {
    val: true,
    question: '',
  };

  search = () => {
    this.setState({
      val: false,
    });
  };

  onChange = (e) => {
    let question = e.target.value
    this.setState({
      question: question,
    });
  };

  searchHot = (value) => {
    this.setState({
      question: value,
      val: false,
    })
  }

  render() {
    const { val, question } = this.state;
    return (
      <div>
        {val === true ? (
          <div className={styles.indexSearch}>
            <MainSearch
              logo={<MessageTwoTone twoToneColor="#60c3ffa6"/>}
              text={'智能知识·问答'}
              engText={'KBQA·Platform'}
            />
            <Input
              size={'large'}
              className={styles.input}
              placeholder={'请输入问题：'}
              allowClear
              onChange={this.onChange}
            />
            <Button type="primary" className={styles.button} size={'large'} onClick={this.search}>
              知识问答
            </Button>
            <br/>
            <div key="c" style={{textAlign: 'center',paddingBottom:40}}>
              <Button size="small" type="text" onClick={() => this.searchHot("王羲之写过什么碑帖？用的什么书体？")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">王羲之写过什么碑帖？用的什么书体？</font>
              </Button>
              <Button size="small" type="text" onClick={() => this.searchHot("王羲之的籍贯？")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">王羲之的籍贯？</font>
              </Button>
              <Button size="small" type="text" onClick={() => this.searchHot("十七帖是哪个朝代的？")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">十七帖是哪个朝代的？</font>
              </Button>
              <Button size="small" type="text" onClick={() => this.searchHot("十七帖现在收藏在哪？")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">十七帖现在收藏在哪？</font>
              </Button>
              <Button size="small" type="text" onClick={() => this.searchHot("")}>
                <FireTwoTone twoToneColor="#ffffff" /><font color="white">王羲之写过什么碑帖？</font>
              </Button>
            </div>
          </div>
        ) : (
          <PageContainer>
            <Search state={'question'} parentSearch={question} />
          </PageContainer>
        )}

      </div>
    );
  }
}
export default kbqa;
