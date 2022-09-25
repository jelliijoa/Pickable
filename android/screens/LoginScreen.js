import React, {useState, useEffect} from 'react';
import {View, Button, Image, StyleSheet, TextInput, Text} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  onGoogleButtonPress,
} from 'react-native-google-signin';
import {SafeAreaView} from 'react-native-safe-area-context';

import CustomButton from '../components/CustomButton';

function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const resultMessages = {
    'auth/email-already-in-use': '이미 가입된 이메일입니다.',
    'auth/wrong-password': '잘못된 비밀번호입니다.',
    'auth/user-not-found': '존재하지 않는 계정입니다.',
    'auth/invalid-email': '유효하지 않은 이메일 주소입니다.',
  };

  // 이메일 로그인
  const signIn = async () => {
    try {
      const user = await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('로그인에 성공했습니다.\n' + email);
    } catch (e) {
      const alertMessage = resultMessages[e.code]
        ? resultMessages[e.code]
        : '로그인에 실패하였습니다.';
      Alert.alert(alertMessage);
    }
  };

  // 구글 로그인
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '996235338051-aovtc1u0ego8mbr7uje54i4u74jd4sit.apps.googleusercontent.com',
    });
  }, []);

  const onGoogleButtonPress = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: '20%',
      alignContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
      marginTop: 70,
    },
    text: {
      marginTop: 35,
      marginBottom: 15,
      fontSize: 13,
      color: 'black',
      textAlign: 'center',
      //   borderBottomColor: 'grey',
      //   borderBottomWidth: 1,
    },

    input: {
      borderColor: '#bdbdbd',
      borderWidth: 1,
      paddingHorizontal: 16,
      borderRadius: 4,
      height: 50,
      marginBottom: 3,
    },
  });

  return (
    <SafeAreaView style={{margin: 12}}>
      <View>
        <Image source={require('../assets/logo.png')} style={styles.image} />
        <View>
          <TextInput
            keyboardtype="email-address"
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={text => setEmail(text)}
            required
            value={email}
            style={styles.input}
          />
          <TextInput
            keyboardtype="default"
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={text => setPassword(text)}
            required
            value={password}
            style={styles.input}
          />
        </View>
        <View style={styles.container}>
          <CustomButton title="Login" onPress={signIn} />
          <Text style={styles.text}>구글로 간편 로그인 및 회원가입</Text>
          {/* <LoginScreen onGoogleButtonPress={onGoogleButtonPress} /> */}
          <Text style={styles.text}>이메일로 회원가입하기</Text>
        </View>
        <Button title="Login" onPress={() => navigation.navigate('Signup')} />
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
