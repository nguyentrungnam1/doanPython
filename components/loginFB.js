import React from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function LoginFB() {
  return (
    <>
    <StatusBar hidden ={true}/>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Image source={require('../images/fb.jpg')} style={styles.banner} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
        <SafeAreaView style={styles.container}>
        
          <View style={styles.content}>
            <TextInput
              style={[styles.loginInput, styles.loginUserName]}
              placeholder="Số điện thoại hoặc email"
            />
            <TextInput
              style={[styles.loginInput, styles.loginPassword]}
              placeholder="Mật khẩu"
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.buttonText}>Đăng Nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkReturn}>
              <Text style={styles.returnText}>Quên mật khẩu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkReturn}>
              <Text style={styles.returnText}>Quay lại</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>HOẶC</Text>
              <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity style={ styles.buttonRegister}>
              <Text style={styles.buttonRegisterText}>
                Tạo tài khoản mới
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}
const styles = StyleSheet.create({
  banner: {
    width: '100%',
    resizeMode: 'contain',
    // backgroundColor:'red',
    aspectRatio: 751 / 461,
    height: null,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
  },
  loginInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 20,
  },
  loginUserName:{
    marginBottom:0.5
  },
  buttonLogin: {
    marginTop: 10,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#1977f3',
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#b4cafb',
    fontSize: 18,
  },
  linkReturn: {
    marginTop: 15,
  },
  returnText: {
    textAlign: 'center',
    color: '#1c6ede',
    fontSize: 18,
  },
  footer: {
    alignItems: "center",
    paddingBottom: 0,
  },
  divider:{
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
  },
  dividerLine:{
    borderColor: "black",
    borderBottomWidth: 1,
    flex: 1,
  },
  dividerText: {
    width: 50,
    textAlign: "center",
  },
  buttonRegister:{
    height: 40,
    backgroundColor:'#e7f3ff',
    width: "90%",
    marginTop: 20,
    borderRadius: 10,
  },
  buttonRegisterText:{
    color: "#1077f7",
    fontSize: 18,
    justifyContent:'center',
    textAlign:'center',

  }
});
