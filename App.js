import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, NavigationContainer } from 'react-native';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>¡Abre App.js para empezar a trabajar en tu app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const strack = createStackNavigator();
  function App(){
    return(
      <NavigationContainer>
       <Stack.navigator roadName="homeScreen"screenOptions={{
        header:false
       }}>
        <Stack.screen name="Home" component={HomeScreen}/>
        <Stack.screen name="issLocation" component={IssLocationScreen}/>
        <Stack.screen name="Meteors" component={MeteorScreen}/>
       </Stack.navigator>
      </NavigationContainer>
    )

  }
