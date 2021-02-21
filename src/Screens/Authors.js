//dependencies
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//imports
import AuthorList from '../components/AuthorList/AuthorList';
import PoemsByAuthor from '../components/PoemsByAuthor/PoemsByAuthor';

const Stack = createStackNavigator();

const Authors = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthorList"
        component={AuthorList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="PoemsByAuthor" component={PoemsByAuthor} />
    </Stack.Navigator>
  );
};

export default Authors;
