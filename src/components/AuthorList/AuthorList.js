//dependencies
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

//imports
import {fetchAuthors} from '../../actions/index';
import AuthorCard from '../AuthorCard/AuthorCard';
import AppBar from '../AppBar/AppBar';

const AuthorList = ({navigation}) => {
  const [authors, setAuthors] = useState([]);

  const fetchAuthorlist = () => {
    fetchAuthors(setAuthors);
  };

  useEffect(() => {
    fetchAuthorlist();
    //eslint-disable-next-line
  }, []);

  const renderItem = ({item}) => (
    <AuthorCard author={item} navigation={navigation} />
  );

  return (
    <View style={{flex: 1}}>
      <AppBar text="Search Poems By Author" />
      <FlatList
        data={authors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AuthorList;

const styles = StyleSheet.create({});
