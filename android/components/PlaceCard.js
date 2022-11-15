import {useNavigation, useNavigationState} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';

function PlaceCard({address, category, image, keyword, lat, link, long, name, review, score, tel, time}) {
  const date = useMemo(
    () => (createdAt ? new Date(createdAt._seconds * 1000) : new Date()),
    [createdAt],
  );
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
          <Image source={{uri: image}} style={styles.place} />
          <View style={styles.spaceBetween}>
            <Text>{name}</Text>
            <Text>
              {'⭐️'}
              {score}
              {'/5'}
            </Text>
          </View>
          <View>
            <Text>{keyword}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )};

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
      justifyContent: 'space-between'
    },
  })