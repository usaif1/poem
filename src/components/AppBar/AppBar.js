//dependencies
import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Appbar} from 'react-native-paper';

const AppBar = (props) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  const {fetchPoems, setPoems, text, fetchAll} = props;

  const closeTextInput = () => {
    setShow(false);
    setValue('');
    fetchAll();
  };

  return (
    <Appbar.Header style={{backgroundColor: '#ffffff'}}>
      {show ? <Appbar.BackAction onPress={closeTextInput} /> : null}
      {!show ? (
        <Appbar.Content title={text} style={{marginLeft: 18}} />
      ) : (
        <View style={{marginLeft: 20}}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Poem"
            autoFocus={true}
            value={value}
            onChangeText={(text) => setValue(text)}
          />
        </View>
      )}
      <View style={styles.appbar}>
        <Appbar.Action
          icon="magnify"
          onPress={() => (show ? fetchPoems(value, setPoems) : setShow(true))}
          color="#FF5C5C"
        />
      </View>
    </Appbar.Header>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    right: 10,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
  },
  textInput: {
    borderColor: 'gray',
    fontSize: 18,
  },
});
