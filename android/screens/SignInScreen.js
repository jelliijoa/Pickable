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
import SignButtons from '../components/SignButtons';
import SignInForm from '../components/SignInForm';
import {signIn, signUp} from '../lib/auth';

function SignInScreen({navigation, route}) {
  const {isSignUp} = route.params ?? {};
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

    if (isSignUp && password !== confirmPassword) {
      Alert.alert('실패', '비밀번호가 일치하지 않습니다.');
      return;
    }
    setLoading(true);
    const info = {email, password};

    try {
      const {user} = isSignUp ? await signUp(info) : await signIn(info);
      // Alert.alert('성공', email);
      // console.log(user);
      navigation.navigate('Main');
    } catch (e) {
      const messages = {
        'auth/email-already-in-use': '이미 가입된 이메일입니다.',
        'auth/wrong-password': '잘못된 비밀번호입니다.',
        'auth/user-not-found': '존재하지 않는 계정입니다.',
        'auth/invalid-email': '유효하지 않은 이메일 주소입니다.',
      };
      const msg =
        messages[e.code] || `${isSignUp ? '회원가입' : '로그인'} 실패`;
      Alert.alert('실패', msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={styles.fullscreen}>
        <Image source={require('../assets/logo.png')} style={styles.image} />
        <View style={styles.form}>
          <SignInForm
            isSignUp={isSignUp}
            onSubmit={onSubmit}
            form={form}
            createChangeTextHandler={createChangeTextHandler}
          />
          <SignButtons
            isSignUp={isSignUp}
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
  image: {
    width: '100%',
    height: '30%',
    alignContent: 'center',
    alignItems: 'center',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});

export default SignInScreen;
