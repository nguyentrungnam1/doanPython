import {placeholder} from '@babel/types';
import {gray, white} from 'chalk';
import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableHighlight,
} from 'react-native';

export default function MomoLogin() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        
          <View style={styles.content}>
            <Text style={styles.contentName}>NGUYEN TRUNG NAM</Text>
            <Text style={styles.contentId}>0334586366</Text>
          </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.form}>
            <View style={styles.loginInput}>
              <TextInput
                style={styles.loginPassword}
                placeholder="Nhập mật khẩu"
                keyboardType="numeric"
                autoFocus={true}
                secureTextEntry={true}
              />
            </View>
            <View>
              <TouchableOpacity style={styles.buttonAction}>
                <Text style={styles.textAction}>Đăng Nhập</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.forgetPassword}>
                <Text style={styles.textForgetPassword}>Quên mật khẩu?</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.forgetPassword}
                style={styles.ChangeUser}>
                <Image
                  source={require('../images/1.png')}
                  style={styles.imageChange}
                />
                <Text
                  style={styles.textForgetPassword}
                  style={styles.textChangeUser}>
                  Đổi SĐT
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const TEXT = {
  color: '#fff',
  textAlign: 'center',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0006d',
  },
  content: {
    marginTop: 50,
  },
  contentName: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
  },
  contentId: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
  },
  loginInput: {
    marginLeft: 10,
    marginRight: 10,
  },
  loginPassword: {
    height: 60,
    color: gray,
    fontSize: 20,
    lineHeight: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
    // paddingHorizontal: 10,
    // textAlignVertical: "center",
    textAlign: 'center',
  },
  buttonAction: {
    height: 50,
    borderRadius: 25,
    backgroundColor: '#8d015a',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  textAction: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
  },
  forgetPassword: {
    marginTop: 10,
  },
  textForgetPassword: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
  },
  ChangeUser: {
    marginTop: 20,
  },
  textChangeUser: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
  },
  imageChange: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 7,
    left: 100,
  },
});
