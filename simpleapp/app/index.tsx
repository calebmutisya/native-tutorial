import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import { Link } from 'expo-router'

import Images from '@/constants/Images'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
       source={Images.icedCoffee}// Access `icedCoffee` from the `Images` object
       resizeMode="cover"
       style={styles.image}>
        <Text style={styles.title}>Coffee Shop</Text>

        <Link href={"/contactus"} style={{marginHorizontal: 'auto'}} asChild>
          <Pressable style={styles.button}  >
            <Text style={styles.buttonText}>Explore ☕</Text>
          </Pressable>  
        </Link>
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
  title : {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 120
  },
  button: {
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  }
})