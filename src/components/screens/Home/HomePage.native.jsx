import { StyleSheet, View } from 'react-native';

import MainCard from '~/components/Auction/Card/MainCard';
import UserMainHeader from '~/components/UI/Home/MainHeader/MainHeader';

function HomePage() {
  return (
    <View style={styles.container}>
      <UserMainHeader />

      <View style={styles.list}>
        <MainCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  list: {},
});

export default HomePage;
