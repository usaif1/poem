//dependencies
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

//imports
import PoemList from '../PoemList/PoemList';
import {fetchPoems, getPoemsByTitle} from '../../actions/index';
import AppBar from '../AppBar/AppBar';

const PoemsByAuthor = (props) => {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {authorName} = props.route.params;
  const {navigation} = props;

  useEffect(() => {
    fetchPoems(setPoems, setLoading, poems, authorName);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      {poems.length === 0 && loading ? (
        <View style={{flex: 1, marginTop: 10}}>
          <ActivityIndicator size={50} color="#2E7DFF" />
        </View>
      ) : (
        <PoemList authorName={null} poems={poems} navigation={navigation} />
      )}
    </View>
  );
};

export default PoemsByAuthor;

const styles = StyleSheet.create({});
