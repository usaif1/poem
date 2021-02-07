//dependencies
import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = (props) => {
  const [text, setText] = useState('');
  const searchIcon = <Icon name="search" size={20} color="#3273FF" />;
  const ripple = {
    color: '#8BB0FF',
    radius: 22,
  };

  return (
    <View style={[styles.container]}>
      <TextInput
        onChangeText={(text) => setText(text)}
        value={text}
        style={styles.textInput}
        placeholder="Enter Poem Or Poet Name"
      />
      <Pressable
        title="Search"
        onPress={() => console.log('Button Pressed')}
        android_ripple={ripple}
        style={styles.btn}>
        {searchIcon}
      </Pressable>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textInput: {
    height: 20,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
  },
  btn: {
    marginLeft: 5,
    padding: 10,
    borderColor: '#3273FF',
  },
});
