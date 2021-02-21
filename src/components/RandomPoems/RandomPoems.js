//dependencies
import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

//imports
import PoemList from '../PoemList/PoemList';
import AppBar from '../AppBar/AppBar';
import {fetchPoems, getPoemsByTitle} from '../../actions/index';

const RandomPoems = ({navigation}) => {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRandomPoems = () => {
    setLoading(true);
    setPoems([]);
    fetchPoems(setPoems, setLoading, poems, null);
  };

  useEffect(() => {
    fetchRandomPoems();
    //eslint-disable-next-line
  }, []);

  return (
    <View style={{flex: 1}}>
      <AppBar
        fetchPoems={getPoemsByTitle}
        setPoems={setPoems}
        text={`Enjoy Your Favorite Poems`}
        fetchAll={fetchRandomPoems}
      />
      {poems.length === 0 && loading ? (
        <View style={{flex: 1, marginTop: 10}}>
          <ActivityIndicator size={50} color="#2E7DFF" />
        </View>
      ) : (
        <PoemList authorName={null} navigation={navigation} poems={poems} />
      )}
    </View>
  );
};

export default RandomPoems;

const styles = StyleSheet.create({});
