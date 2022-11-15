import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import PlaceList from '../components/PlaceList';

function CafeScreen() {
  return (
    <View style={styles.main}>
      <View style={styles.bar}>
        <PlaceList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    margin: 20,
    borderColor: 'black',
    borderRadius: 2,
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  bar: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#c2c2c2',
    borderTopWidth: 1,
    backgroundColor: 'white',
  },
});

export default CafeScreen;
