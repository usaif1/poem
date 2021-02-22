//dependencies
import 'react-native-get-random-values';
import React from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import {v4 as uuidv4, v4} from 'uuid';

//imports
import PoemCard from '../PoemCard/PoemCard';

const PoemList = (props) => {
  const {navigation, poems} = props;

  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <ScrollView>
        <View style={styles.poemListContainer}>
          {poems.map((poem) => {
            return <PoemCard poem={poem} key={v4()} navigation={navigation} />;
          })}
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
