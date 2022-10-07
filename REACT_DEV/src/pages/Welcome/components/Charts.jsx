import React, { Component } from "react";
import * as echarts from "echarts";
import categories from "../../Common/chartsCategory";

class charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: {"nodes":[{"id":"皇甫诞碑","label":"皇甫诞碑","category":"碑帖作品"},{"id":"书法家。字信本。潭州临湘（今湖南长沙）人。仕隋为太常博士。贞观初，官至太子率更令、弘文馆学士，封渤海县男。武德七年奉诏主修《艺文类聚》，《全唐文》卷一四六录其文八篇，《唐文拾遗》卷一四辑补六篇。《全唐诗》卷一二录其诗二首，《全唐诗补编·续补遗》卷一辑补一首。传世作品有《道因法师碑》和《泉男生墓志》。","label":"书法家。字信本。潭州临湘（今湖南长沙）人。仕隋为太常博士。贞观初，官至太子率更令、弘文馆学士，封渤海县男。武德七年奉诏主修《艺文类聚》，《全唐文》卷一四六录其文八篇，《唐文拾遗》卷一四辑补六篇。《全唐诗》卷一二录其诗二首，《全唐诗补编·续补遗》卷一辑补一首。传世作品有《道因法师碑》和《泉男生墓志》。","category":"名家小传"},{"id":"唐","label":"唐","category":"朝代"},{"id":"化度寺邕禅师舍利塔铭","label":"化度寺邕禅师舍利塔铭","category":"碑帖作品"},{"id":"湖南","label":"湖南","category":"籍贯"},{"id":"虞恭公温彦博碑","label":"虞恭公温彦博碑","category":"碑帖作品"},{"id":"九成宫醴泉铭","label":"九成宫醴泉铭","category":"碑帖作品"}],"links":[{"source":"欧阳询","target":"皇甫诞碑","category":"碑帖作品","label":"碑帖作品","symbol":"皇甫诞碑.jpg"},{"source":"欧阳询","target":"虞恭公温彦博碑","category":"碑帖作品","label":"碑帖作品","symbol":"虞恭公温彦博碑.jpg"},{"source":"欧阳询","target":"化度寺邕禅师舍利塔铭","category":"碑帖作品","label":"碑帖作品","symbol":"化度寺邕禅师舍利塔铭.jpg"},{"source":"欧阳询","target":"九成宫醴泉铭","category":"碑帖作品","label":"碑帖作品","symbol":"九成宫醴泉铭.jpg"},{"source":"欧阳询","target":"书法家。字信本。潭州临湘（今湖南长沙）人。仕隋为太常博士。贞观初，官至太子率更令、弘文馆学士，封渤海县男。武德七年奉诏主修《艺文类聚》，《全唐文》卷一四六录其文八篇，《唐文拾遗》卷一四辑补六篇。《全唐诗》卷一二录其诗二首，《全唐诗补编·续补遗》卷一辑补一首。传世作品有《道因法师碑》和《泉男生墓志》。","category":"名家小传","label":"名家小传","symbol":"书法家。字信本。潭州临湘（今湖南长沙）人。仕隋为太常博士。贞观初，官至太子率更令、弘文馆学士，封渤海县男。武德七年奉诏主修《艺文类聚》，《全唐文》卷一四六录其文八篇，《唐文拾遗》卷一四辑补六篇。《全唐诗》卷一二录其诗二首，《全唐诗补编·续补遗》卷一辑补一首。传世作品有《道因法师碑》和《泉男生墓志》。.jpg"},{"source":"欧阳询","target":"湖南","category":"籍贯","label":"籍贯","symbol":"湖南.jpg"},{"source":"欧阳询","target":"唐","category":"朝代","label":"朝代","symbol":"湖南.jpg"}]},
      data: props.chartsData,
      nodes:[],
      links:[]
    };
  }

  componentDidMount() {
    const myChart = echarts.init(document.getElementById("main"));
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
      console.log(this.state.data.nodes)
      this.state.data.nodes.forEach((node) => {
        console.log(node)
        if(node.category === "背景故事" || node.category === "数量" || node.category === "流传经历" || node.category === "题记" || node.label === "背景故事" || node.category === "额题" || node.category === "首题" || node.category === "null" || node.category === "名家小传"){

        }else if(node.id.includes("null") || node.id === "l"){

        }
        else{
          console.log(node)
          this.state.nodes.push(node)
          console.log(this.state.nodes)
        }
      })
      this.state.data.links.forEach((link) => {
        if(link.category === "背景故事" || link.target.includes("null") || link.category === "首题" || link.category === "额题"){

        }else{
          this.state.links.push(link)
        }
      })
      let sta = this.state.data.nodes
      console.log(sta)
      this.state.nodes.forEach((node) => {
        if(["碑帖作品", "名家", "书体", "朝代", "版本", "地点"].includes(node.category)){

        }else if(["楷书","撰文","撰书"].includes(node.category)){
          node.category = "名家"
        }else{
          node.category = "其他"
        }
        node.symbolSize = 30
        node.draggable = true;
        node.label = {
          show: true,
        };
        node.value = node.name;
        node.itemStyle = {
          opacity: 0.8,
        };
      });
      this.state.links.forEach((link) => {
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
          // color: "source",
          normal: {
            // curveness: Math.random()*0.3,
            opacity: 0.5,
          },
        };
        link.symbol = ["circle", "arrow"];
        // link.symbolSize = 10;
      });
      myChart.setOption({
        animation: false,
        // 图的标题
        // title: {
        //   text: "碑帖记忆",
        //   subtext: "全局知识图谱",
        //   top: "center",
        //   right: "left",
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
          data: ["碑帖作品", "名家", "书体", "朝代", "版本", "地点", "其他"],
        },
        series: [
          {
            name: "实体",
            type: "graph", // 类型:关系图
            layout: "force", // 图的布局，类型为力导图
            force: {
              // 斥力因子
              repulsion: 500,
              // // 向中心的引力因子
              gravity: 0.5,
              // // 边长
              edgeLength: 100,
              friction: 0.6,
            },
            label: {
              position: "bottom",
              color :"black",
              formatter: "{c}",
              fontSize: 13,
              fontFamily: "Microsoft YaHei",
              fontStyle: "oblique",
              fontWeight:"bold"
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
              color:"target",
            },
            zoom:1.7,
            // autoCurveness:true,
            roam:true,
            // 数据
            data: this.state.nodes,
            edges: this.state.links,
            categories,
          },
        ],
      });
      myChart.on("click", (params) => {
        const word = [];
        word.push(params.name);
        this.props.clickWord(word);
      });
    }
  }

  render() {
    console.log(this.state.nodes)
    console.log(this.state.links)
    return (
      <div>
        <div id="main" style={{ width: "100%", height: "600px"}}></div>
      </div>
    );
  }
}

export default charts;
