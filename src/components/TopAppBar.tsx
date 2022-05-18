import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Global from '../Global'
import Icon from "react-native-vector-icons/Ionicons"

type Props = {
    title: string
    backgroundColor: string
    textColor: string
}

export const TopAppBar = () => {
    return(
        <View style={styles.topAppBar}>
            <Text style={styles.mainIcon}>
                <Icon name="airplane-outline" size={32} color="#000000"/>
            </Text>
            <View style={styles.statusbar}>
                <AppTitle title="Travel Supplies"/>
            </View>
            <Icon.Button name="ellipsis-vertical-outline" size={20} backgroundColor={Global.color.AppBar} borderRadius={0} color="#000000" style={{paddingTop:16}}/>
    </View>
    )
}

const AppTitle = ({
    title,
    backgroundColor,
    textColor
}: Props) => {
    return(
        <View style={[styles.container, {backgroundColor:backgroundColor}]}>
            <View style={styles.topbar}>
                <Text style={[styles.titleText, {color:textColor}]}>{title}</Text>
            </View>
            
        </View>
    )
}

AppTitle.defaultProps = {
    backgroundColor: Global.color.AppBar,
    textColor: "#FFFFFF"
}

const styles = StyleSheet.create({
    container:{
        alignSelf:'flex-start',
        flexDirection:'row',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    titleText:{
        fontSize:24,
        color:'black',
        fontWeight:'bold',
        textAlign:'left',
    },
    topbar:{
        height:Global.statusBarHeight,
        justifyContent:'center',
    },
    statusbar:{
        width:"80%",
        backgroundColor:Global.color.AppBar,
        paddingLeft:20,
    },
    topAppBar:{
        height:Global.statusBarHeight,
        flexDirection:'row',
    },
    mainIcon:{
        width:"10%",
        textAlign:'left',
        backgroundColor:Global.color.AppBar,
        paddingLeft:10,
        paddingTop:10,
    },
})