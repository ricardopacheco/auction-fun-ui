import { Button, Text } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

// TODO:
// -> Add countdown;
// -> Add truncate for title and description;
function MainCard({ title, description }) {
  return (
    <div style={styles.container}>
      <img
        style={styles.image}
        src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x600/img-42.jpg"
      />
      <h4 style={styles.title}>{title}</h4>
      <Text style={styles.description}>{description}</Text>
      <Text appearance="hint">Last updated 3 mins ago</Text>
      <Button size="small" status="primary">
        Bid!
      </Button>
    </div>
  );
}

MainCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '200px',
    height: '200px',
    border: '1px solid #000',
    borderRadius: '4px',
    borderColor: '#F1F1F4',
    padding: '10px',
  },
  image: {
    width: '200px',
    height: '100px',
  },
  title: {},
  description: {},
});

export default MainCard;
