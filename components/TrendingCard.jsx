import {Image, StyleSheet, Text, View,TouchableOpacity,Linking } from 'react-native'
import React from 'react'

export default function TrendingCard() {
  const openWebsite = (websiteLink)=>{
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text>TrendingCard</Text>
      <View style={styles.card}>
        <TouchableOpacity onPress={()=> openWebsite("https://www.youtube.com/watch?v=eL5qYJ7y68k&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=17")}>
        <Image source={{
          uri:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
        }}
        resizeMode='cover'
        style={styles.cardImage}
        />
        </TouchableOpacity>
        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Gokul Nagar</Text>
          <Text style={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloremque, ipsum voluptates dolor deleniti cum itaque ducimus magni hic. Aliquid veritatis accusantium fugit.</Text>
          <Text style={styles.cardText}>100 likes</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardImage:{
    height:250,
    width:"100%",
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  },
card:{
  margin:20,
  elevation:5,
  shadowColor:"black",
  shadowRadius:3,
  shadowOffset:{
    width:1,
    height:1,
  },
  borderRadius:5,

},
cardBody:{
  display:"flex",
  gap:10,
  alignItems: "center",
  padding:10,
  backgroundColor:"black"
},
cardText:{
  color:"white",
  fontWeight:"bold",
}
})