import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Anasayfa</Text>
    <Button title='Kursları Görüntüle'
    onPress={()=>navigation.navigate('Kurslar')}/>
  </View>
  )
}

const styles = StyleSheet.create({})