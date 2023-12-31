import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';
import React from 'react';
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import  { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';

import { setDestination, setOrigin } from '../slices/navSlice';
import NavOptions from '../components/NavOptions';
import NavFavourite from '../components/NavFavourite';

const HomeScreen = () => {
const dispatch = useDispatch();

  return (
    <SafeAreaView style={[tw`bg-white h-full`,{marginTop: StatusBar.currentHeight}]}>
      <View style={tw`p-5`}>
        <Image
        style={{width: 110, height: 110, resizeMode: 'contain'}} 
            source={
                require("../assets/PickMeUp.png")}
        />

        <GooglePlacesAutocomplete 
          placeholder='where from?'
          styles={{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            },
          }}
          onPress={(data, details = null) => {
              dispatch(setOrigin({
                location: details.geometry.location,
                description: data.description
              }))

              dispatch(setDestination(null));
          }}
          
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY, 
            language: "en"
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />

        <NavOptions />
        <NavFavourite />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})