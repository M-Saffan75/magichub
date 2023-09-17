import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
    return (
        <View style={{height:'100%', alignItems:'center',justifyContent:'center',width:'100%'}}>
            <TouchableOpacity style={{ backgroundColor: '#000' , paddingVertical:10, width:125}} onPress={()=> navigation.navigate('Next')}>
                <Text style={{ color: '#fff', textAlign:'center' }}>home</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({})