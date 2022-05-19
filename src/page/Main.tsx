import React, {FC} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TopAppBar } from '../components/TopAppBar'
import Global from '../Global'
import Icon from 'react-native-vector-icons/Ionicons'
import { TopBar } from '../components/Appbar'

export const App = () => {
  return(
    <View style={styles.container}>
      <TopBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  travelList:{
  },

})
