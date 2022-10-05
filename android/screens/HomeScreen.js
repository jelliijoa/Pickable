import * as React from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PlaceScreen from './PlaceScreen';

function LikeButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.push('Like')}>
      <Text style={{fontSize: 18, marginHorizontal: 10, marginVertical: 10}}>
        ❤️
      </Text>
    </TouchableOpacity>
  );
}

function CafeButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.push('Cafe')}>
      <Text style={{fontSize: 40, marginHorizontal: 20, marginVertical: 10}}>
        🧁
      </Text>
      <Text style={{fontSize: 16, marginHorizontal: 30}}>Cafe</Text>
    </TouchableOpacity>
  );
}

function RestaurantButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.push('Restaurant')}>
      <Text style={{fontSize: 40, marginHorizontal: 23, marginVertical: 10}}>
        🍴
      </Text>
      <Text style={{fontSize: 16, marginHorizontal: 8}}>Restaurant</Text>
    </TouchableOpacity>
  );
}

function DrinkButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.push('Drink')}>
      <Text style={{fontSize: 40, marginHorizontal: 20, marginVertical: 10}}>
        🍺
      </Text>
      <Text style={{fontSize: 16, marginHorizontal: 25}}>Drink</Text>
    </TouchableOpacity>
  );
}

function EtcButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.push('Etc')}>
      <Text style={{fontSize: 40, marginHorizontal: 20, marginVertical: 10}}>
        👀
      </Text>
      <Text style={{fontSize: 16, marginHorizontal: 33}}>Etc</Text>
    </TouchableOpacity>
  );
}

function RandomImage() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.push('Random')}>
      <Image style={styles.place} source={require('../assets/logo.png')} />
      <View style={styles.info}>
        <Text>제목</Text>
        <Text>설명블라블라</Text>
      </View>
    </TouchableOpacity>
  );
}

function HomeScreen() {
  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
      <View style={styles.searchBar}>
        <Image
          style={styles.logoStyle}
          source={require('../assets/logo.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="#검색어를 입력하세요."
          autoCapitalize="none"
        />
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={{fontSize: 18, marginHorizontal: 5}}>🔎</Text>
        </TouchableOpacity>
        <LikeButton style={styles.buttonStyle} />
      </View>
      <View style={styles.locationBar}>
        <Text>용산구 청파로 47길 100 📌</Text>
      </View>
      <View style={styles.categoryBar}>
        <CafeButton style={styles.category} />
        <RestaurantButton style={styles.category} />
        <DrinkButton style={styles.category} />
        <EtcButton style={styles.category} />
      </View>
      <View style={{flex: 0.4, margin: 15}}>
        <Text style={styles.randomText}>무작위 추천</Text>
      </View>
      <View style={styles.randomBar}>
        <PlaceScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoStyle: {
    width: 50,
    height: 20,
  },

  searchBar: {
    flex: 1,
    paddingHorizontal: 10,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },

  locationBar: {
    flex: 0.5,
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#bdbdbd',
    borderBottomWidth: 1,
  },

  categoryBar: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#bdbdbd',
    borderBottomWidth: 1,
  },

  randomText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },

  randomBar: {
    flex: 6,
    backgroundColor: 'white',
  },

  list: {
    flex: 1,
    width: '100%',
  },

  place: {
    width: 120,
    height: 120,
    marginHorizontal: 30,
  },

  info: {
    marginHorizontal: 30,
  },

  stylegridView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingBottom: 80,
  },

  input: {
    flex: 1,
    fontSize: 15,
    paddingLeft: 15,
    paddingVertical: 5,
  },

  buttonStyle: {
    backgroundColor: '#FFFFFF',
    marginRight: 20,
  },

  category: {
    margin: 20,
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 5,
    width: 30,
    height: 30,
  },
});

export default HomeScreen;
