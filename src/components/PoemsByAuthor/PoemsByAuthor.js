//dependencies
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

//imports
import PoemList from '../PoemList/PoemList';
import {fetchPoems} from '../../actions/index';
import AppBar from '../AppBar/AppBar';

const PoemsByAuthor = (props) => {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {authorName, navigation} = props.route.params;

  useEffect(() => {
    fetchPoems(setPoems, setLoading, poems, authorName);
  }, []);

  return (
    <View style={{flex: 1}}>
      <AppBar
        fetchPoems={getPoemsByTitle}
        setPoems={setPoems}
        text={`Enjoy Your Favorite Poems`}
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

export default PoemsByAuthor;

const styles = StyleSheet.create({});
