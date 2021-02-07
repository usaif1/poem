//dependencies
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

//imports
import PoemCard from '../components/PoemCard/PoemCard';
import AppBar from '../components/AppBar/AppBar';

const Home = () => {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    fetchPoems();
    //eslint-disable-next-line
  }, []);

  const fetchPoems = async () => {
    try {
      const res = await axios.get(
        'https://poetrydb.org/random/10/author,title,lines',
      );
      setPoems(res.data);
    } catch (error) {
      alert('Something went wrong');
      alert(error);
    }
  };

  return (
    <View style={{marginBottom: 10, flex: 1}}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <AppBar />
      <ScrollView>
        <View style={styles.poemListContainer}>
          {poems.length > 0 ? (
            poems.map((poem) => {
              return <PoemCard poem={poem} />;
            })
          ) : (
            <View style={{flex: 1}}>
              <ActivityIndicator size={50} color="#2E7DFF" />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  poemListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 30,
    justifyContent: 'space-between',
    marginTop: 20,
    flex: 1,
  },
});
