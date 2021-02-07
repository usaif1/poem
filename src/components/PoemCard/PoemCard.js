import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dimensions} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

const width = Dimensions.get('window').width;

const PoemCard = (props) => {
  const {poem} = props;
  return (
    <View key={poem.title} r>
      <Card style={styles.container}>
        <Card.Title
          title={`${poem.title}`}
          style={styles.title}
          titleNumberOfLines={2}
        />
        <Card.Content>
          <Title style={styles.author}>{poem.author}</Title>
          <Paragraph numberOfLines={6}>{poem.lines}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default PoemCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2.3,
    height: 270,
    paddingTop: 8,
    marginBottom: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    height: 50,
  },

  author: {
    marginBottom: 15,
    fontSize: 11,
    fontFamily: 'Roboto-Italic',
  },

  content: {
    fontSize: 12,
  },
});
