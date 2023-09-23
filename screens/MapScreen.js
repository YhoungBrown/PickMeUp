import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { createStackNavigator } from '@react-navigation/stack';

import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from '@rneui/base/dist/Icon/Icon';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View>

    <TouchableOpacity
    onPress={() => navigation.navigate("HomeScreen")}
     style={tw`absolute top-10 z-50 bg-gray-100 p-3 mx-2 rounded-full shadow-lg`}>
      <Icon name='menu'/>
    </TouchableOpacity>

      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen name='NavigateCard' component={NavigateCard}   options={{ headerShown: false, gestureEnabled: true,
          gestureDirection: 'horizontal',  }}/>
          <Stack.Screen name='RideOptionsCard' component={RideOptionsCard}   options={{ headerShown: false, gestureEnabled: true,
          gestureDirection: 'horizontal',  }}/>
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})