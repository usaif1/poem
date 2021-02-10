//dependencies
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//imports
import PoemList from '../components/PoemList/PoemList';
import SinglePoem from './SinglePoem';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PoemList"
        component={PoemList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="SinglePoem" component={SinglePoem} />
    </Stack.Navigator>
  );
};

export default Home;
