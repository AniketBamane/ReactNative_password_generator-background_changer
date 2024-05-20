import { SafeAreaView, StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import TrendingCard from './components/TrendingCard'
import PasswordGenerator from './components/passwordGenerator'
import BgChanger from './components/BgChanger'
export default function App() {
  return (
    <BgChanger />
    // <PasswordGenerator />
//    <SafeAreaView>
//     <ScrollView showsVerticalScrollIndicator={false}>
//     <View> 
//       <FlatCards />
//     </View>
//     <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}  style={styles.container}>
//       <View style={styles.card}>
//         <Text>Red</Text>
//       </View>
//       <View style={styles.card}>
//         <Text>yellow</Text>
//       </View>
//       <View style={styles.card}>
//         <Text>green</Text>
//       </View>
//       <View style={styles.card}>
//         <Text>green</Text>
//       </View>
//       <View style={styles.card}>
//         <Text>green</Text>
//       </View>
//       <View style={styles.card}>
//         <Text>green</Text>
//       </View>
// </ScrollView>
//     <TrendingCard />
//     <TrendingCard />
//     <TrendingCard />
//     </ScrollView>
//    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal:10,
 
  },
  card:{
    margin:10,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius:10,
    elevation:10,
    shadowOffset:{
      height:10,
      width:10,
    },

    shadowRadius:10,
    shadowOpacity:0.5,
    shadowColor:"black",
  }
})