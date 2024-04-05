import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

function HomeLayout({ children }) {
  return (
    <div id="HomeLayout" style={styles.container}>
      {children}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#FCFCFC',
  },
});

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
