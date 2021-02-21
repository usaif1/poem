//dependencies
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//imports
import RandomPoems from '../components/RandomPoems/RandomPoems';
import SinglePoem from './SinglePoem';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RandomPoems"
        component={RandomPoems}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="SinglePoem" component={SinglePoem} />
    </Stack.Navigator>
  );
};

export default Home;
