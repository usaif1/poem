import React from 'react';
import {StyleSheet, View} from 'react-native';

//imports
import AppBar from '../components/AppBar/AppBar';
import AuthorList from '../components/AuthorList/AuthorList';

const Authors = () => {
  return (
    <View style={{flex: 1}}>
      <AppBar text={`Choose Your Favorite Author`} />
      <AuthorList />
    </View>
  );
};

export default Authors;

const styles = StyleSheet.create({});
