import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Seperator = () => {
  return <View style={styles.container}></View>;
};

export default Seperator;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#FAFAFA',
  },
});
