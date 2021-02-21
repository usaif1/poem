//dependencies
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//imports
import PoemList from '../PoemList/PoemList';

const PoemsByAuthor = (props) => {
  const {authorName, navigation} = props.route.params;

  return <PoemList authorName={authorName} navigation={navigation} />;
};

export default PoemsByAuthor;

const styles = StyleSheet.create({});
