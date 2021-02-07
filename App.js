//dependencies
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

//imports
import Home from './src/Screens/Home';
import Authors from './src/Screens/Authors';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'edit';
            }

            if (route.name === 'Authors') {
              iconName = 'user-circle-o';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2E7DFF',
          inactiveTintColor: 'gray',
          labelStyle: {fontSize: 13, marginBottom: 5, marginTop: -6},
          style: {height: 55},
          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Authors" component={Authors} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
