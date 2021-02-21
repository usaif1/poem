//dependencies
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

//imports
import {fetchAuthors, fetchAuthorsByName} from '../../actions/index';
import AuthorCard from '../AuthorCard/AuthorCard';
import AppBar from '../AppBar/AppBar';

const AuthorList = ({navigation}) => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAuthorlist = () => {
    setLoading(true);
    setAuthors([]);
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
      <AppBar
        fetchPoems={fetchAuthorsByName}
        setPoems={setAuthors}
        text={`Search Poems By Author`}
        fetchAll={fetchAuthorlist}
      />
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
