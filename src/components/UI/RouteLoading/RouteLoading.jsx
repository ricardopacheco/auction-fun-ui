import { ActivityIndicator, StyleSheet, View } from 'react-native';

function RouteLoading() {
  return (
    <View style={styles.routeLoading}>
      <ActivityIndicator size="large" color="#666" />
    </View>
  );
}

const styles = StyleSheet.create({
  routeLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RouteLoading;
