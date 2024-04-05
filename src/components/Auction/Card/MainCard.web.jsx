import { Button, Text } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

// TODO:
// -> Add countdown;
// -> Add truncate for title and description;
function MainCard({ title, description, image }) {
  return (
    <div style={styles.container}>
      <img style={styles.image} src={image} />
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
  image: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    border: '1px solid #000',
    borderRadius: '4px',
    borderColor: '#F1F1F4',
    padding: '2.5%',
    marginBottom: '20px',
  },
  image: {
    flex: 1,
    width: '100%',
    aspectRatio: '16/9',
  },
  title: {},
  description: {},
});

export default MainCard;
