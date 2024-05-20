import { StyleSheet, Text, View , TouchableOpacity ,StatusBar } from 'react-native'
import React, { useState } from 'react'

export default function BgChanger() {

  const [backgroundColor,setBackgroundColor] = useState("#ffffff")

  const bgChanger = ()=>{
    let colorRange = "0123456789ABCDEF"
    let result = "#"
    for(let i=0; i< 6; i++){
      result += colorRange[Math.floor(Math.random()*colorRange.length)]
    }
    setBackgroundColor(result)
  }

  return (
   <View style={[styles.container,{backgroundColor:backgroundColor}]}>
    <TouchableOpacity onPress={()=>{
      bgChanger();
    }}>
      <View style={[styles.container]}>
      <Text style={styles.button}>press</Text>
      </View>
    </TouchableOpacity>
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:"center",
  },
  button:{
    backgroundColor:"red",
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:10,
  }
})