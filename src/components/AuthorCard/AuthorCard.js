//dependencies
import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {Card} from 'react-native-paper';

//imports

const AuthorCard = (props) => {
  const {author} = props;

  return (
    <TouchableHighlight
      underlayColor="#EAEAEA"
      activeOpacity={0.85}
      onPress={() => alert('pressed')}>
      <Card style={styles.container} elevation={1}>
        <Text style={styles.authorName}>{author.author}</Text>
      </Card>
    </TouchableHighlight>
  );
};

export default AuthorCard;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 0,
    borderBottomColor: '#FAFAFA',
    borderBottomWidth: 1,
  },
  authorName: {
    fontFamily: 'Roboto',
    fontSize: 18,
  },
});
