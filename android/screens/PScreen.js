import React from 'react';
import {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import PlaceCard from '../components/PlaceCard';
import { getPlaces } from '../lib/places';

function PScreen() {
    const [ places, setPlaces ] = useState(null);
    useEffect(() => {
        getPlaces().then(setPlaces)
    }, []);

  return (
    <FlatList
      data={places}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const renderItem = ({item}) => (
  <PlaceCard
    address={item.address}
    category={item.category}
    image={item.image}
    keyword={item.keyword}
    lat={item.lat}
    link={item.link}
    long={item.long}
    name={item.name}
    review={item.review}
    score={item.score}
    tel={item.tel}
    time={item.time}
  />
);

export default PScreen;