import { Button, Card, Divider, Text } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import { Image, StyleSheet } from 'react-native';

// TODO:
// -> Add countdown;
// -> Add truncate for title and description;
function MainCard({ title, description, image }) {
  const cardStatusList = ['primary', 'success', 'info', 'warning', 'danger', 'basic'];

  return (
    <>
      <Card style={styles.card} status={cardStatusList[1]}>
        <Image source={{ uri: image }} style={{ width: '100%', height: 100 }} />
        <Text category="h4">{title}</Text>
        <Text>{description}</Text>

        <Divider style={{ width: '100%', marginVertical: 5 }} />

        <Button size="small" status="primary">
          Bid!
        </Button>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 5,
  },
});

MainCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MainCard;
