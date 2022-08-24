import React, { Component } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import styles from "@/pages/OpenAPI/index.less";
import MainSearch from "@/components/MainSearch";
import {ApiTwoTone, CommentOutlined, TagsOutlined, TwitterOutlined} from "@ant-design/icons";
import { Map, Markers, InfoWindow } from 'react-amap';
import mapData from './map.json'

import CloudSyncOutlined from "@ant-design/icons/lib/icons/CloudSyncOutlined";
import {Button, Card, Tag} from "antd";

class timeSpaceExplore extends Component {

  randomPosition = () => ({
    longitude: 100 + Math.random() * 20,
    latitude: 30 + Math.random() * 20
  })
  randomMarker = (len) => (
    Array(len).fill(true).map((e, idx) => ({
      position: this.randomPosition()
    }))
  );

  markersEvents = {
    created:(allMarkers) => {
      console.log('All Markers Instance Are Below');
      console.log(allMarkers);
    },
    click: (e, marker) => {
      const extData = marker.getExtData();
      const index = extData.position["id"];
      const IP = {
          longitude: extData.position["longitude"],
          latitude: extData.position["latitude"],
        };
      const info = extData.position;
      this.setState({index,IP,info})
      console.log(1);

      this.showWindow(0)
      this.showWindow(1)
    },
    dragend: (MapsOption, marker) => { /* ... */ }
  }

  showWindow(id) {
    this.setState({
      curVisibleWindow: id,
    });
  }

  renderMarkerLayout(extData){
    return (<Tag style={{padding:10,fontSize:15,borderColor:"black",borderWidth:"medium",borderRadius:15}} icon={<TagsOutlined />}>
      {extData.position["id"]}
    </Tag>)

  }

  click = (value) => {
    this.props.history.push({pathname :"/welcome", query:{
      dotData: value //需要传递的参数
    }});
  }

  state={
    markers: mapData,
    center: [108.939645,34.343207],
    useCluster: true,
    curVisibleWindow: 0,
    IP:null,
    index:null,
    info: {id:null, dynasty:null, hometown:null, longitude:null, latitude:null, address:null}
  }

  render() {
    console.log(this.state.markers)

    return (
      <div>
        <div style={{width: '100vw', height: '93vh'}}>
          <Map plugins={['OverView','ControlBar']} center={this.state.center} zoom={6} resizeEnable rotateEnable>
            <Markers
              markers={this.state.markers}
              useCluster={this.state.useCluster}
              events={this.markersEvents}
              render={this.renderMarkerLayout}
            />
            <InfoWindow
              style={{opacity:0.5}}
              position={this.state.IP}
              visible={this.state.curVisibleWindow}
              offset={[0,-30]}
              isCustom
              autoMove
              closeWhenClickMap
            >
              <Card title={this.state.index} style={{ width: 300 }}>
                {this.state.info.dynasty?<p>朝代：{this.state.info.dynasty}</p>:null}
                {this.state.info.hometown?<p>家乡：{this.state.info.hometown}</p>:null}
                {this.state.info.address?<p>地点：{this.state.info.address}</p>:null}
                <Button type="primary" ghost onClick={() => this.click(this.state.index)}>
                  查看详情
                </Button>
              </Card>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}
export default timeSpaceExplore;
