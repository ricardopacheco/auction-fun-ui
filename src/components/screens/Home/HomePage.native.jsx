import MasonryList from '@react-native-seoul/masonry-list';
import { StyleSheet, View } from 'react-native';

import MainCard from '~/components/Auction/Card/MainCard';
import UserMainHeader from '~/components/UI/Home/MainHeader/MainHeader';

function HomePage() {
  const data = Array.from({ length: 10 }, (el, i) => ({
    title: `Auction title ${i}`,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. ${i}`,
    image: `https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x600/img-${parseInt(Math.random() * (87 - 1) + 1, 10)}.jpg`,
  }));

  return (
    <View style={styles.container}>
      <UserMainHeader />

      <MasonryList
        style={{ padding: 10 }}
        //ListHeaderComponent
        //ListFooterComponent
        //ListEmptyComponent
        //LoadingView
        data={data}
        numColumns={1}
        renderItem={({ item }) => <MainCard {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  list: {},
});

export default HomePage;
