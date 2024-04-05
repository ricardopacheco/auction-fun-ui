import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

function MainHeader() {
  return (
    <View style={styles.container}>
      <Text>Mobile Native Header</Text>
      <Button title="Go to Staff" onPress={() => router.push('/staff')} />
      <Button title="Go to User" onPress={() => router.push('/users')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
});

export default MainHeader;
