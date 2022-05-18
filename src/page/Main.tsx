import React, {FC} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TopAppBar } from '../components/TopAppBar'
import Global from '../Global'
import Icon from 'react-native-vector-icons/Ionicons'

export const App = () => {
  return(
    <View style={styles.container}>
      <TopAppBar/>
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
