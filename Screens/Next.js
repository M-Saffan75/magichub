import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Next = ({navigation}) => {
    return (
        <View style={{height:'50%', alignItems:'center',justifyContent:'center',width:'100%'}}>
            <TouchableOpacity style={{ backgroundColor: '#000' , paddingVertical:10, width:125}} onPress={()=> navigation.navigate('Home')}>
                <Text style={{ color: '#fff', textAlign:'center' }}>Back</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Next

const styles = StyleSheet.create({})