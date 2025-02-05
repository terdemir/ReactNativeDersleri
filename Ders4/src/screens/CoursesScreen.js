import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'




export default function CoursesScreen() {
    const kurslar=[
        {id:1, name:"Angular"},
        {id:2, name:"React"},
        {id:3, name:"C#"},
        {id:4, name:"Python"},
        {id:5, name:"ReactNative"},
      ]
  return (
    <FlatList data={kurslar}
    //horizontal
    //showsHorizontalScrollIndicator={false}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>{
      return <Text style={styles.icerik}>{item.name}</Text>;
    }}
    />
  );
}

const styles = StyleSheet.create({
    icerik: {
        fontSize:24,
        marginVertical:10,
        padding:20,
        backgroundColor:'yellow'
      },
});