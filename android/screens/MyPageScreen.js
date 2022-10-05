import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Image,
  View,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// import GoogleLogin from '../components/GoogleLogin';
import EditButtons from '../components/EditButtons'
import EditForm from '../components/EditForm';
import {signIn, signUp} from '../lib/auth';

function SignInScreen({navigation, route}) {
  const {isEdit} = route.params ?? {};
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState();

  const createChangeTextHandler = name => value => {
    setForm({...form, [name]: value});
  };
  const onSubmit = async () => {
    Keyboard.dismiss();
    const {email, password, confirmPassword} = form;

    if (isEdit && password !== confirmPassword) {
      Alert.alert('실패', '비밀번호가 일치하지 않습니다.');
      return;
    }
    setLoading(true);
    const info = {email, password};

    try {
      const {user} = isEdit ? Alert.alert('수정 완료') : console('수정 화면으로 이동');
      // Alert.alert('성공', email);
      // console.log(user);
      navigation.navigate('Main');
    } catch (e) {
      Alert.alert('','수정 완료!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={styles.fullscreen}>
        <View style={styles.form}>
          <EditForm
            isEdit={isEdit}
            onSubmit={onSubmit}
            form={form}
            createChangeTextHandler={createChangeTextHandler}
          />
          <EditButtons
            isEdit={isEdit}
            onSubmit={onSubmit}
            loading={loading}
          />
          {/* <GoogleLogin /> */}
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  form: {
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});

export default SignInScreen;
