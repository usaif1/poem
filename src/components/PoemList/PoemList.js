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
import {v4 as uuidv4, v4} from 'uuid';
import {createStackNavigator} from '@react-navigation/stack';

//imports
import PoemCard from '../PoemCard/PoemCard';
import AppBar from '../AppBar/AppBar';
import {fetchPoems} from '../../actions';

const Stack = createStackNavigator();

const PoemList = ({navigation}) => {
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
          return (
            <PoemCard poem={poem} key={uuidv4()} navigation={navigation} />
          );
        })
      ) : (
        <View style={{flex: 1}}>
          <ActivityIndicator size={50} color="#2E7DFF" />
        </View>
      )}
    </View>
  );

  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <AppBar />
      <ScrollView>
        <View style={styles.poemListContainer}>
          {poems.length > 0 ? (
            poems.map((poem) => {
              return (
                <PoemCard poem={poem} key={v4()} navigation={navigation} />
              );
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

export default PoemList;

const styles = StyleSheet.create({
  poemListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
