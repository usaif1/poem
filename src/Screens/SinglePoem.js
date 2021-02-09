//dependencies
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

//imports
import {bg} from '../utils/Backgrounds';

const SinglePoem = (props) => {
  const {poem} = props.route.params;

  var bgColor = bg[Math.floor(Math.random() * bg.length)];

  function addNewlines(str) {
    var formattedString = str.split(',').join('\n');

    return formattedString;
  }

  return (
    <View
      style={{
        backgroundColor: `#ffffff`,
        flex: 1,
      }}>
      <ScrollView style={{marginHorizontal: 10}}>
        <Text style={styles.title}>{poem.title}</Text>
        <Text style={styles.author}>{poem.author}</Text>
        <Text style={styles.content}>{addNewlines(poem.lines.toString())}</Text>
      </ScrollView>
    </View>
  );
};

export default SinglePoem;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#353535',
  },
  author: {
    marginTop: 25,
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    color: '#353535',
  },
  content: {
    marginTop: 25,
    fontSize: 15,
    fontFamily: 'Roboto-Italic',
    marginBottom: 5,
    color: '#353535',
  },
});
