import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, StatusBar, Dimensions, Image } from 'react-native'

import SearchInput from '../components/SearchInput'
import SearchContent from '../components/SearchContent'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const SearchScreen = () => {
  const [image, setImage] = useState(null);

  const statusBarHeigth = getStatusBarHeight();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const getData = (data) => {
    setImage(data);
  }
  

  return (
    <SafeAreaView
      style={{
        width: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchInput />
        <SearchContent data={getData}/>
      </ScrollView>
      {image ? 
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(52,52,52,0.8)',
          }}
        >
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View
            style={{
              position: 'absolute',
              top: windowHeight / 6,
              left: windowWidth / 18,
              backgroundColor: 'white',
              width: '90%',
              height: 465,
              borderRadius: 15,
              zIndex: 1,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}
            >
              <Image source={image} style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
              />
              <View style={{ paddingLeft: 8 }}>
                <Text style={{ fontSize: 12, fontWeight: '600' }}>
                  친구 아이디
                </Text>
              </View>
            </View>
            <Image source={image} style={{ width: '100%', height: '80%' }} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent:'space-around',
                width: '100%',
                alignItems: 'center',
                padding: 8,
              }}
            >
              <Ionic name="heart-outline" size={26} />
              <Ionic name="person-circle-outline" size={26} />
              <Feather name="navigation" size={26} />
            </View>
          </View>
        </View>
      : null}
    </SafeAreaView>
  )
}

export default SearchScreen