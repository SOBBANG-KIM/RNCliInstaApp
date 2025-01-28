import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FriendsProfileDatas } from '../apis/ActivityDatabaseData'

import ActivityThisWeek from '../components/ActivityThisWeek'
import ActivityPrevious from '../components/ActivityPrevious'
import ActivityRecommend from '../components/ActivityRecommend'

const ActivityScreen = () => {
  return (
    <SafeAreaView style={{width: '100%', backgroundColor: 'white'}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          borderBottomWidth: 0.5,
          borderBottomColor: '#dedede',
          padding: 10,
        }}
      >
        활동
      </Text>

      <ScrollView style={{ margin: 10, }} showsVerticalScrollIndicator={false}>
        <ActivityThisWeek />

        <Text style={{fontWeight: 'bold', paddingVertical: 10}}>이전 활동</Text>
        {FriendsProfileDatas.slice(3, 6).map((data, index) => {
          return (
            <ActivityPrevious data={data} key={index} />
          )
        })}

        <Text style={{fontWeight: 'bold', paddingVertical: 10}}>회원님을 위한 추천</Text>

        {FriendsProfileDatas.slice(6, 12).map((data, index) => ( // 괄호 유의
          <ActivityRecommend data={data} key={index} />
        ))}

      </ScrollView>
    </SafeAreaView>
  )
}

export default ActivityScreen