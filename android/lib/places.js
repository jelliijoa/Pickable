import firestore from '@react-native-firebase/firestore';

const placesCollection = firestore().collection('place');

export const PAGE_SIZE = 12;
export async function getPlaces({userId, mode, id} = {}) {
  const snapshot = await query.get();

  const places = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return places;
}

export async function getOlderPlaces(id, userId) {
  return getPlaces({
    id,
    mode: 'older',
    userId,
  });
}

export async function getNewerPlaces(id, userId) {
  return getPlaces({
    id,
    mode: 'newer',
    userId,
  });
}

export function removePlace(id) {
  return placesCollection.doc(id).delete();
}

export function updatePlace({id, description}) {
  return placesCollection.doc(id).update({
    description,
  });
}