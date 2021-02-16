//dependencies
import 'react-native-get-random-values';
import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {v4 as uuidv4, v4} from 'uuid';
import {createStackNavigator} from '@react-navigation/stack';

//imports
import PoemCard from '../PoemCard/PoemCard';
import AppBar from '../AppBar/AppBar';
import {fetchPoems, getPoemsByTitle} from '../../actions';

const Stack = createStackNavigator();

const PoemList = ({navigation}) => {
  const [poems, setPoems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const onRefresh = useCallback(() => {
    setPoems([]);
    setLoading(false);
    setRefreshing(true);
    fetchPoems(setPoems, setRefreshing, setLoading, poems);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchPoems(setPoems, setRefreshing, setLoading, poems);
    //eslint-disable-next-line
  }, []);

  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <AppBar
        fetchPoems={getPoemsByTitle}
        setPoems={setPoems}
        refreshAction={onRefresh}
        text={`Enjoy Your Favorite Poems`}
      />
      {poems.length === 0 && loading ? (
        <View style={{flex: 1, marginTop: 10}}>
          <ActivityIndicator size={50} color="#2E7DFF" />
        </View>
      ) : null}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.poemListContainer}>
          {poems.length > 0
            ? poems.map((poem) => {
                return (
                  <PoemCard poem={poem} key={v4()} navigation={navigation} />
                );
              })
            : null}
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
