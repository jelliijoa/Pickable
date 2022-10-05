import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';

import DragSortableView from '../widget/DragSortableView';

const {width} = Dimensions.get('window');

const parentWidth = width - 10;
const childrenWidth = parentWidth;
const childrenHeight = width / 5;
const deleteHeight = 60;
const height = 750;

const TEST_DATA = [
  {icon: require('../assets/Cafe.png'), txt: 1},
  {icon: require('../assets/Restaurant.png'), txt: 2},
  {icon: require('../assets/Drink.png'), txt: 3},
  {icon: require('../assets/Etc.png'), txt: 4},
  {icon: require('../assets/Cafe.png'), txt: 5},
  {icon: require('../assets/Restaurant.png'), txt: 6},
];

export default class CourseScreen extends Component {
  constructor(props) {
    super();

    this.state = {
      data: TEST_DATA,
      scrollEnabled: true,
      deleteStatus: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sort}>
          <DragSortableView
            dataSource={this.state.data}
            parentWidth={parentWidth}
            isDragFreely={true}
            childrenWidth={childrenWidth}
            childrenHeight={childrenHeight}
            onDragging={this.onDragging}
            onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd}
            onDataChange={data => {
              if (this.deleteIndex != null) {
                const deleteIndex = this.deleteIndex;
                this.deleteIndex = null;
                const newData = [...data];
                newData.splice(deleteIndex, 1);
                this.setState({
                  data: newData,
                });
              } else if (data.length != this.state.data.length) {
                this.setState({
                  data: data,
                });
              }
            }}
            keyExtractor={(item, index) => item.txt}
            renderItem={this.renderItem}
          />
        </View>
        {this.renderDeleteView()}
      </View>
    );
  }

  onDragStart = () => {
    this.setState({
      deleteStatus: 1,
    });
  };

  onDragEnd = (startIndex, endIndex) => {
    if (this.state.deleteStatus === 2) {
      if (startIndex === endIndex) {
        const newData = [...this.state.data];
        newData.splice(startIndex, 1);
        this.setState({
          data: newData,
          deleteStatus: 0,
        });
      } else {
        this.deleteIndex = endIndex;
        this.setState({
          deleteStatus: 0,
        });
      }
    } else {
      this.setState({
        deleteStatus: 0,
      });
    }
  };

  onDragging = (gestureState, left, top) => {
    if (this.isBuffer) return;

    if (
      gestureState.moveY + (StatusBar.currentHeight | 0) + deleteHeight >=
      height
    ) {
      this.isBuffer = true;
      this.setState({deleteStatus: 2}, () => {
        this.isBuffer = false;
      });
    } else if (this.state.deleteStatus !== 1) {
      this.isBuffer = true;
      this.setState({deleteStatus: 1}, () => {
        this.isBuffer = false;
      });
    }
  };

  renderDeleteView = () => {
    const deleteStatus = this.state.deleteStatus;
    if (deleteStatus === 1 || deleteStatus === 2) {
      return (
        <View style={styles.delete}>
          <Image
            style={styles.delete_icon}
            source={require('../assets/Delete.png')}
          />
          <Text style={styles.delete_txt}>
            {deleteStatus === 2 ? 'Release your hand to delete' : 'Delete'}
          </Text>
        </View>
      );
    }
    return null;
  };

  renderItem(item, index) {
    return (
      <View style={styles.item}>
        <View style={styles.item_children}>
          <Text style={styles.item_txt}>{item.txt}</Text>
          <Image style={styles.item_icon} source={item.icon} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  sort: {
    flex: 1,
  },
  item: {
    width: childrenWidth,
    height: childrenHeight,
  },
  item_children: {
    width: childrenWidth - 4,
    height: childrenHeight - 4,
    margin: 2,
    backgroundColor: '#CCCCFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  item_icon: {
    width: childrenHeight / 2,
    height: childrenHeight / 2,
    resizeMode: 'contain',
    margin: 10,
  },
  item_txt: {
    fontSize: 15,
    color: '#000000',
    marginHorizontal: 10,
    marginBottom: 40,
  },
  delete: {
    width: width - 10,
    height: deleteHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e64e0b',
    zIndex: 9999,
    padding: 5,
  },
  delete_icon: {
    width: 24,
    height: 24,
  },
  delete_txt: {
    fontSize: 16,
    color: '#ffffff',
  },
});
