import React, { useEffect, useState } from 'react';
import WebView from 'react-native-webview';
import { StatusBar, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import NetInfo from "@react-native-community/netinfo";



const Webview = () => {

  const [isConnected, setIsConnected] = useState(true);


  useEffect(() => {
    wifi();
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);

      return () => {
        unsubscribe();
      }
    }, [])

  })

  const wifi = async () => {

    if (isConnected == true) {
      ''
    } else if (isConnected == false) {
      ToastAndroid.show('ᴅᴇᴠɪᴄᴇ ɴᴇᴛᴡᴏʀᴋ ᴇʀʀᴏʀ !',
        ToastAndroid.SHORT);
    }

  }

  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle='dark-content' />
      <View style={{ height: '100%' }}>
        <WebView source={{ uri: 'https://magicianhub.com/' }} />
      </View>
    </>
  )
}

export default Webview

const styles = StyleSheet.create({})