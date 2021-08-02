import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <Text>Go to Jane's profile</Text>
    </TouchableOpacity>
  );
};

export default HomeScreen;
