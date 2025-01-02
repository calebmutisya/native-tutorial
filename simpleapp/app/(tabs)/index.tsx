import { View, Text, StyleSheet } from 'react-native'

const app = () => {
  return (
    <View style={styles.container}>
      <Text>Cofee Shop</Text>
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
})