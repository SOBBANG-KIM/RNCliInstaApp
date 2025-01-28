import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import { FriendsProfileDatas } from '../apis/ActivityDatabaseData';
import FriendItem from '../components/FriendItem';

const FriendProfileScreen = ({route, navigation}) => {
  const {name, profileImage, posts, followers, following} = route.params;

  return (
    <SafeAreaView
      style={{
        width: '100%',
        backgroundColor: 'white',
      }}
    >
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="arrow-back" style={{fontSize:20, color: 'black'}}/>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '92%',
            }}
          >
            <Text style={{fontSize:15, marginLeft: 10, fontWeight: 'bold'}}>
              {name}
            </Text>
            <Feather name="more-vertical" style={{fontSize: 20, color: 'black'}}/>
          </View>
        </View>

        <ProfileBody
          name={name}
          profileImage={profileImage}
          posts={posts}
          followers={followers}
          following={following}
        />

        <ProfileButton id={1} />

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{paddingTop: 10}}
        >
          {name === FriendsProfileDatas.name ? null 
            : FriendsProfileDatas.map((data, index) => (
              <FriendItem data={data} key={index} name={name}/>
            ))}

        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default FriendProfileScreen