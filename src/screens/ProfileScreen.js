import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import ProfileBody from '../components/ProfileBody'
import ProfileButton from '../components/ProfileButton'

import Entypo from 'react-native-vector-icons/Entypo'

const ProfileScreen = () => {
  let circles = [];
  let numberOfCircles = 10;

  for(let index = 0; index < numberOfCircles; index++) {
    circles.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth:1,
              opacity: 0.7,
              marginHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Entypo name="plus" size={40} color="black" />
          </View>
        ) : (
          <View 
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'black',
              opacity: 0.1,
              marginHorizontal: 5,
            }}
          />
        )}
      </View>
    )
  }
  
  return (
    <SafeAreaView style={{width: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name="Johnny"
          accountName="johnny"
          profileImage={require('../../assets/images/userProfile.jpeg')}
          followers="300"
          following="10"
          posts="458"
        />

        <ProfileButton
          id={0}
          name="Johnny"
          accountName="johnny"
          profileImage={require('../../assets/images/userProfile.jpeg')}
        />
      </View>

      <View>
        <ScrollView
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
          style={{
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}>
          {circles}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen