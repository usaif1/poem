//dependencies
import 'react-native-get-random-values';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {v4 as uuidv4} from 'uuid';

//imports
import PoemCard from '../components/PoemCard/PoemCard';
import AppBar from '../components/AppBar/AppBar';
import {fetchPoems} from '../actions';

const Home = () => {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    fetchPoems(setPoems);
    //eslint-disable-next-line
  }, []);

  //poem list
  const poemList = (
    <View style={styles.poemListContainer}>
      {poems.length > 0 ? (
        poems.map((poem) => {
          return <PoemCard poem={poem} key={uuidv4()} />;
        })
      ) : (
        <View style={{flex: 1}}>
          <ActivityIndicator size={50} color="#2E7DFF" />
        </View>
      )}
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <AppBar />
      <ScrollView>{poemList}</ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  poemListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 15,
    justifyContent: 'space-between',
    marginTop: 20,
    flex: 1,
  },
});
