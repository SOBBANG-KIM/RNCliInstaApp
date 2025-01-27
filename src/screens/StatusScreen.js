import React, { useEffect, useRef } from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity, Animated, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import Ionic from 'react-native-vector-icons/Ionicons';

const StatusScreen = ({ route, navigation }) => {
  const { name, image } = route.params;
  const statusBarHeight = getStatusBarHeight() + 20;

  const progress = useRef(new Animated.Value(0)).current;
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 5,
      delay: 0,
      duration: 5000,
      useNativeDriver: false,
    }).start(() => {
      if (navigation.canGoBack()) { // 애니메이션이 끝나기 전에 컴포넌트가 언마운트(unmount)되면 문제가 발생
        navigation.goBack(); // 애니메이션이 끝나면 뒤로가기 됨
      }
    }
  );
  }, [progress, navigation]);

  return (
    <SafeAreaView
      style={{ 
        backgroundColor: 'black',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          marginTop: Platform.OS === 'ios' ? statusBarHeight : 0,
          height: 3,
          width: '100%',
          borderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 18,
        }}
      >
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
          }}
        />
      </View>
      <View
       style={{
        marginTop: Platform.OS === 'ios' ? statusBarHeight : 0,
        padding: '15',
        flexDirection: 'row',
        alignItems:'center',
        position: 'absolute',
        top: 12,
        left: 0,
        width: '90%',
       }}
      >
        <View
          style={{
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image 
            source={image}
            style={{
              backgroundColor: 'orange',
              width: '92%',
              height: '92%',
              borderRadius: 100,
              resizeModel: 'cover',
            }}
          />
        </View>
        <View
          style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}
        >
          <Text style={{ fontSize: 15, paddingLeft: 10, color: 'white' }} >
            {name}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="close" color="white" style={{ opacity: 0.6, fontSize: 15 }}/>
          </TouchableOpacity>
        </View>
      </View>

      <Image 
        source={image} 
        style={{
          position: 'absolute',
          width: '100%',
          height: 600,
        }}
      />
    </SafeAreaView>
  )
}

export default StatusScreen