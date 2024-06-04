import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const CustomHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Button title="Menu" onPress={() => navigation.openDrawer()} />
      <View style={styles.buttonContainer}>
        <Button title="Button1" onPress={() => {}} />
        <Button title="Button2" onPress={() => {}} />
      </View>
    </View>
  );
};

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          header: () => <CustomHeader navigation={navigation} />
        }} 
      />
    </Stack.Navigator>
  );
};

const SettingsStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ 
          header: () => <CustomHeader navigation={navigation} />
        }} 
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Settings" component={SettingsStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
