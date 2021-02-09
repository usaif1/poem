//dependencies
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dimensions} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

//imports
import {bg} from '../../utils/Backgrounds';

const width = Dimensions.get('window').width;

const PoemCard = (props) => {
  const {poem} = props;

  var bgColor = bg[Math.floor(Math.random() * bg.length)];

  return (
    <View key={poem.title}>
      <Card style={[styles.container, {backgroundColor: bgColor.hexcode}]}>
        <Card.Title
          title={`${poem.title}`}
          titleStyle={[{color: 'white'}, styles.title]}
          titleNumberOfLines={2}
        />
        <Card.Content>
          <Title style={[styles.author, {color: 'white'}]} numberOfLines={2}>
            {poem.author}
          </Title>
          <Paragraph numberOfLines={7} style={{color: 'white'}}>
            {poem.lines}
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default PoemCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2.2,
    height: 280,
    marginBottom: 5,
    borderRadius: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    height: 70,
    marginTop: 10,
  },

  author: {
    marginBottom: 15,
    fontSize: 11,
    fontFamily: 'Roboto-Italic',
    fontWeight: '600',
  },

  content: {
    fontSize: 12,
    fontWeight: '600',
  },
});
