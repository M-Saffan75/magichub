// import React from 'react';
// import { StyleSheet, Text, View, Image, Easing, Animated } from 'react-native';

// const AppLoader = () => {

//     spinValue = new Animated.Value(0);

//     // First set up animation 
//     Animated.timing(
//         this.spinValue,
//         {
//             toValue: 1,
//             duration: 3000,
//             easing: Easing.linear, 
//             useNativeDriver: true 
//         }
//     ).start()

//     const spin = this.spinValue.interpolate({
//         inputRange: [0, 3],
//         outputRange: ['0deg', '360deg']
//     })
//     return (
//         <View style={{height: '100%', width: '100%', backgroundColor:'#eee', justifyContent: 'center', alignItems: 'center',}}>
//             <Animated.View style={{  transform: [{ rotate: spin }] }}>
//                 <Image source={require('../images/splash-3.png')} style={{ height: 100, width: 100 }}  />
//             </Animated.View>
//         </View>
//     )
// }

// export default AppLoader
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { Animated, Button, Easing, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AppLoader = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
        },2000);
        rotate();
    })
    
    let rotateValueHolder = new Animated.Value(0)
    const rotate = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => rotate() + navigation.navigate('Webview'));
    }
    
    const RotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Animatable.View
                animation='fadeIn'
                easing="ease-in-out"
                delay={2000}>
                <Animated.Image source={require('../images/splash-3.png')} style={[styles.imgStyle, { transform: [{ rotate: RotateData }] }]} />
            </Animatable.View>
        </View>
    )
}

export default AppLoader

const styles = StyleSheet.create({

    imgStyle: {
        height: 100,
        width: 100
    }
})