import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import CustomButton from './CustomButton';
import {useNavigation} from '@react-navigation/native';

function MyPageButtons({isEdit, onSubmit, loading}) {
  const navigation = useNavigation();

  const primaryTitle = isEdit ? '수정완료' : '수정';
  const secondaryTitle = isEdit ? '수정취소' : '로그아웃';

  const onSecondaryButtonPress = () => {
    if (isEdit) {
      Alert.alert('수정 완료');
    } else {
      navigation.push('SignIn', {isEdit: true});
    }
  };

  if (loading) {
    return (
      <View style={styles.spinnerWrapper}>
        <ActivityIndicator size={32} color="#64b5f6" />
      </View>
    );
  }
  return (
    <View style={styles.buttons}>
      <CustomButton title={primaryTitle} hasMarginBottom onPress={onSubmit} />
      <CustomButton
        title={secondaryTitle}
        theme="secondary"
        onPress={onSecondaryButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  spinnerWrapper: {
    marginTop: 64,
    height: 104,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    marginTop: 64,
  },
});

export default MyPageButtons;
