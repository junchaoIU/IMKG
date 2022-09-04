import React, { Component } from 'react';
import * as echarts from 'echarts';
import categories from '../../Common/chartsCategory';
import echartData from '../data.json'

class charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: {"nodes":[{"id":"化度寺邕禅师舍利塔铭","label":"化度寺邕禅师舍利塔铭","category":"碑帖"},{"id":"欧阳询","label":"欧阳询","category":"名家"},{"id":"楷体","label":"楷体","category":"书体"},{"id":"唐原石北宋拓本","label":"唐原石北宋拓本","category":"版本类型"}],"links":[{"source":"化度寺邕禅师舍利塔铭","target":"楷体","category":"书体","label":"书体","symbol":"http://localhost:2222/宋嘉树.jpg"},{"source":"化度寺邕禅师舍利塔铭","target":"唐原石北宋拓本","category":"版本类型","label":"版本类型","symbol":"http://localhost:2222/孙中山.jpg"},{"source":"化度寺邕禅师舍利塔铭","target":"欧阳询","category":"责任人","label":"责任人","symbol":"http://localhost:2222/孙中山.jpg"}]},
      data:echartData
    };
  }

  componentDidMount() {
    const myChart = echarts.init(document.getElementById('main'));
    this.handleOptions(myChart);
  }

  componentWillReceiveProps(nextProps) {
    setTimeout(() => {
      if (nextProps.chartsData !== this.props.chartsData) {
        this.setState({
          data: nextProps.chartsData,
        });
      }
    }, 200);
  }


  handleOptions(myChart) {
    if (
      this.state.data &&
      this.state.data.nodes &&
      this.state.data.nodes.length > 0 &&
      this.state.data.links !== null
    ) {
      this.state.data.nodes.forEach((node) => {
        // node.symbolSize = 10;
        // if(node.category === '碑帖'){
        //   node.symbolSize = 40;
        // }
        // if(node.category === '朝代'){
        //   node.symbolSize = 40;
        // }
        // if(node.category === '名家'){
        //   node.symbolSize = 20;
        // }
        // if(node.category === '版本类型'){
        //   node.symbolSize = 10;
        // }
        node.symbolSize = (node.size+1) *6
        node.draggable = true;
        node.label = {
          show: true,
        };
        node.name = node.id;
        node.value = node.id;
        node.itemStyle = {
          opacity: 0.8,
        };
      });
      this.state.data.links.forEach((link) => {
        link.label = {
          show: true,
          formatter: link.category,
        };
        link.tooltip = {
          show: true,
          formatter(a) {
            return `${a.name}：${link.category}`;
          },
        };
        link.lineStyle = {
          // color: 'source',
          normal: {
            // curveness: Math.random()*0.3,
            opacity: 0.5,
          },
        };
        link.symbol = ['circle', 'arrow'];
        // link.symbolSize = 10;
      });
      myChart.setOption({
        animation: false,
        // 图的标题
        // title: {
        //   text: "碑帖记忆",
        //   subtext: '全局知识图谱',
        //   top: 'center',
        //   right: 'left',
        // },
        // 工具箱
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {},
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
          },
        },
        tooltip: {
          show: true,
        },
        legend: {
          show: true,
          data: ['碑帖作品', '名家', '书体', '朝代', '版本类型', '地点'],
        },
        series: [
          {
            name: '实体',
            type: 'graph', // 类型:关系图
            layout: 'force', // 图的布局，类型为力导图
            force: {
              // 斥力因子
              repulsion: 500,
              // // 向中心的引力因子
              gravity: 0.5,
              // // 边长
              edgeLength: 150,
              friction: 0.6,
            },
            label: {
              position: 'bottom',
              color :'black',
              formatter: '{c}',
              fontSize: 13,
              fontFamily: 'Microsoft YaHei',
              fontStyle: 'oblique',
              fontWeight:'bold'
            },
            emphasis:{
              scale:1.3,
            },
            // labelLayout:{
            //   hideOverlap:true
            // },
            // 联动高亮
            legendHoverLink: true,
            focusNodeAdjacency: true,
            edgeSymbolSize:8,
            lineStyle:{
              color:'target',
            },
            zoom:1.7,
            // autoCurveness:true,
            roam:true,
            // 数据
            data: this.state.data.nodes,
            edges: this.state.data.links,
            categories,
          },
        ],
      });
      myChart.on('click', (params) => {
        const word = [];
        word.push(params.name);
        this.props.clickWord(word);
      });
    }
  }

  render() {
    return (
      <div>
        <div id="main" style={{ width: '100%', height: '610px'}}></div>
      </div>
    );
  }
}

export default charts;
