import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FriendsProfileDatas } from '../apis/ActivityDatabaseData';

const ActivityThisWeek = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text style={{fontWeight: 'bold'}}>이번 주</Text>
      <View style={{flexDirection: 'row', paddingVertical: 10}}>
        {FriendsProfileDatas.slice(0, 3).map((data, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.push('FriendsProfile', data)
              }}
              key={index}>
              <Text>{data.name}(" ")</Text>
            </TouchableOpacity>
          )
        })}
        <Text>님이 팔로우 하기 시작했습니다.</Text>
      </View>
    </>
  )
}

export default ActivityThisWeek