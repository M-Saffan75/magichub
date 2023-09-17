import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { Animated, Button, Easing, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Webview')
        }, 3000);
        rotate();
    })

    let rotateValueHolder = new Animated.Value(0)
    const rotate = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 20000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => rotate() );
        // 
    }

    const RotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle='dark-content' />

            <View style={{ height: '100%',width:'100%'}}>
                {/* <Animatable.View // animation='fadeInDown'// easing="ease-in-out"// delay={1000}>
                    <Animated.Image source={require('../images/bg-new.png')} style={[styles.imgStyle, { transform: [{ rotate: RotateData }] }]}>
                    </Animated.Image>
                </Animatable.View> */}
                <Animated.Image source={require('../images/magic_background.png')}  style={[styles.imgStyle, { transform: [{ rotate: RotateData }] }]}  resizeMode="contain"/>
            </View>
        </>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    imgStyle : {
        height:'100%',
        // width:"100%",
        width:700,
        alignItems:'center',
        justifyContent:'center',
        right:170,
    }
})
