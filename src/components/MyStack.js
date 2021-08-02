import * as React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('DetailAgain')}>
        <Text style={{color: 'blue'}}>Go to Details... again</Text>
      </TouchableOpacity>
    </View>
  );
}
function DetailsAgain({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text style={{color: 'blue'}}>Go to again</Text>
      </TouchableOpacity>
    </View>
  );
}
const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="DetailAgain" component={DetailsAgain} />
    </Stack.Navigator>
  );
};

export default MyStack;
