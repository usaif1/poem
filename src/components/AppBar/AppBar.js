//dependencies
import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Appbar} from 'react-native-paper';

const AppBar = (props) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  const closeTextInput = () => {
    setShow(false);
    setValue('');
  };

  return (
    <Appbar.Header style={{backgroundColor: '#ffffff'}}>
      {show ? <Appbar.BackAction onPress={closeTextInput} /> : null}
      {!show ? (
        <Appbar.Content
          title="Enjoy Your Favorite Poems"
          style={{marginLeft: 18}}
        />
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
        <Appbar.Action icon="magnify" onPress={() => setShow(true)} />
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
