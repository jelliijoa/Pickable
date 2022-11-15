import React, {Component} from 'react';
import {View, Linking} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 37.5465,
        longitude: 126.9647,
        latitudeDelta: 0.007,
        longitudeDelta: 0.007,
      },
      markers: [
        {
          latlng: {latitude: 37.5465, longitude: 126.9647},
          title: '숙명여자대학교',
          description: '숙명여자대학교 제1캠퍼스',
        },
        {
          latlng: {latitude: 37.5455365, longitude: 126.9667991},
          title: '을의커피',
          description: '카페',
        },
      ],
    };
  }

  render() {
    return (
      <View style={{flex: 1, padding: 10}}>
        <MapView
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          initialRegion={
            // {
            //     latitude:37.562087,
            //     longitude:127.035192,
            //     // 얼마의 위도경도 차이까지 지도에 표시되는가 (zoom 설정)
            //     latitudeDelta:0.009,
            //     longitudeDelta:0.004,
            // }
            this.state.region
          }>
          <Marker
            coordinate={this.state.region}
            title="숙명여자대학교"
            description="숙명여자대학교 제1캠퍼스"></Marker>
          <Marker
            coordinate={{latitude: 37.5455365, longitude: 126.9667991}}
            title="을의커피"
            description="카페"
            onCalloutPress={this.clickCallout}></Marker>
          <Marker
            coordinate={{latitude: 37.5456, longitude: 126.9671}}
            title="청파맨션"
            description="카페"></Marker>
          <Marker
            coordinate={{latitude: 37.5448, longitude: 126.9689}}
            title="카페코지"
            description="카페"></Marker>
          <Marker
            coordinate={{latitude: 37.5444, longitude: 126.9688}}
            title="핀벨"
            description="카페"></Marker>
          <Marker
            coordinate={{latitude: 37.5404, longitude: 126.9678}}
            title="오츠커피"
            description="카페"></Marker>
          <Marker
            coordinate={{latitude: 37.5453, longitude: 126.9666}}
            title="아마"
            description="카페"></Marker>
          <Marker
            coordinate={{latitude: 37.545, longitude: 126.973}}
            title="때가이르매"
            description="카페"></Marker>
          <Marker
            coordinate={{latitude: 37.5416, longitude: 126.9732}}
            title="고라니커피클럽"
            description="카페"></Marker>
          {/* 마커여러개 동시에 찍기 */}
          {this.state.markers.map((marker, index) => {
            return (
              <Marker
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
                key={index}
              />
            );
          })}
        </MapView>
      </View>
    );
  }

  clickCallout = () => {
    //alert('aaa');
    // 특정 URL의 웹문서를 디바리스의 웹브라우저를 통해 열기
    Linking.openURL(
      'https://map.naver.com/v5/entry/place/1985902867?c=14133886.5536320,4515430.3309618,13,0,0,0,dh&placePath=%2Fhome&entry=plt',
    );
  };
}
