import React, {FC} from 'react'
import { StyleSheet } from 'react-native'
import {Appbar} from 'react-native-paper'
import Icon  from 'react-native-vector-icons/Ionicons'
import Global from '../Global'

export const TopBar = () => {
    const _menu = () => console.log("Pressed Menu")

    return(
        <Appbar.Header style={styles.topbar}>
            <Icon name="airplane-outline" size={32} color="#000000"/>
            <Appbar.Content title="Travel Supplies"/>
            <Appbar.Action icon="dots-vertical" onPress={_menu}/>
        </Appbar.Header>
    )
    

}

const styles = StyleSheet.create({
    topbar:{
        backgroundColor:Global.color.AppBar,
    },

})