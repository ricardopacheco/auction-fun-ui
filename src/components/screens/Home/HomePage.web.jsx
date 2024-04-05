import { StyleSheet } from 'react-native';

import MainCard from '~/components/Auction/Card/MainCard';
import UserMainHeader from '~/components/UI/Home/MainHeader/MainHeader';

function HomePage() {
  const description =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat atque architecto, quo est exercitationem doloremque adipisci, alias hic aliquam neque et ipsa error cupiditate vel. Obcaecati id doloribus quaerat deleniti.';
  return (
    <div style={styles.container}>
      <UserMainHeader />

      <div style={styles.list}>
        {Array.from({ length: 10 }, (el, i) => (
          <MainCard key={i} title="Auction title" description={description} />
        ))}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {},
  list: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default HomePage;
