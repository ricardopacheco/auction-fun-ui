import { Card, Text } from '@ui-kitten/components';
import Countdown from 'react-countdown';
import { StyleSheet } from 'react-native';

function AuctionCard() {
  return (
    // <View className={styles.container}>
    //   <Text>Auction Card!</Text>
    // </View>
    <>
      <Card style={styles.card} status="primary">
        <Text>Primary</Text>
        <Countdown date={Date.now() + 10000} />
      </Card>
      <Card style={styles.card} status="success">
        <Text>Success</Text>
        <Countdown date={Date.now() + 100000} />
      </Card>
      <Card style={styles.card} status="info">
        <Text>Info</Text>
        <Countdown date={Date.now() + 200000} />
      </Card>
      <Card style={styles.card} status="warning">
        <Text>Warning</Text>
        <Countdown date={Date.now() + 300000} />
      </Card>
      <Card style={styles.card} status="danger">
        <Text>Danger</Text>
        <Countdown date={Date.now() + 400000} />
      </Card>
      <Card style={styles.card} status="basic">
        <Text>Basic</Text>
        <Countdown date={Date.now() + 500000} />
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#000',
    width: 300,
    height: 300,
  },
  card: {
    margin: 2,
  },
});

export default AuctionCard;
