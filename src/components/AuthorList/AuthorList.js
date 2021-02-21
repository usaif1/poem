//dependencies
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

//imports
import {fetchAuthors} from '../../actions/index';
import AuthorCard from '../AuthorCard/AuthorCard';

const AuthorList = (props) => {
  const [authors, setAuthors] = useState([]);

  const fetchAuthorlist = () => {
    fetchAuthors(setAuthors);
  };

  useEffect(() => {
    fetchAuthorlist();
    //eslint-disable-next-line
  }, []);

  const renderItem = ({item}) => <AuthorCard author={item} />;
  
  return (
    <View style={{flex: 1}}>
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
