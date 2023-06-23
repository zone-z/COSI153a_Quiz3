import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ValueProvider from './ValueContext';

import ProfilePage from './ProfilePage';
import BMIPage from './BMIPage';
import AgePage from './AgePage';

const Tab = createBottomTabNavigator();

const App = () => {

  const [profile, setProfile] = useState({
    name: 'Tim Hickey',
    age: 66.95,
    weight: 165,
    height: 68,
  });

  return (
      <NavigationContainer>
        <ValueProvider value={profile}>
          <Tab.Navigator
            tabBarOptions={{
              labelStyle: {fontSize: 30}
            }}
          >
            <Tab.Screen
              name="Profile"
              options={{tabBarLabel: 'Profile', headerTitleStyle: {fontSize: 40}}}
            >
              {(props) => <ProfilePage {...props}/>}
            </Tab.Screen>
            <Tab.Screen
              name="BMI"
              options={{tabBarLabel: 'BMI', headerTitleStyle: {fontSize: 40}}}
            >
              {(props) => <BMIPage {...props}/>}
            </Tab.Screen>
            <Tab.Screen
              name="Age"
              options={{tabBarLabel: 'Age', headerTitleStyle: {fontSize: 40}}}
            >
              {(props) => <AgePage {...props}/>}
            </Tab.Screen>
          </Tab.Navigator>
        </ValueProvider>
      </NavigationContainer>
  );
};

export default App;