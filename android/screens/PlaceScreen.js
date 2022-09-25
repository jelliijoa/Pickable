import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function PlaceScreen() {
  const navigation = useNavigation();
  const renderPlace = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 15,
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.push('Main')}>
        <View style={{justifyContent: 'center'}}>
          <Image source={{uri: item.src}} style={styles.place} />
          <View style={styles.spaceBetween}>
            <Text>{item.name}</Text>
            <Text>
              {'⭐️'}
              {item.score}
              {'/5'}
            </Text>
          </View>
          <View>
            <Text>{item.hashtag}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView>
      <FlatList
        data={hotPlace}
        renderItem={renderPlace}
        keyExtractor={name => name.id}
        style={styles.stylegridView}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  stylegridView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingBottom: 80,
  },
  place: {
    width: 150,
    height: 150,
    borderColor: '#c2c2c2',
    borderRadius: 2,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const hotPlace = [
  {
    id: '1',
    name: '을의커피',
    hashtag: '#카공',
    score: '4.8',
    src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MDVfNzQg%2FMDAxNjIyODczMzMxNzc3.qHCrrD8Gnq_R-UGhwtL6njOGzr13-4lSL1jdS9dLtrgg.-1AJqH0cKtDlzzW7mMoJMvKYzIq9u_QsTv86NDXpjosg.JPEG.kskxox111%2FIMG_7161.jpg&type=sc960_832',
  },
  {
    id: '2',
    name: '청파맨션',
    hashtag: '#아늑함',
    score: '4.5',
    src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MjFfMjMx%2FMDAxNjI5NTI5MjgyOTYw.AxjSx76arM2vUjKS44aKMEefHqzfAbDypu7nXYdFwQQg.InSMq0M_jFSmTAfHhd-P5r_TONrYMt2oOecHelRfN5Eg.JPEG.msr1226%2F20210820%25A3%25DF104531.jpg&type=sc960_832',
  },
  {
    id: '3',
    name: '오츠커피',
    hashtag: '#코지',
    score: '4.6',
    src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDhfMTEw%2FMDAxNjU5ODk0NDY1NDY4.xOpNdDmNbdgQCsCBun1NWHEVjBd4UhSxQT4YKQqUZKkg.S8NlEDj7aT9fJq5g3rwDn2cEor3jSB8RBZBWR7Wb0mAg.JPEG.ssssuuu__%2Foutput_1217296208.jpg&type=sc960_832',
  },
  {
    id: '4',
    name: '카페코지',
    hashtag: '#테이크아웃',
    score: '4.8',
    src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMTRfODQg%2FMDAxNjQyMTI0ODc0Njk3.vYjMaN2VjqiptAEvNExHF8gMvgwpxikob9t_7LpUg4og.aY-MCBAtTOHo82AVK9JF5DraqCdOgEmokF77rqLWG-Ig.JPEG.bonniee_94%2F20211218%25A3%25DF133531.jpg&type=sc960_832',
  },
  {
    id: '5',
    name: '핀벨',
    hashtag: '#카공',
    score: '4.3',
    src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAzMzFfMTEg%2FMDAxNTg1NjYzMDkxOTE4.R5jgS1m5CN-WpAAah9gUWqML1FAN0ZsWN3NcHQkrb88g.SLnULJ8jm3x1KUym50KYnee3-ZSUlFUPcOh7A7ceHbAg.JPEG.ydaets%2FDSC01408.JPG&type=sc960_832',
  },
  {
    id: '6',
    name: '아마',
    hashtag: '#수다떨기좋음',
    score: '4.7',
    src: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fmp-seoul-image-production-s3.mangoplate.com%2F481738%2F748538_1646720579555_18090&type=sc960_832',
  },
  {
    id: '7',
    name: '때가이르매',
    hashtag: '#독특함',
    score: '4.5',
    src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMDRfNjEg%2FMDAxNjQzOTY0ODUwMjQ5.CuJFKk7qkHUphuM-IWRkKlHfZ_3pOmvUfWIKOHhBFmcg.-M2gzVHUHCSWH24_3R0lV0FMq5j1vgFCyw3Y3ATr7GYg.JPEG.dmswoii%2FIMG_4060.jpg&type=sc960_832',
  },
  {
    id: '8',
    name: '고라니 커피클럽',
    score: '4.9',
    hashtag: '#커피향',
    src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MTBfMTU0%2FMDAxNjYwMTA2OTI3ODM2.WAApm8iBHBfGNbpEqS3V162GDQyfbN2Qstx9kbjG2fog._yXJkvBr3ifRZBd1YKu6RhV4a8hA6KiTFYGCm0A97j0g.JPEG.hyeonji_13%2FIMG_1700.jpg&type=sc960_832',
  },
];

export default PlaceScreen;