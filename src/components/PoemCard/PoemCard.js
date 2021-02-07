import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const PoemCard = (props) => {
  const {poem} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>
        {poem.title}
      </Text>
      <Text style={styles.author}>{poem.author}</Text>
      <Text numberOfLines={6}>{poem.lines}</Text>
    </View>
  );
};

export default PoemCard;

const styles = StyleSheet.create({
  container: {
    height: height / 3.5,
    width: width / 2.45,
    padding: 8,
    elevation: 0.5,
    marginBottom: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    height: 50,
    fontFamily: 'Roboto-Italic',
  },

  author: {
    marginBottom: 15,
    fontSize: 12,
    fontFamily: 'Roboto-Italic',
  },

  content: {
    fontSize: 12,
    fontFamily: 'Roboto-Italic',
  },
});
