import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import icedCoffee from "@/assets/images/iced-coffee.png"
import { text } from 'stream/consumers'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffee}
       resizeMode="cover"
       style={styles.image}>
        <Text style={styles.text}>Cofee Shop</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text : {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
})