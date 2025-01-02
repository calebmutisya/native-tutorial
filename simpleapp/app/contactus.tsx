import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Link } from 'expo-router'

const contact = () => {
  return (
    <View>
      <Text style={styles.title}>Contact Us</Text>

      <Link href={"/"} style={{marginHorizontal: 'auto'}} asChild>  
        <Pressable style={styles.button}  >
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
      </Link> 
    </View>
  )
}

export default contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
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