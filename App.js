import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import ScrollingText from './ScrollingText';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name = "Sejarah React Native"
      component = {ScrollingText}
      options = {{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#00587a',
          height: 40,
        },
      }}
       />
    </Stack.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
    <View>
      <Text style={styles.judul}>SCROLLING TEXT</Text>
    </View>
      <MyStack />
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.buttonText}>ADD COMMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLike}>
          <Text style={styles.buttonText}>LIKE</Text>
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  judul: {
    backgroundColor: '#008891',
    color: 'white',
    padding: 5,
    fontSize: 30,
    borderBottomWidth: 3,
    borderColor: '#0f3057'
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  buttonAdd: {
    backgroundColor: '#0f3057',
    padding: 10,
    width: 180,
    alignItems: 'center',
  },
  buttonLike: {
    backgroundColor: '#3d7ea6',
    padding: 10,
    width: 180,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f6f5f5'
  },
});

export default App;
